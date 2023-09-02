let timer = 60;
let score = 0;
let RandomTarget;

const Makebubbles = () =>{
    let bubbles = "";
    for (let i = 1; i <= 160; i++) {
        let RandomNumber = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble" id="bubble">${RandomNumber}</div> `;
    }
    document.querySelector(".pbottom").innerHTML = bubbles;
}

const RunTimer = () =>{
    let timeint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timevalue").textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector(".pbottom").innerHTML = `<div class="end">
                    <h1>Game Over</h1>
                    <div class="element">            
                        <h2 class="score">score</h2>
                        <div class="box" id="score">${score}</div>
                    </div>
                </div>`;
        }
        },1000)
}

const GetTarget = ()=>{
    RandomTarget = Math.floor(Math.random()*10);
    document.querySelector("#target").textContent = RandomTarget;
}

const IncreaseScore = () =>{
   score += 10;
   document.querySelector("#scorevalue").textContent = score;
}


Makebubbles();
RunTimer();
GetTarget();


let checkNumber = document.querySelector("#pbottom");
checkNumber.addEventListener("click",(dets)=>{
    let clickNumber = (Number(dets.target.textContent));
    if(clickNumber === RandomTarget){
        Makebubbles();
        GetTarget();
        IncreaseScore();
    }
})