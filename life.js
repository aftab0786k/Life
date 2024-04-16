 let isDOBOpen = false;
 let dateOfBirth;
const settingsCogEl = document.getElementById("cog");
const settingContentEl =document.getElementById("settingContent");
const initalTextEl = document.getElementById("initialText");
const  afterDOBBtnTxtEl= document.getElementById("afterDOBBtnTxt");
const  dobButtonEl= document.getElementById("dobButton");
const  dobInputEl= document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

console.log(localStorage.getItem("year"));

const makeTwoDIgitNumber =(number)=>{
    return number >9 ? number :`0${number}`;
}

const toggleDateOfBirthSelector =()=>{
     if(isDOBOpen){
        settingContentEl.classList.add("hide");
     }
     else{
        settingContentEl.classList.remove("hide");
     }
     isDOBOpen = !isDOBOpen;
     console.log("toggle",isDOBOpen);
}
const updateAge = () =>{
    const currentDate = new Date();
    const dateDiff = currentDate -dateOfBirth;
    const year =Math.floor(dateDiff/(1000*60*60*24*365));
    const month =Math.floor(dateDiff/(1000*60*60*24*365)%12);
    const day =Math.floor(dateDiff/(1000*60*60*24))%30;
    const hour =Math.floor(dateDiff/(1000*60*60))%24;
    const minute =Math.floor(dateDiff/(1000*60))%60;
    const second =Math.floor(dateDiff/1000)%60;
    
    yearEl.innerHTML = makeTwoDIgitNumber(year);
    monthEl.innerHTML = makeTwoDIgitNumber(month);
    dayEl.innerHTML = makeTwoDIgitNumber(day);
    hourEl.innerHTML = makeTwoDIgitNumber(hour);
    minuteEl.innerHTML = makeTwoDIgitNumber(minute);
    secondEl.innerHTML =makeTwoDIgitNumber(second);
  }
const setDOBHandler = ()=>{

 const  dateString =dobInputEl.value;
 
  dateOfBirth = dateString ? new Date(dateString):null;

 if(dateOfBirth){
    localStorage.setItem("year",dateOfBirth.getFullYear());
    localStorage.setItem("month",dateOfBirth.getMonth());
    localStorage.setItem("date",dateOfBirth.getDate());
    initalTextEl.classList.add("hide");
    afterDOBBtnTxtEl.classList.remove("hide");
    setInterval(()=>updateAge(),1000);
 }
 else{
    afterDOBBtnTxtEl.classList.add("hide");
    initalTextEl.classList.remove("hide");
 }

 const year = localStorage.getItem("year");
     const month = localStorage.getItem("month");
     const date = localStorage.getItem("date");
     
 if(year && month && date){
   console.log({year ,month , date});
   dateOfBirth = new Date (year , month , date);
}
}
setDOBHandler();


settingsCogEl.addEventListener("click",toggleDateOfBirthSelector);
dobButtonEl.addEventListener("click",setDOBHandler);