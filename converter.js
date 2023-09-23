// const loweCase = function (arr) {
//    const ingredients = [];
//    for (let i = 0; i < arr.length; i++) {
//       ingredients.push(arr[i].toLowerCase().trim());
//    }
//    console.log(ingredients);
// };

// loweCase(["POMODORO", "FIOR DI LATTE", "BASILICO", "OLIO EVO"]);

console.log("hello world");

function convertToPizzaData(textContent) {
   const lines = textContent.split("\n");
   const pizzas = [];
   let type = "";

   for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line === "LE CLASSICHE" || line === "PIZZE BIANCHE") {
         type = line.toLowerCase();
      } else if (line !== "") {
         const pizza = {};
         pizza.type = type;

         const nameAndPrice = line.split(" ");
         pizza.name = nameAndPrice[0].toLowerCase();
         pizza.price = nameAndPrice[1].replace("€", "");

         i++;
         const ingredientsLine = lines[i].replace("(", "").replace(")", "");
         pizza.ingredient = ingredientsLine
            .split(",")
            .map((ingredient) => ingredient.trim().toLowerCase());

         pizzas.push(pizza);
      }
   }

   return { pizza: pizzas };
}

const newArray = convertToPizzaData(`LE CLASSICHE
MARINARA 4.00 €
(POMODORO, ORIGANO, AGLIO, BASILICO, OLIO EVO)
COSACCA 4.50 €
(POMODORO, GRANA, BASILICO, OLIO EVO)
MARGHERITA 5.00 € (POMODORO,FIOR DI LATTE, BASILICO, OLIO EVO)
DIAVOLA 6.50 €
(POMODORO, FIOR DI LATTE, SALAME PICCANTE)
SICILIANA 6.50 €
(POMODORO, FIOR DI LATTE, MELANZANE, BASILICO, OLI EVO)
NAPOLETANA 8.00 €
(POMODORO, MOZZARELLA DI BUFALA, BASILICO, SCAGLIE DI GRANA, OLIO EVO)
ORTOLANA 7.50 €
(POMODORO, FIOR DI LATTE, PEPERONI, MELANZANE, FUNGHI, ZUCCHINE, FRIARIELLI)
CAPRICCIOSA 7.50 €
(POMODORO, FUNGHI, PROSCIUTTO, SALAME, OLIVE, CARCIOFINI, FIOR DI LATTE, BASILICO, OLIO EVO)
PROSCIUTTO E FUNGHI 6.50 € (POMODORO, FIOR DI LATTE, PROSCIUTTO E FUNGHI)
TONNO E CIPOLLA 7.00€
(POMODORO, TONNO, POMODORINI, CIPOLLA, BASILICO, OLIO EVO, SCORZA DI LIMONE)
ESTATE 7.00 €
(POMODORO, CRUDO, BURRATA, BASILICO, OLIO EVO)
PIZZE BIANCHE
MIMOSA 6.00 €
PIZZA MENU
(FIOR DI LATTE, PANNA, PROSCIUTTO COTTO, MAIS, BASILICO)
PRIMAVERA 6.50 €
(FIOR DI LATTE, POMODORINI, BASILICO, OLIO EVO)
4 FORMAGGI 8.00 €
(GORGONZOLA, FIOR DI LATTE, FONTINA, EMMENTAL, BASILICO)
INVERNO 7.00€
(FIOR DI LATTE, SALSICCIA, FRIARIELLI)
VIENNESE 6.50 €
(FIOR DI LATTE, WURSTEL, PATATINE)
BUFALINA 8.00 €
(POMODORINI, MOZZARELLA DI BUFALA, BASILICO, OLIO EVO)
NERANO 7.00 €
(FIOR DI LATTE, ZUCCHINE, GRANA, BASILICO, OLIO EVO)
PISTACCHIOSA 8.00 €
(FIOR DI LATTE, PESTO DI PISTACCHIO, MORTADELLA, GRANELLA DI PISTACCHIO, STRACCIATELLA DI BURRATA, BASILICO)
RIPIENO 7.00 €
(POMODORO, RICOTTA, SALAME, FIOR DI LATTE, OLIO EVO, BASILICO)
4 STAGIONI 6.50 €
(POMODORO, MOZZARELLA, PROSCIUTTO, SALAMINO)
BRESAOLA 8.00 €
(POMODORO, MOZZARELLA, BRESAOLA, RUCOLA, GRANA)
WURSTEL 6.00 €
(POMODORO, MOZZARELLA, WURSTEL)`);
console.log(newArray);
