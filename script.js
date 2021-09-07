//Create the variables that contain the navbar and the button
const targetDiv = document.getElementById("navBar");
const btn = document.getElementById("reveal");

//Write a function that show and hide the navigation on click
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};