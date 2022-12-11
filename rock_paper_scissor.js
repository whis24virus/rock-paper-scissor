console.log("hello")
let x = 5;
function rock(){
    console.log(x);
    x = 1;
}
function paper(){
    console.log(x);
    x = 2;
}
function scissors(){
    console.log(x);
    x = 3;
}
function textresult(choice){
    if(choice == 1) return "Rock";
    else if(choice == 2) return "Paper";
    else if(choice == 3) return "Scissors";
}
function check(){
    let y = Math.floor(Math.random() * (4 - 1) + 1);
    let ptext = textresult(x);
    let ctext = textresult(y);
    console.log(ptext, y);
    if(x == y){
        document.getElementById("opposition").innerHTML = `Your Opponent chose ${ctext}`;
        document.getElementById("result").innerHTML = `${ctext} and ${ptext} is a draw, select again `;
    }


    // winning cases
    if(x == 1 && y == 3){
        document.getElementById("opposition").innerHTML = `Your Opponent chose ${ctext}`;
        document.getElementById("result").innerHTML = `${ptext} breaks ${ctext} , You Won `;
    }
    if(x == 2 && y == 1){
        document.getElementById("opposition").innerHTML = `Your Opponent chose ${ctext}`;
        document.getElementById("result").innerHTML = `${ptext} covers ${ctext} , You Won `;
    }
    if(x == 3 && y == 2){
        document.getElementById("opposition").innerHTML = `Your Opponent chose ${ctext}`;
        document.getElementById("result").innerHTML = `${ptext} cuts ${ctext} , You Won `;
    }


    //losing cases
    if(y == 1 && x == 3){
        document.getElementById("opposition").innerHTML = `Your Opponent chose ${ctext}`;
        document.getElementById("result").innerHTML = `${ctext} breaks ${ptext} , You Lost  `;
    }
    if(y == 2 && x == 1){
        document.getElementById("opposition").innerHTML = `Your Opponent chose ${ctext}`;
        document.getElementById("result").innerHTML = `${ctext} covers ${ptext} , You Lost `;
    }
    if(y == 3 && x == 2){
        document.getElementById("opposition").innerHTML = `Your Opponent chose ${ctext}`;
        document.getElementById("result").innerHTML = `${ctext} cuts ${ptext} , You Lost `;
    }

}