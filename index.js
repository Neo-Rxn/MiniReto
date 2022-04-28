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