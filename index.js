const formMessage = document.querySelector('.form__message');
const formKey = document.querySelector('.form__key');
const formEncrypt = document.querySelector('.form__encrypt');
const formDecrypt = document.querySelector('.form__decrypt');
const formResult = document.querySelector('.form__result');

let message, key;

const encrypt = (message = '', key = '') => {
	message = CryptoJS.AES.encrypt(message, key);
	return message.toString();
};

const decrypt = (message = '', key = '') => {
	const code = CryptoJS.AES.decrypt(message, key);
	const decryptedMessage = code.toString(CryptoJS.enc.Utf8);

	return decryptedMessage;
};

[formEncrypt, formDecrypt].forEach((form) => {
	form.addEventListener('click', () => {
		message = formMessage.value;
		key = formKey.value;

		if (form === formEncrypt) formResult.textContent = encrypt(message, key);
		if (form === formDecrypt) formResult.textContent = decrypt(message, key);
	});
});

// fix 100vh on mobile
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});
