let box = document.querySelectorAll(".box");
let inText1;
let inText2;
let hide = document.querySelector(".newContainer");
let newBtn = document.querySelector("#newBtn");
let para = document.querySelector("p");
let resetBtn = document.querySelector("#resetBtn"); 

let ind = 0;

const winComb = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let turn = true;

const drawGame = () => {
    hide.classList.remove("newContainer");
    para.innerText = `Draw`;
    disablebox();
}


box.forEach((bx)=> {
    bx.addEventListener("click", ()=> {
        if (turn) {
            bx.innerText = "X";
            bx.style.color = "#FF2E00"
            turn = false;
            ind++;
        } else {
            bx.innerText = "O";
            bx.style.color = "#044389";
            turn = true;
            ind++;
        }
        winner();
        bx.disabled = true;
    })
})


const disablebox = () => {
    for (let bx of box) {
        bx.disabled = true;
    }
}

const enablebox = () => {
    for (let bx of box) {
        bx.disabled = false;
        bx.innerText = "";
    }
}
const resetGame = () => {
    turn = true;
    enablebox();
    hide.classList.add("newContainer");
    ind = 0;
}

const showWinner = (pos1val) => {
    hide.classList.remove("newContainer");
    para.innerText = `Winner is Player ${pos1val}`;
    disablebox();
}

const winner = ()=> {
    for (let pattern of winComb) {
        let pos1val = box[pattern[0]].innerText;
        let pos2val = box[pattern[1]].innerText;
        let pos3val = box[pattern[2]].innerText;
        
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        } 
    if (ind === 9) {
        drawGame();
    }
    }
}






newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
