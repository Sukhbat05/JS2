// https://www.w3schools.com/js/pic_bulboff.gif
// https://www.w3schools.com/js/pic_bulbon.gif

const image = document.createElement("img");
const button = document.createElement("button");
const body = document.querySelector("body");
let isOn = false;

body.appendChild(image);
body.appendChild(button);




image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
 
button.addEventListener("click", () => {
    button.innerText = isOn ? "Off" : "On"
     isOn = !isOn
    if (isOn) {image.src = "https://www.w3schools.com/js/pic_bulboff.gif"}
    else { image.src = "https://www.w3schools.com/js/pic_bulbon.gif"
       
    }

     
});                              


           

      