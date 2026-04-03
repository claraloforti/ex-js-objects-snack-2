const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // 'Double Cheese Burger'
console.log(secondBurger.name); // 'Double Cheese Burger'

// DOMANDA: Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// RISPOSTA: L'oggetto creato è uno, non viene creata una copia, quindi viene modificato l'oggetto originale