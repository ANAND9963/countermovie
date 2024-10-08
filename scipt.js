let count =4;

let movies=["Swathi","Matrix","Amaravadi","GOF"];

let newMovie = "";

function increment(){
    count++;
    countEl.innerHTML=count;
}
function decrement(){
    count--;
    countEl.innerHTML=count;
}
const addnewMovie=()=>{
      newMovie = inputMovie.value;
      movies.push(newMovie);
      displaymovies();
      inputMovie.value="";
       
   

}
const handlechange=(e)=>{

    if(e.key=="Enter"){
        newMovie = e.target.value;
        addnewMovie();
    }else{
        newMovie = e.target.value;
    }
}

const displaymovies = () =>{
    moviesEl.innerHTML="";
   movies.map((movie) =>{
       let movieEL = document.createElement("li"); 
       movieEL.textContent = movie;
        moviesEl.appendChild(movieEL);
   })
}

let moviesEl =document.getElementById("movies");
let countEl = document.getElementById("count");
let addBtnEl = document.getElementById("add_btn");
let subBtnEl = document.getElementById("sub_button");
let inputMovie= document.querySelector(".movies__input")
let addBtn = document.getElementById("submitBtn");


document.addEventListener("DOMContentLoaded",()=>{
    countEl.innerHTML=count;
    displaymovies();
});

addBtn.addEventListener("click",addnewMovie);

addBtnEl.addEventListener("click",increment);
subBtnEl.addEventListener("click",decrement);
inputMovie.addEventListener("keyup",handlechange);




