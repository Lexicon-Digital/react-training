document.addEventListener("DOMContentLoaded", function () {
  const element = document.createElement("p");
  element.innerHTML = "<h3>I was dynamically generated</h3>";

  element.addEventListener("click", function () {
    console.log("I was dynamically generated");
  });

  document.querySelector(".container").appendChild(element);
});
