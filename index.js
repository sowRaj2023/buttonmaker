let borderValEl = document.getElementById("borderVal");
let padValEl = document.getElementById("padVal");
let weightValEl = document.getElementById("weightVal");
let sizeValEl = document.getElementById("sizeVal");
let fontValEl = document.getElementById("fontVal");
let bgValEL = document.getElementById("bgVal");
let customBtnEl = document.getElementById("customBtn");

function applybtn(){
    let bgVals = bgValEL.value;
    let border = borderValEl.value;
    let padding = padValEl.value;
    let weight = weightValEl.value;
    let size = sizeValEl.value;
    let font = fontValEl.value;

    customBtnEl.style.borderRadius = border;
    customBtnEl.style.padding = padding;
    customBtnEl.style.fontWeight = weight;
    customBtnEl.style.fontSize = size;
    customBtnEl.style.color = font;
    customBtnEl.style.backgroundColor = bgVals;




}