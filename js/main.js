/*const menuIcon = document.querySelector('#menu');
menuIcon.addEventListener("click", draw);
const darkOverlay = document.querySelector('#overlay');
darkOverlay.addEventListener("click", push);
*/


const farmerButton = document.querySelector("#farmer-tab");
const marketButton = document.querySelector("#market-tab");
const mainContent = document.querySelector(".main-content");
const sideContent = document.querySelector(".side-content");
const sideMarket = document.querySelector(".side-market-content");
const ctaquest = document.querySelector("#ctaarea");
const titlequest = document.querySelector("#titlequest");
const fchoice = document.querySelector("#choice-0");
const schoice = document.querySelector("#choice-1");
marketButton.addEventListener("click", pushmarket);
farmerButton.addEventListener("click", push);
fchoice.addEventListener("click", choicemade);
schoice.addEventListener("click", choicemade);

const farmersList = document.querySelector("#slidelist-0");
const groupsList = document.querySelector("#slidelist-1");
const productsList = document.querySelector("#slidelist-2");
farmersList.addEventListener("click", draw);
groupsList.addEventListener("click", draw);
productsList.addEventListener("click", draw);

function push() {
  sideMarket.classList.remove("show-side-market-content")
  if(mainContent.classList.contains("hide-main-content")){
    mainContent.classList.remove("hide-main-content")
    sideContent.classList.remove("show-side-content")
  }else{
    mainContent.classList.add("hide-main-content")
    sideContent.classList.add("show-side-content")
    
  }
}

function pushmarket(clicked) {
  
    mainContent.classList.add("hide-main-content")
    sideMarket.classList.add("show-side-market-content")
    sideContent.classList.remove("show-side-content");
    clicked ? cta(clicked) : null;
  
}
function draw() {
  //console.log("hiiiii");
  let clickedTopfull = this.id;
  let clickedTopId = clickedTopfull.replace("slidelist-","");
  let clickedTab = document.getElementById("side-"+clickedTopId);
  document.querySelector(".farmers-nav-active").classList.remove("farmers-nav-active")
  document.querySelector(".farmers-show").classList.replace("farmers-show","farmers-hide");
  clickedTab.classList.replace("farmers-hide","farmers-show");
  document.getElementById(this.id+"td").classList.add("farmers-nav-active")
}
function drawone() {
 //console.log("one")
      groupsNames.classList.replace("farmers-show","farmers-hide")
      productsNames.classList.replace("farmers-show","farmers-hide")
      farmerNames.classList.replace("farmers-hide","farmers-show")
}
function drawtwo() {
      groupsNames.classList.replace("farmers-hide","farmers-show")
      productsNames.classList.replace("farmers-show","farmers-hide")
      farmerNames.classList.replace("farmers-show","farmers-hide")
 }
function drawthree() {
      groupsNames.classList.replace("farmers-show","farmers-hide")
      productsNames.classList.replace("farmers-hide","farmers-show")
      farmerNames.classList.replace("farmers-show","farmers-hide")
      
  }
  function choicemade() {
  
    let clickedTopful = this.id;
    let clickedId = clickedTopful.replace("choice-","");
    let marketchoice = sessionStorage.getItem("dufmamarketchoice");
    console.log(marketchoice);
    let clickTab = marketchoice === "buy" ? document.getElementById("picked-"+clickedId) : document.getElementById("pick-"+clickedId);
    document.querySelector(".market-nav-active").classList.remove("market-nav-active")
    document.querySelector(".market-show").classList.replace("market-show","market-hide");
    clickTab.classList.replace("market-hide","market-show");
    document.getElementById(this.id).classList.add("market-nav-active");
  }
  function makechoice(fft) {
  
    let clickedTopful =  fft;
    let clickedId = clickedTopful.replace("choice-","");
    let marketchoice = sessionStorage.getItem("dufmamarketchoice");
    //console.log(marketchoice);
    let clickTab = marketchoice === "buy" ? document.getElementById("picked-"+clickedId) : document.getElementById("pick-"+clickedId);
    document.querySelector(".market-nav-active").classList.remove("market-nav-active")
    document.querySelector(".market-show").classList.replace("market-show","market-hide");
    clickTab.classList.replace("market-hide","market-show");
    document.getElementById("choice-0").classList.add("market-nav-active");
  }
 const cta = theid => {
  let innertext = theid === "invest" ? 
  "What do you want to invest in ?" :
  "What do you want to buy?"
  titlequest.innerHTML = innertext;
  sessionStorage.setItem("dufmamarketchoice", theid);
  ctaquest.classList.replace("hides","shows")
  makechoice("choice-0");
 }
 const showquant = () => {
   document.getElementById("modal").classList.replace("hides","shows");
 }
 
 let fromindex = sessionStorage.getItem("fromIndex");
fromindex ? pushmarket(fromindex) : null;
sessionStorage.removeItem("fromIndex");