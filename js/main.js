/***********Home*********/

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
/********************/
 let parentAreas = document.querySelector(".parent-Areas");
 let Areas = document.querySelector(".Areas");
 let parentPrice = document.querySelector(".parent-Price");
 let Price = document.querySelector(".Price");
 

 parentAreas.addEventListener("click",function(){

  parentAreas.classList.toggle("is-active");
    Areas.classList.toggle("is-active");
  
   });

   parentPrice.addEventListener("click",function(){

    parentPrice.classList.toggle("active");
    Price.classList.toggle("active");

   });
/********************/
let grite1 = document.querySelector(".grite1");
let grite2 = document.querySelector(".grite2");
let grite3 = document.querySelector(".grite3");
let grite4 = document.querySelector(".grite4");
let grite5 = document.querySelector(".grite5");

let Apartments = document.querySelector(".Apartments");
let Food = document.querySelector(".Food");
let Car = document.querySelector(".Car");
let Shopping = document.querySelector(".Shopping");
let Traveling = document.querySelector(".Traveling");

Apartments.addEventListener('click',function(){
  grite2.classList.remove("active");
  grite1.classList.remove("active");
  grite3.classList.remove("active");
  grite4.classList.remove("active");
  grite5.classList.remove("active");

  Apartments.classList.remove("active");
  Food.classList.remove("active");
  Car.classList.remove("active");
  Shopping.classList.remove("active");
  Traveling.classList.remove("active");

});

Food.addEventListener('click',function(){
  grite1.classList.add("active");
  grite2.classList.add("active");
  grite3.classList.remove("active");
  grite4.classList.remove("active");
  grite5.classList.remove("active");

  Apartments.classList.add("active");
  Food.classList.add("active");
  Car.classList.remove("active");
  Shopping.classList.remove("active");
  Traveling.classList.remove("active");

});

Car.addEventListener('click',function(){
  grite1.classList.add("active");
  grite2.classList.remove("active");
  grite3.classList.add("active");
  grite4.classList.remove("active");
  grite5.classList.remove("active");

  Apartments.classList.add("active");
  Food.classList.remove("active");
  Car.classList.add("active");
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
/********************/

let sectionThird = document.querySelector(".section-third");
let time1 = document.querySelector("time1");
let time2 = document.querySelector("time2");
let time3 = document.querySelector("time3");

// get array of imgs
// let time = ["time1", "time2", "time3"];

 setInterval(() => {
 // git random number 
//  let random = Math.floor(Math.random() * imgsArray.length);

  // change background imgs url
  // time1.classList.add("active");
  time2.classList.add("active");
  // time3.classList.add("active");
  // sectionThird.style.backgroundImage = `url("imgs/` + imgsArray[random] + `")`;
 }, 1000);



/***********Listing*********/

