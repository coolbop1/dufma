const menuIcon = document.querySelector('#menu');
menuIcon.addEventListener("click", draw);
const darkOverlay = document.querySelector('#overlay');
darkOverlay.addEventListener("click", push);

function push() {
  document.getElementById("menuslider").className ="drawin";
  document.getElementById("overlay").className ="drawunder";
}
function draw() {
  document.getElementById("menuslider").className ="drawout";
  document.getElementById("overlay").className ="drawover";
}