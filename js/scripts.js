const rangeElement = document.getElementById('range');
const printTextPassword = document.getElementById('password');
const printTextLength = document.getElementById('textolength');
const printButton = document.getElementById('button');
const checkboxElement = document.getElementById('checkbox-1');
const checkboxElement2 = document.getElementById('checkbox-2');
const checkboxElement3 = document.getElementById('checkbox-3');
const checkboxElement4 = document.getElementById('checkbox-4');

const randomMay = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const randomMin = 'abcdefghijklmnñopqrstuvwxyz';
const randomNum = '1234567890';
const randomSim = '!@#$%^&*()_+-={}[]:;<>,.?';

const checkboxInfo = () => {
  if (
    checkboxElement.checked ||
    checkboxElement2.checked ||
    checkboxElement3.checked ||
    checkboxElement4.checked
  ) {
    printButton.disabled = false;
  } else {
    printButton.disabled = true;
  }
};
checkboxElement.addEventListener('change', checkboxInfo);
checkboxElement2.addEventListener('change', checkboxInfo);
checkboxElement3.addEventListener('change', checkboxInfo);
checkboxElement4.addEventListener('change', checkboxInfo);

const printValueMin = () => {
  printTextLength.textContent = `LENGTH: ${rangeElement.value}`;
};
rangeElement.addEventListener('input', printValueMin);

const printPassword = () => {
  let password = '';
  if (checkboxElement.checked) {
    password += randomMay;
  }

  if (checkboxElement2.checked) {
    password += randomMin;
  }
  if (checkboxElement3.checked) {
    password += randomNum;
  }
  if (checkboxElement4.checked) {
    password += randomSim;
  }
  let newString = '';
  for (let i = 0; i < rangeElement.value; i++) {
    newString += password[Math.floor(Math.random() * password.length)];
  }
  printTextPassword.textContent = `${newString}`;
};

printButton.addEventListener('click', printPassword);
