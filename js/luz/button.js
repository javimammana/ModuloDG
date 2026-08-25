
var clr = document.querySelector("input");
var btn = document.querySelector("button");
clr.addEventListener("input", ev => {
  btn.style.setProperty("--clr", ev.target.value);
});

setTimeout(() => {
  btn.classList.add("over");
  setTimeout(() => {
    btn.classList.remove("over");
  }, 2500);
}, 500);
//# sourceURL=pen.js
    