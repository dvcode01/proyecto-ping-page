"use strict";

var emailInput = document.querySelector('.container__email');
var errorElement = document.getElementById('error');
var btnElement = document.querySelector('.container__button');
btnElement.addEventListener('click', validationEmail);

function validationEmail(e) {
  e.preventDefault();
  var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (expReg.test(emailInput.value) === true) {
    errorElement.style.display = 'none';
    emailInput.style.border = '2px solid hsl(223, 100%, 88%)';
  } else {
    errorElement.style.display = 'block';
    emailInput.style.border = '2px solid red';
  }
}