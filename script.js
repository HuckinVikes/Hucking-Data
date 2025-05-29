
//author: Ryan Dunhamn



const homeBtn = document.querySelector("#home-button");
const dataBtn = document.querySelector("#data-button");
const newsBtn = document.querySelector("#news-button");
const regBtn = document.querySelector("#register-button");
const donateBtn = document.querySelector("#donate-button");
const closeBtn = document.querySelector("#closePop");

const homeCont = document.querySelector("#Home");
const dataCont = document.querySelector("#Data");
const newsCont = document.querySelector("#News");
const popCont = document.querySelector("#popUp");


//Screen Size Management

//State Management

const displayData = () => { //sould be one displaySwitch function

    newsCont.style.display = "none";
    homeCont.style.display = "none";
    dataCont.style.display = "block";
}

const displayHome = () => { //sould be one displaySwitch function

    newsCont.style.display = "none";
    homeCont.style.display = "block";
    dataCont.style.display = "none";
}

const displayNews = () => { //sould be one displaySwitch function

    newsCont.style.display = "block";
    homeCont.style.display = "none";
    dataCont.style.display = "none";
}

const popUp = () => {

    popCont.style.display = "block";
}

const closePop = () => {

    popCont.style.display = "none";
}

homeBtn.addEventListener("click", displayHome);
dataBtn.addEventListener("click", displayData);
newsBtn.addEventListener("click", displayNews);
donateBtn.addEventListener("click", popUp);
regBtn.addEventListener("click", popUp);
closeBtn.addEventListener("click", closePop);
