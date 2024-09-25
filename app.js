let gameSeq = [];
let userSeq = [];
 
let btns = ["yellow","red","green","purple"];
let started = false;
let level = 0;

let h2= document.querySelector('h2');

document.addEventListener('keypress',function(){
   if(started == false){                      // made an extra variable started = false so as to ensure that the game is only started once else it would always call the function on keypress event.
    console.log("game is started");
    started = true;
    levelUp();
   }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },400);

}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },400);

}
function levelUp(){
    userSeq=[]; //so that user has to select the colors from starting 
    level++
    h2.innerText = `level ${level}`
   
    //random btn choose
   let randIdx  = Math.floor(Math.random()*3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);

   gameSeq.push(randColor);
   console.log(gameSeq)

    // console.log(randIdx);


    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("curr level",level);

    // let idx = level - 1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp(),2000) ;
        }
        console.log("same value");
    }else{
        h2.innerHTML = `Game over! Your Score was <b>${level}</b><br>Press any key to start.`;
        reset();
    }
    
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(this);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}