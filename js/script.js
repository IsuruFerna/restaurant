import { menu_data } from "./menu.js";

// document.addEventListener("scroll", function (event) {
//    // const positionY = window.scrollY;
//    // console.log(positionY);
// });

document.addEventListener("DOMContentLoaded", function () {
   // retriving data as JSON
   const data = JSON.parse(menu_data);

   //  itterate through pizza, sri lankan, bibite
   for (let obj in data) {
      data[obj].forEach((element) => {
         // render menu pizza
         if (obj === "pizza") {
            // pizze classiche
            if (element.type === "classiche") {
               const leClassiche = document.getElementById("le-classiche");
               renderEachMenuList(element, leClassiche);
            }
            // pizze bianche
            if (element.type === "pizze bianche") {
               const pizzeBianche = document.getElementById("pizze-bianche");
               renderEachMenuList(element, pizzeBianche);
            }
         }

         // render menu sri lankan
         if (obj === "sri_lankan") {
            if (element.type === "rice") {
               const rice = document.getElementById("rice");
               renderEachMenuList(element, rice);
            }
            if (element.type === "batter") {
               const batter = document.getElementById("batter");
               renderEachMenuList(element, batter);
            }
            if (element.type === "noodles") {
               const noodles = document.getElementById("noodles");
               renderEachMenuList(element, noodles);
            }
            if (element.type === "chili") {
               const chili = document.getElementById("chili");
               renderEachMenuList(element, chili);
            }
            if (element.type === "kottu") {
               const kottu = document.getElementById("kottu");
               renderEachMenuList(element, kottu);
            }
            if (element.type === "fried") {
               const fried = document.getElementById("fried");
               renderEachMenuList(element, fried);
            }
            if (element.type === "devilled") {
               const devilled = document.getElementById("devilled");
               renderEachMenuList(element, devilled);
            }
            if (element.type === "stew") {
               const stew = document.getElementById("stew");
               renderEachMenuList(element, stew);
            }
            if (element.type === "short eats") {
               const short_eats = document.getElementById("short_eats");
               renderEachMenuList(element, short_eats);
            }
            if (element.type === "dessert") {
               const dessert = document.getElementById("dessert");
               renderEachMenuList(element, dessert);
            }
            if (element.type === "ice cream") {
               const ice_cream = document.getElementById("ice_cream");
               renderEachMenuList(element, ice_cream);
            }
            if (element.type === "frutta") {
               const frutta = document.getElementById("frutta");
               renderEachMenuList(element, frutta);
            }
         }

         // render menu dessert
         if (obj === "dessert") {
            if (element.type === "dessert") {
               const dessert = document.getElementById("dessert");
               renderEachMenuList(element, dessert);
            }
         }

         // render menu ice cream
         if (obj === "iceCream") {
            if (element.type === "ice cream") {
               const ice_cream = document.getElementById("ice_cream");
               renderEachMenuList(element, ice_cream);
            }
         }

         // render menu frutta
         if (obj === "frutta") {
            if (element.type === "frutta") {
               const frutta = document.getElementById("frutta");
               renderEachMenuList(element, frutta);
            }
         }
      });
   }
});

// render menu items to each menu title
const renderEachMenuList = function (element, appendIn) {
   const menuListing = document.createElement("div");
   menuListing.classList.add("menu-listing");

   // make a function that put a space after each comma and convert each word to upper case
   const ingredients = element.ingredient;

   menuListing.innerHTML = `
                   <div class="menu-item">
                     <div class="name">
                         <p>${element.name.toUpperCase()}</p>
                         <div class="ingredients">
                           <p>
                               ${ingredients}
                           </p>
                         </div>
                     </div>
                     <div class="price">
                         <p>${element.price} €</p>
                     </div>
                   </div>
              `;

   appendIn.getElementsByClassName("menu-items")[0].appendChild(menuListing);
};
