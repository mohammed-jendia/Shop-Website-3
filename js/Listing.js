let header = document.querySelector(".header");
let color_link = document.getElementsByClassName("color");
let button = document.querySelector("button");
let color_i = document.querySelector("i");

console.log(color_link);
 window.onscroll = function(){
   if(this.scrollY >= 50){
    header.classList.add("active");
    color_link.classList.add("active");
    button.classList.add("active");
    color_i.classList.add("active");
   }else{
    header.classList.remove("active");
    color_link.classList.remove("active");
    button.classList.remove("active");
    color_i.classList.remove("active");

   }
 };



let grite1 = document.querySelector(".grite1");
let grite2 = document.querySelector(".grite2");
let grite3 = document.querySelector(".grite3");
let grite4 = document.querySelector(".grite4");


let Apartments2 = document.querySelector(".Apartments2");
let Food2 = document.querySelector(".Food2");
let Car2 = document.querySelector(".Car2");
let Shopping = document.querySelector(".Shopping2");
let Traveling = document.querySelector(".Traveling2");

Apartments2.addEventListener('click',function(){
  grite2.classList.remove("active");
  grite1.classList.remove("active");
  grite3.classList.remove("active");
  grite4.classList.remove("active");
  grite5.classList.remove("active");

  Apartments2.classList.remove("active");
  Food2.classList.remove("active");
  Car2.classList.remove("active");
  Shopping.classList.remove("active");
  Traveling.classList.remove("active");

});

Food2.addEventListener('click',function(){
  grite1.classList.add("active");
  grite2.classList.add("active");
  grite3.classList.remove("active");
  grite4.classList.remove("active");
  grite5.classList.remove("active");

  Apartments2.classList.add("active");
  Food2.classList.add("active");
  Car2.classList.remove("active");
  Shopping.classList.remove("active");
  Traveling.classList.remove("active");

});

Car2.addEventListener('click',function(){
  grite1.classList.add("active");
  grite2.classList.remove("active");
  grite3.classList.add("active");
  grite4.classList.remove("active");
  grite5.classList.remove("active");

  Apartments2.classList.add("active");
  Food2.classList.remove("active");
  Car2.classList.add("active");
  Shopping.classList.remove("active");
  Traveling.classList.remove("active");

});

Shopping.addEventListener('click',function(){
  grite1.classList.add("active");
  grite2.classList.remove("active");
  grite3.classList.remove("active");
  grite4.classList.add("active");
  grite5.classList.remove("active");

  Apartments.classList.add("active");
  Food.classList.remove("active");
  Car.classList.remove("active");
  Shopping.classList.add("active");
  Traveling.classList.remove("active");

});

Traveling.addEventListener('click',function(){
  grite1.classList.add("active");
  grite2.classList.remove("active");
  grite3.classList.remove("active");
  grite4.classList.remove("active");
  grite5.classList.add("active");

  Apartments.classList.add("active");
  Food.classList.remove("active");
  Car.classList.remove("active");
  Shopping.classList.remove("active");
  Traveling.classList.add("active");

});