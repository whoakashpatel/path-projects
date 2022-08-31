let colors = ['#33a8c7', '#52e3e1', '#a0e426', '#fdf148', '#ffab00', '#f77976', '#f050ae', '#d883ff', '#9336fd'];
let keys = document.querySelectorAll('.main div');
for (i = 0; i < keys.length; i++) {
  keys[i].classList.add("key" + (i + 1));
  keys[i].innerHTML = "key" + (i + 1);
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  keys[i].style.background = "linear-gradient(0.125turn, " + randomColor + "bb, " + randomColor + "88)";
  keys[i].style.borderColor = randomColor + "dd";
  keys[i].addEventListener("click", function() {
    let key = this;
    let keyNumber = key.className;
    var audio = new Audio("audio-files/" + keyNumber + ".wav");
    audio.play();
    let originalColor = key.style.borderColor;
    key.style.borderColor = "#fff";
    setTimeout(function() {key.style.borderColor=originalColor}, 150);
  })
}

//Warning Message

let warning = document.querySelector(".warning");
document.querySelector(".main").style.filter = "blur(1rem)";
window.addEventListener("click", function() {
  warning.classList.remove("warning");
  warning.classList.add("warning-onclick");
  document.querySelector(".main").style.filter = "none";
  document.querySelector("span").innerText='';
  window.removeEventListener;
})
