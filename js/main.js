/*const menuIcon = document.querySelector('#menu');
menuIcon.addEventListener("click", draw);
const darkOverlay = document.querySelector('#overlay');
darkOverlay.addEventListener("click", push);
*/
const farmerButton = document.querySelector("#farmer-tab");
const roundFarmButton = document.querySelector("#farmer-tabs")
const mainContent = document.querySelector(".main-content");
const sideContent = document.querySelector(".side-content");
farmerButton.addEventListener("click", push);
roundFarmButton.addEventListener("click", push)

const farmersList = document.querySelector("#slidelist-0");
const groupsList = document.querySelector("#slidelist-1");
const productsList = document.querySelector("#slidelist-2");
farmersList.addEventListener("click", draw);
groupsList.addEventListener("click", draw);
productsList.addEventListener("click", draw);

function push() {
  if(mainContent.classList.contains("hide-main-content")){
    mainContent.classList.remove("hide-main-content")
    sideContent.classList.remove("show-side-content")
  }else{
    mainContent.classList.add("hide-main-content")
    sideContent.classList.add("show-side-content")
  }
}
function draw() {
  console.log("hiiiii");
  let clickedTopfull = this.id;
  let clickedTopId = clickedTopfull.replace("slidelist-","");
  let clickedTab = document.getElementById("side-"+clickedTopId);
  document.querySelector(".farmers-nav-active").classList.remove("farmers-nav-active")
  document.querySelector(".farmers-show").classList.replace("farmers-show","farmers-hide");
  clickedTab.classList.replace("farmers-hide","farmers-show");
  document.getElementById(this.id+"td").classList.add("farmers-nav-active")


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