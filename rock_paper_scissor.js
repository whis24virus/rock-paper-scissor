let oppo = document.getElementById("opposition")
let res = document.getElementById("result");
let alrt = document.getElementById("newAlert");
let sel = document.getElementById("selection");


console.log("hello")
let x = 5;
function rock(){
    alertClose();
    console.log(x);
    x = 1;
    sel.innerText = "You chose a ROCK!";
}
function paper(){
    alertClose();
    console.log(x);
    x = 2;
    sel.innerText = "You chose a PAPER!";
}
function scissors(){
    alertClose();
    console.log(x);
    x = 3;
    sel.innerText = "You chose a SCISSOR!";
}
function textresult(choice){
    if(choice == 1) return "Rock";
    else if(choice == 2) return "Paper";
    else if(choice == 3) return "Scissors";
}
function check(){
    if(x == 5){
        newAlert();
    }


    let y = Math.floor(Math.random() * (4 - 1) + 1);
    let ptext = textresult(x);
    let ctext = textresult(y);
    console.log(ptext, y);
    if(x == y){
        oppo.innerHTML = `Your Opponent chose ${ctext}`;
        res.innerHTML = `${ctext} and ${ptext} is a draw, select again `;
        res.style.backgroundColor = "yellow";
    }


    // winning cases
    if(x == 1 && y == 3){
        oppo.innerHTML = `Your Opponent chose ${ctext}`;
        res.innerHTML = `${ptext} breaks ${ctext} , You Won `;
        res.style.backgroundColor = "green";
    }
    if(x == 2 && y == 1){
        oppo.innerHTML = `Your Opponent chose ${ctext}`;
        res.innerHTML = `${ptext} covers ${ctext} , You Won `;
        res.style.backgroundColor = "green";
    }
    if(x == 3 && y == 2){
        oppo.innerHTML = `Your Opponent chose ${ctext}`;
        res.innerHTML = `${ptext} cuts ${ctext} , You Won `;
        res.style.backgroundColor = "green";
    }


    //losing cases
    if(y == 1 && x == 3){
        opposition = 
        oppo.innerHTML = `Your Opponent chose ${ctext}`;
        res.innerHTML = `${ctext} breaks ${ptext} , You Lost  `;
        res.style.backgroundColor = "red";
    }
    if(y == 2 && x == 1){
        oppo.innerHTML = `Your Opponent chose ${ctext}`;
        res.innerHTML = `${ctext} covers ${ptext} , You Lost `;
        res.style.backgroundColor = "red";
    }
    if(y == 3 && x == 2){
        oppo.innerHTML = `Your Opponent chose ${ctext}`;
        res.innerHTML = `${ctext} cuts ${ptext} , You Lost `;
        res.style.backgroundColor = "red";
    }
    x = 5;

}

function newAlert(){
    alrt.style.display = "block";

}
function alertClose(){
    alrt.style.display = "none";

}