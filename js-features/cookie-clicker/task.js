const click = document.querySelector("#cookie");

const counter = document.querySelector("#clicker__counter");

click.onclick = function() {
  click.classList.toggle("big");
  const value = +counter.textContent;
  counter.textContent = value + 1;  
}