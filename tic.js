
//////////////////////////////////////////
let boxes1 = document.querySelectorAll("#boxes");
let reset = document.querySelectorAll("#btn");
let Newgame = document.querySelectorAll(".btn2");
let containes = document.querySelectorAll(".msg-container");
let massage = document.querySelectorAll("#msg");
amit.className = "hide";
let boxcol = document.querySelectorAll(".box");



let turnX = true //playerX ,player0
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Add an event listener to each box
boxes1.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    //console.log("you clich me")

    if (turnX) {
      boxes.innerHTML = "X";

      turnX = false;
    } else {
      boxes.innerHTML = "O";
      turnX = true;
    }
    boxes.disabled = true;
    checkwinner();
  });
});

// Disable the boxes
const disableboxes = () => {
  for (let boxes of boxes1) {
    boxes.disabled = true;
  }
};

// Enable the boxes
const enableboxes = () => {
  for (let boxes of boxes1) {
    boxes.disabled = false;
    boxes.innerText = "";
  }
};

// Show the winner
const showwinner = (winner) => {
  msg.innerText = `Congratulation, winner is ${winner}`;
  amit.classList.remove("hide");
  disableboxes();
};

// Check for a winner
const checkwinner = () => {
  for (let pattern of winpattern) {
    //  console.log(pattern[0],pattern[1],pattern[2]);
    //
    //  console.log(boxes1[pattern[0]].innerText,
    //              boxes1[pattern[1]].innerText,
    //              boxes1[pattern[2]].innerText
    //              );

    let pos1val = boxes1[pattern[0]].innerText;
    let pos2val = boxes1[pattern[1]].innerText;
    let pos3val = boxes1[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);

        showwinner(pos1val);
      }
    }
  }
};

// Reset the game
const resetGame = () => {
  turnX = true;
  enableboxes();
  amit.classList.add("hide");
};

// Add event listeners for reset and new game
btn.addEventListener("click", resetGame);
btn2.addEventListener("click", resetGame);
/////////////////////////////////////////////////////////////////







/*let boxes1=document.querySelectorAll("#boxes");
let reset=document.querySelectorAll("#btn");
let Newgame=document.querySelectorAll(".btn2");
let containes=document.querySelectorAll(".msg-container");
let massage=document.querySelectorAll("#msg");
amit.className="hide";
let boxcol=document.querySelectorAll(".box");



let turnX=true//playerX ,player0
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



boxes1.forEach((boxes) => {
    boxes.addEventListener("click",()=> {
    //console.log("you clich me")
    
    if(turnX){
    boxes.innerHTML="X";
    
    turnX= false;
    }
    else{
        boxes.innerHTML="O";
        turnX=true;
    }
    boxes.disabled=true;
    checkwinner()
});
});

const disableboxes=() =>{
    for(let boxes of boxes1){
    boxes.disabled=true;
}
}

const enableboxes=() =>{
    for(let boxes of boxes1){
    boxes.disabled=false;
    boxes.innerText="";
}
}

const showwinner=(winner) => {
    msg.innerText=`Congratulation, winner is ${winner}`;
    amit.classList.remove('hide');
    disableboxes();
    

}

const checkwinner= ()=>{
    for(let pattern of winpattern){
      //  console.log(pattern[0],pattern[1],pattern[2]);
      //  
      //  console.log(boxes1[pattern[0]].innerText,
      //              boxes1[pattern[1]].innerText,
      //              boxes1[pattern[2]].innerText
      //              );

    let pos1val=boxes1[pattern[0]].innerText
    let pos2val=boxes1[pattern[1]].innerText
    let pos3val=boxes1[pattern[2]].innerText
    
    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val===pos2val && pos2val === pos3val){
            console.log("winner",pos1val)
            
            showwinner(pos1val);

        }
    }

    }
};

const resetGame = () =>{
turnX =true;
enableboxes()
amit.classList.add('hide');

 
}




btn.addEventListener('click',resetGame)
btn2.addEventListener('click',resetGame)




//function ranbgcol(){
//    let letter="0123456789ABCDEF";
//    let color="#";
//    for(let i=0; i<6;i++){
//        color += letter[Math.floor(Math.random()*16)];
//    }
//    return color;
//}
//document.body.style.backgroundColor=ranbgcol();
*/