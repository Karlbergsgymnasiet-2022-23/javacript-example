console.log("meddelande från en annan fil");


function buttonPressed() {
  console.log("någon har tryckt på knappen");
  let redSquare = document.getElementById("red");
  redSquare.style.background = "purple";

  if (redSquare.style.width === "300px") {
      redSquare.style.width = "100px";
  } else  {
      redSquare.style.width = "300px";
  }

}

function getSquare(){
  let divElements = document.getElementsByClassName("square");
  console.log(divElements);

  for (var i = 0; i < divElements.length; i++) {
    divElements[i].style.width = (i+1)*200 + "px";
  }
}

function setSquareText(){
  /*
  let div = document.querySelector(".square");
  div.textContent = "Nu finns det text här";

  */

  let div = document.querySelectorAll(".square");
  for (var i = 0; i < div.length; i++) {
    div[i].setHTML("<p>Text</p>");
  }
}

function userScrolled() {
  console.log("någon håller på att scrolla");
}

function setup() {
  console.log("vi håller på att förbereda allting");
}
