const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // "Salad"
console.log(secondBurger.ingredients[0]); // "Salad"

// DOMANDA: Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// RISPOSTA: Vengono creati 3 oggetti: hamburger, ingredients e una copia del primo livello dell'oggetto hamburger, ma le proprietà annidate fanno riferimento allo stesso oggetto, ciò significa che verranno modificate anche nell'originale