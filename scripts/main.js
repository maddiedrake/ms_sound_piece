// select container div, add grid_container_div
$("#container_div").append('<div id="grid_container_div"></div>');
for (let i = 0; i < 12; i++) {
    $("#grid_container_div").append('<button></button>');
    $("button:last").attr('class', 'grid_item');
    $("button:last").attr('id', 'button_'+i);
    $("button:last").append('<audio></audio>');
    $("audio:last").attr('id', 'audio_'+i);
    $("audio:last").attr('src', 'sounds/sound_'+i+'.mp3');
}

const button_0 = document.getElementById("button_0");
const button_1 = document.getElementById("button_1");
const button_2 = document.getElementById("button_2");
const button_3 = document.getElementById("button_3");
const button_4 = document.getElementById("button_4");
const button_5 = document.getElementById("button_5");
const button_6 = document.getElementById("button_6");
const button_7 = document.getElementById("button_7");
const button_8 = document.getElementById("button_8");
const button_9 = document.getElementById("button_9");
const button_10 = document.getElementById("button_10");
const button_11 = document.getElementById("button_11");


button_0.addEventListener("click", function() {
    var audio = document.getElementById("audio_0");
    audio.play(); 
})

button_1.addEventListener("click", function() {
    var audio = document.getElementById("audio_1");
    audio.play(); 
})

button_2.addEventListener("click", function() {
    var audio = document.getElementById("audio_2");
    audio.play(); 
})

button_3.addEventListener("click", function() {
    var audio = document.getElementById("audio_3");
    audio.play(); 
})

button_4.addEventListener("click", function() {
    var audio = document.getElementById("audio_4");
    audio.play(); 
})

button_5.addEventListener("click", function() {
    var audio = document.getElementById("audio_5");
    audio.play(); 
})

button_6.addEventListener("click", function() {
    var audio = document.getElementById("audio_6");
    audio.play(); 
})

button_7.addEventListener("click", function() {
    var audio = document.getElementById("audio_7");
    audio.play(); 
})

button_8.addEventListener("click", function() {
    var audio = document.getElementById("audio_8");
    audio.play(); 
})

button_9.addEventListener("click", function() {
    var audio = document.getElementById("audio_9");
    audio.play(); 
})

button_10.addEventListener("click", function() {
    var audio = document.getElementById("audio_10");
    audio.play(); 
})

button_11.addEventListener("click", function() {
    var audio = document.getElementById("audio_11");
    audio.play(); 
})
