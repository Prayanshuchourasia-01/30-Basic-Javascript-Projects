const containerEL = document.querySelector(".container");
// console.log(containerEL);

let career = ["Programmer", "Web Developer", "UI Designer","Instructors"];
let careerIdx = 0;
let characterIdx = 0;

function updateCareer() {

  containerEL.innerHTML = `
        <h1>I am ${career[careerIdx].slice(0,1) === "I" ? "an":"a"} ${career[careerIdx].slice(0, characterIdx+1)} </h1>
    `;
  characterIdx++;
  if(characterIdx===career[careerIdx].length){
    careerIdx++;
    characterIdx = 0 ; 
  }

  if(careerIdx===career.length){
    careerIdx = 0 ; 
  }

  setTimeout(updateCareer, 200);
}

updateCareer();


// https://youtu.be/NfvtQ2p5QG4?si=50REHG8O6dlR2DFY 
//                 YT tutorial 