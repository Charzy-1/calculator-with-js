const buttonElement = document.querySelectorAll('.js-btn');
const displayElement = document.querySelector('.display');

const addInput = (event) => {
  const value = event.target.textContent;

  if (value === 'C') {
    displayElement.value = '';

    } else if (value === '=') {
      // Converting X to * so it can be evaluated
      const expression = displayElement.value.replace(/X/g, '*');
      displayElement.value = eval(expression);
      
    } else {
      displayElement.value += value;
    }
  }

buttonElement.forEach((button) => {
  button.addEventListener('click', addInput);
});



