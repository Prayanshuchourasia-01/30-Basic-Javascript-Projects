const month = document.getElementById("month");
const day = document.getElementById("day");
const date = document.getElementById("date");
const year = document.getElementById("year");

const dateData = new Date();
console.dir(dateData);


date.innerText = dateData.getDate();


// Right one ; 

year.innerText = dateData.getFullYear();
month.innerText = dateData.toLocaleString("en",{
    month:"long"
});


day.innerText = dateData.toLocaleString("en",{
    weekday:"long"
})


// https://youtu.be/NfvtQ2p5QG4?si=mG-BIIManhe1jKoF
//                  YT Tutorials 