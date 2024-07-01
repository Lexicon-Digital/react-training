import { ENV } from "./constants.js";

console.log("Got environment - " + ENV);

window.addEventListener("DOMContentLoaded", function () {
  let parent = document.querySelector("#canvas");
  const textElement = document.createElement("p");
  textElement.innerHTML =
    "<div>running in environment... <b>" + ENV + "</b></div>";
  parent.appendChild(textElement);
});

function handleResponse() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", handleResponse);
req.open("GET", "https://intro-lemon.vercel.app/api/posts");
req.send();
