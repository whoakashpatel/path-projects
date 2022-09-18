let submit = $(".input-submit");
let color1 = $("#color-1");
let color2 = $("#color-2");
let type = $("#gradient-type");
let angle = $("#angle");

$(".input-submit").click(function() {
    $(".main").css("background", type.value+"("+(angle.value/360)+", "+color1.value+", "+color2.value+")");
    $("body").css("background", type.value+"("+(angle.value/360)+", "+color1.value+", "+color2.value+")");
})