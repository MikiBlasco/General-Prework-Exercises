//  TO SEE HOW THIS EXAMPLE WORKS, UNCOMMENT OUT THE FOLLOWING LINE:
// also, don't worry about "prompt" that is used below, we will cover it later ;)

let fruitsElement = document.querySelector("em");
let fruitsContent = fruitsElement.innerText;
let buttonElement = document.querySelector("button");
let buttonContent = buttonElement.innerText;
console.log(fruitsElement, fruitsContent);
console.log(buttonElement, buttonContent);


let fruitsArr = ["pear", "apple", "peach", "coconut", "strawberry", "blueberry", "blackberry", "beans", "peas", "orange"]

let list = document.querySelector("ul")
for (let i=0; i<fruitsArr.length; i++){
    list.innerHTML += `<li>${fruitsArr[i]}</li>`
}

buttonElement.onclick = function () {

  const fruit  = prompt ("Enter the fruit name:");
  let type = " "
  switch (type) {

   case "pear":
   case "apple":
     type = "pome"
     break;

   case "peach":
   case "coconut":
     type = "drupe"
     break;
  
   case "strawberry":
   case "bluebrerry":
   case "blackberry":
     type = "berry"
     break;
  
   case "beans":
   case "peas": 
     type = "legumes"
     break; 
   
   default:
       type = "other";
       break;
  }
  alert (`${fruit} is type of: ${type}.`);
}