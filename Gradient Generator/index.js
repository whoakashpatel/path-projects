let submit = document.querySelector(".input-submit");
let color1 = document.querySelector("#color-1");
let color2 = document.querySelector("#color-2");
let type = document.querySelector("#gradient-type");
let mainCard = document.querySelector(".main");

submit.addEventListener("click", function() {
    mainCard.style.background = type.value+"("+color1.value+", "+color2.value+")";
    document.body.style.background = type.value+"("+color1.value+", "+color2.value+")";
})