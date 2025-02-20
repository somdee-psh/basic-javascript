const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const message = document.getElementById("message");

greetButton.addEventListener("click", function(){
    const name = nameInput.value.trim()
      if(name){
        message.textContent = `Hello!, ${name} Welcome to Learn JS`
      }else {
        message.textContent = "Please enter your name"
      }
    
})