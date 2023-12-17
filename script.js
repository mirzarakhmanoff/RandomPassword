const passwordBox = document.querySelector('#password');
const passLength = 8;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-={}[]|:;';
const allCharc = upperCase + lowerCase + numbers + symbols;

function randPassword() {
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (passLength > password.length) {
    password += allCharc[Math.floor(Math.random() * allCharc.length)];
  }
  passwordBox.value = password;
}

function copyPass() {
  passwordBox.select();
  document.execCommand('copy');
}
