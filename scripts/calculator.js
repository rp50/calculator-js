const button = document.querySelector('.ui-container');
let numOne = 0;
let numTwo = 0;
let onTwo = false;
let operator = 'none'
button.addEventListener('click', function (event){
  const buttonPressed = event.target.name;
  const currentNumber = parseInt(event.target.innerText, 10);
  if(isNaN(currentNumber)){
    if(buttonPressed === 'del-button'){
      if(onTwo){
        numTwo = Math.floor(numTwo/10);
        document.querySelector('.input-window--text').innerText = numTwo;
      }
      else{
        numOne = Math.floor(numOne/10);
        document.querySelector('.input-window--text').innerText = numOne;
      }
    }
    else if (buttonPressed === 'clear-button'){
      numOne = 0;
      numTwo = 0;
      onTwo = false;
      document.querySelector('.input-window--text').innerText = numOne;
    }
    else if (buttonPressed === 'div-button'){
      onTwo = true;
      operator = 'div';
    }
    else if (buttonPressed === 'mult-button'){
      onTwo = true;
      operator = 'mult';
    }
    else if (buttonPressed === 'sub-button'){
      onTwo = true;
      operator = 'sub';
    }
    else if (buttonPressed === 'add-button'){
      onTwo = true;
      operator = 'add';
    }
    else if (buttonPressed === 'equals-button'){
      if(operator === 'div'){
        numOne = numOne/numTwo;
      }
      else if (operator === 'mult'){
        numOne = numOne*numTwo;
      }
      else if (operator === 'sub'){
        numOne = numOne-numTwo;
      }
      else if (operator === 'add'){
        numOne = numOne+numTwo;
      }
      document.querySelector('.input-window--text').innerText = numOne;
      onTwo = false;
    }
  }
  else{
    if(onTwo){
      numTwo = numTwo*10+currentNumber;
      document.querySelector('.input-window--text').innerText = numTwo;
    }
    else{
      numOne = numOne*10+currentNumber;
      document.querySelector('.input-window--text').innerText = numOne;
    }
  }
});
