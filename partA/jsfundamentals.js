
//js variables
let Name = "Zhient";
const age = "20";
var city = "Cebu";

let par = document.getElementById('variables');

let text = `Name: ${Name}, Age: ${age}, City: ${city}`;

par.textContent = text;
//js arrays
let games = ["Valorant", "HalfSword", "Undefeated", "Osu", "Csgo 2", "Fightnight Champion","Minecraft"];
let i=0;
let list = " ";

for(; i<games.length;i++){

list += games[i] + "<br> ";

}

let pars = document.getElementById('arrays');


pars.innerHTML = list;

//js functions
let Getname = document.getElementById('username');
let func = document.getElementById('function');


function getname(){
let USer = "Your name is :" + Getname.value;

func.textContent = USer;

}
//js objects

let dinosaur = {
        name: "Allosaurus",
        age:    20000000,
        place: "North America"

};

 let info = `Name: ${dinosaur.name}<br>Age: ${dinosaur.age}<br>City: ${dinosaur.place}`;
    document.getElementById("objects").innerHTML = info;

    //js event handler

    let button = document.getElementById('btn');
    let box = document.getElementById('box');

    let rotate = false;

    button.addEventListener("click", function(){

        if(!rotate){
            box.style.transform = "rotate(360deg)";
            rotate = true;
        }else{
            box.style.transform = "rotate(0deg)";
            rotate = false;
        }




    })



