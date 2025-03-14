let box = document.querySelectorAll(".box");
let resetBut = document.querySelector(".reset");
let newGameBut = document.querySelectorAll(".newGame");
let player = document.querySelector(".player");
let msgContainer = document.querySelector(".msg-container");
let draw = document.querySelector(".draw");
let turnO = true;
let count =0;

const winPatterns=[
    [0, 1, 2], 
    [0, 3, 6], 
    [0, 4, 8], 
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6], 
    [3, 4, 5], 
    [6, 7, 8], 
];

const resetGame =()=>{
    count = 0;
     turnO = true;
     enableBoxes();
     msgContainer.classList.add("hide");
     draw.classList.add("hide");
}

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        if(count === 9){
            draw.classList.remove("hide");
        }
        
    });
});

let disableBoxes =()=>{
    for(let b of box){
        b.disabled = true;
    }
}
let enableBoxes =()=>{
    for(let b of box){
        b.disabled = false;
        b.innerText = " ";
    }
}
showWinner = (winner)=>{
    player.innerText = winner;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1val = box[pattern[0]].innerText;
        let pos2val = box[pattern[1]].innerText;
        let pos3val = box[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }

    }
}
newGameBut.forEach((newGameBut)=>{
    newGameBut.addEventListener("click",resetGame);
});
resetBut.addEventListener("click",resetGame);

