const timer = document.querySelector("#timer");

const reverseTimer = setInterval(() => {
  const value = +timer.textContent;
  if(value > 0) {
    timer.textContent = value - 1;
  } else {
    // clearInterval(alert("Вы победили в конкурсе!"))
    alert("Вы победили в конкурсе!")
  }
},300);