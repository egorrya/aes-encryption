const CryptoJS = require('./../node_modules/crypto-js');

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
