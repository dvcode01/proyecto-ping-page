const emailInput = document.querySelector('.container__email');
const errorElement = document.getElementById('error');
const btnElement = document.querySelector('.container__button');

btnElement.addEventListener('click', validationEmail);

function validationEmail(e){
    e.preventDefault();
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if(expReg.test(emailInput.value) === true){
        errorElement.style.display = 'none';
        emailInput.style.border = '2px solid hsl(223, 100%, 88%)';
    }else{
        errorElement.style.display = 'block';
        emailInput.style.border = '2px solid red';
    }
}