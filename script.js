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

function userScrolled() {
  console.log("någon håller på att scrolla");
}

function setup() {
  console.log("vi håller på att förbereda allting");
}
