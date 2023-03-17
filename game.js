let comp = ""
let human = ""
let compscore = 0
let humanscore = 0 
let wew = ["rock","paper", "scissor"]
let answerrock = document.getElementById("rock");
let answerpaper = document.getElementById("paper");
let answerscissor = document.getElementById("scissor");
let computerscore = document.getElementById("computerscore");
let yourscore = document.getElementById("yourscore")
let resetbut = document.getElementById("reset")

function reset(){
    compscore = 0
    humanscore = 0
    human = ""
    yourscore.innerText = humanscore
    computerscore.innerText = compscore
}

function scorecheck(){
    if (humanscore == 5 ){
        prompt("")
        return window.alert("You win")
    }
    if (compscore == 5){
        return window.alert("You lose")
    }
    return;
}


function rock(){
    human = "rock";
    
    answer = wew[Math.floor(Math.random() * 3)]
    console.log(answer)
    if (answer == human){
        humanscore = humanscore + 1;
        yourscore.innerText = humanscore
    }
    else{
        compscore = compscore + 1
        computerscore.innerText = compscore
    }
    scorecheck()

    
}
function paper(){
    human = "paper";
    
    answer = wew[Math.floor(Math.random() * 3)]
    console.log(answer)
    if (answer == human){
        humanscore = humanscore + 1;
        yourscore.innerText = humanscore
    }
    else{
        compscore = compscore + 1
        computerscore.innerText = compscore
    }

    scorecheck()
}
function scissor(){
    human = "scissor";

    answer = wew[Math.floor(Math.random() * 3)]
    console.log(answer)
    if (answer == human){
        humanscore = humanscore + 1;
        yourscore.innerText = humanscore
    }
    else{
        compscore = compscore + 1
        computerscore.innerText = compscore
    }
    scorecheck()
}


answerrock.addEventListener("click", rock);
answerpaper.addEventListener("click", paper);
answerscissor.addEventListener("click", scissor);
resetbut.addEventListener("click", reset);
