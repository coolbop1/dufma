/*const menuIcon = document.querySelector('#menu');
menuIcon.addEventListener("click", draw);
const darkOverlay = document.querySelector('#overlay');
darkOverlay.addEventListener("click", push);
*/
const farmerButton = document.querySelector("#farmer-tab");
const mainContent = document.querySelector(".main-content");
const sideContent = document.querySelector(".side-content");
farmerButton.addEventListener("click", push);

const farmersList = document.querySelector("#farmers-list");
const groupsList = document.querySelector("#groups-list");
const productsList = document.querySelector("#products-list");
const farmerNames = document.getElementById("farmer-names");
const groupsNames = document.getElementById("groups-names");
const productsNames = document.getElementById("products-names");
farmersList.addEventListener("click", drawone);
groupsList.addEventListener("click", drawtwo);
productsList.addEventListener("click", drawthree);

function push() {
  if(mainContent.classList.contains("hide-main-content")){
    mainContent.classList.remove("hide-main-content")
    sideContent.classList.remove("show-side-content")
  }else{
    mainContent.classList.add("hide-main-content")
    sideContent.classList.add("show-side-content")
  }
}
function drawone() {
 console.log("one")
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