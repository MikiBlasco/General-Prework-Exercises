
const listElement = document.querySelector("ul")

let boardArray = [
    [{x: 0, y:0}, {x:0, y:1}, {x:0, y:2}],
    [{x: 1, y:0}, {x:1, y:1}, {x:1, y:2}],
    [{x: 2, y:0}, {x:2, y:1}, {x:2, y:2}]
   ]
 

   const player = {
 x: 1,
 y: 1,
 path: []

};

  const lastPosition = {x: 1, y: 1};

function updatePath (thePlayer, command) {

 if (command === "l" || command == "r" || command === "u" || command == "d") {
    
     if (command === "l") {
          if(thePlayer.y > 0) {
        thePlayer.y -= 1 
        listElement.innerHTML +=`<li> Player go left moving from (${lastPosition.x}, ${lastPosition.y}) to (${thePlayer.x}, ${thePlayer.y}) </li>`
          } else {
              listElement.innerHTML += `<li> Move not allowed. Player would be placed out of the board. Try again"</li>`
          }
     }
               
     if (command === "r") {
         if(thePlayer.y < 2){
        thePlayer.y += 1 
        listElement.innerHTML +=`<li> Player go right moving from (${lastPosition.x}, ${lastPosition.y}) to (${thePlayer.x}, ${thePlayer.y}) </li>`
          } else  {
            listElement.innerHTML += `<li> Move not allowed. Player would be placed out of the board. Try again</li>`
          }            
     }  
 
      if (command === "u") {
          if(thePlayer.x > 0) {
        thePlayer.x -= 1 
        listElement.innerHTML +=`<li> Player go up moving from (${lastPosition.x}, ${lastPosition.y}) to (${thePlayer.x}, ${thePlayer.y}) </li>`
          } else {
            listElement.innerHTML += `<li> Move not allowed. Player would be placed out of the board. Try again"</li>`
          }          
     } 
     
     if (command === "d") {
         if(thePlayer.x < 2){
        thePlayer.x += 1 
        listElement.innerHTML +=`<li> Player go down movingd from (${lastPosition.x}, ${lastPosition.y}) to (${thePlayer.x}, ${thePlayer.y}) </li>`
          } else  {
            listElement.innerHTML += `<li> Move not allowed. Player would be placed out of the board. Try again"</li>`
          }             
     }

  } else {
    listElement.innerHTML += `<li> command not allowed </li>`
    } 
   
 lastPosition.x = thePlayer.x
 lastPosition.y = thePlayer.y

 player.path.push(lastPosition)

 } 

 let order = "llrj";
 for (i = 0; i < order.length; i ++) {
  let command = order[i]

 switch (order) {
  case "l":
    updatePath(player, command)
    break;
  case "r":
    updatePath(player, command)
    break;
  case "u":
    updatePath(player, command)
    break;
  case "d":
    updatePath(player, command)
  default:
    updatePath(player, command)
    break;    
 }

} 

 
    

