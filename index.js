//Importación del arreglo de Objetos
import { hotelsData } from "./resources/data.js";

// Id de la sección Hero
const heroImg = document.getElementById("hero");
const rating = document.getElementById("rating__name");
const location = document.getElementById("rating__location");
const characteristics = document.getElementById("characteristics");

let idCounter = 0;

//Función para imprimir los hoteles
  function showImages() {
  hotelsData.forEach((element) => {    
    idCounter++
    //console.log(element.name);
    const hotelImage = document.createElement("img");
    hotelImage.setAttribute("src", element.photo);
    hotelImage.setAttribute("alt", element.name);
    hotelImage.setAttribute("id", "id"+idCounter);
    heroImg.appendChild(hotelImage);
    const image = document.getElementById("id"+idCounter);
    //console.log(image.id);
    image.addEventListener("click", (element) =>searchHotels(element));
  });
}

function searchHotels(obj) {
  const result = hotelsData.filter((e) => e.name == obj.originalTarget.alt)
  characteristics.innerHTML = "";
  rating.innerHTML ="";
  location.innerHTML = "";
  //console.log(result[0].description)
  const hotelDescription = document.createElement("p");
  const hotelName = document.createElement("p");
  const hotelLocation = document.createElement("p");
  hotelDescription.innerText = result[0].description;
  hotelName.innerText = result[0].name.toUpperCase();
  hotelLocation.innerText = result[0].city +', ' + result[0].country ;
  characteristics.appendChild(hotelDescription);
  rating.appendChild(hotelName);
  location.appendChild(hotelLocation);
  //console.log(result.description[0]); 
}


// Llamado de la función Imprimir Hoteles
showImages();

//console.log(hotelsData);
//mafe:

let nav = document.querySelector(".nav");
let btnMenu = document.querySelector("#img_menu");

let menu = document.querySelector("#menu");
let hotel = document.querySelector("#hotel");
let flight = document.querySelector("#flight");
let car = document.querySelector("#car");
let tours = document.querySelector("#tours");

let imgMenu = document.querySelector("#img_menu");
let imgHotel = document.querySelector("#img_hotel");
let imgFlight = document.querySelector("#img_flight");
let imgCar = document.querySelector("#img_car");
let imgTours = document.querySelector("#img_tours");

/*Le agrega a la clase la palabra active, cuando se le agrega en el css le doy nuevos atributos */
btnMenu.onclick = function(){
    nav.classList.toggle("active");
/*Llamo por los id de cada titulo para que a la clase se le agregue la palabra active: nav_link.active*/
    menu.classList.toggle("active");
    hotel.classList.toggle("active");
    flight.classList.toggle("active");
    car.classList.toggle("active");
    tours.classList.toggle("active");
/*Para centrar los íconos: .list_image.active*/
    imgMenu.classList.toggle("active");
    imgHotel.classList.toggle("active");
    imgFlight.classList.toggle("active");
    imgCar.classList.toggle("active");
    imgTours.classList.toggle("active");




}

