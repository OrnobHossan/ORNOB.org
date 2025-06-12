


let name=document.querySelector("#name");
let text=document.querySelector(".text");
let camara = document.querySelector(".bottom");
let box=document.querySelector(".camera");
let value=1;

let body = document.querySelector("body");

function discrease(){
   value=value - 1;
   if(value == 0){
      value=6;
      image(value);
   }else{
    image(value);
   }   
}


function increase(){
   value=value + 1;
   if(value >= 7){
      value=1;
      image(value);
   }else{
    image(value);
   }   
}



function image(value) {

  switch (value) {
case 1: 
camara.style.background = "url('images/summer.jpg') no-repeat center center / cover";
 
name.innerText="Summer season";
text.innerText="Scorching sun, unbearable heat, and dry air dominate. Juicy fruits like mangoes and jackfruits ripen. People seek shade and cool drinks.";

 break;
      
case 2: 
camara.style.background = "url('images/rainy.jpg') no-repeat center center / cover";
body.style.background = "url('images/rainy.jpg') no-repeat center center / cover";
name.innerText="Rainy season";
 
text.innerText="Heavy rains fall. Rivers swell. Farmers sow paddy. Roads flood. Nature turns lush and refreshed.";
break;

case 3: 
camara.style.background = "url('images/autumn.jpg') no-repeat top right / cover";
 
name.innerText="Autumn season";
text.innerText="Clear skies return. Kash flowers bloom. Gentle breeze flows. Nature recovers peacefully after long rains.";
break;

case 4: 
camara.style.background = "url('images/late_autumn.jpg') no-repeat bottom center / cover";
name.innerText="Late Autumn season";
 
text.innerText="Crops ripen. Farmers harvest rice. Air cools gently. Golden fields shine under soft sunlight.";
break;

case 5: 
camara.style.background = "url('images/winter.jpg') no-repeat center center/ cover";
 
name.innerText="Winter season";
text.innerText="Cold winds blow. Morning fog appears. Vegetables grow. People wear warm clothes and enjoy sunshine.";
break;

case 6: 
camara.style.background = "url('images/spring.jpg') no-repeat center center / cover";
name.innerText="Spring season";
 
text.innerText="Flowers bloom brightly. Trees regain leaves. Air is mild. Nature smiles with colors and joy.";
 break;
 
    default:
      camara.style.background = "none"; // fallback
  }
}












