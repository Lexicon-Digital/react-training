window.addEventListener("load", function () {
  console.log("LOADING COMPLETE");

  let parent = document.getElementById("canvas");
  const textElement = document.createElement("p");
  textElement.innerText = "I was dynamically generated";
  parent.appendChild(textElement);
});
