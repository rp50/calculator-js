const button = document.querySelector('.ui-container');
let numOne = 0;
let numTwo = 0;
button.addEventListener('click', function (event){
    const buttonPressed = event.target.name;
    const currentNumber = parseInt(event.target.innerText, 10);
    if(isNaN(currentNumber)){
      console.log(buttonPressed);
    }
    else{
      console.log(currentNumber);
    }
    document.querySelector(".input-window--text").innerText = "yeet";
});
