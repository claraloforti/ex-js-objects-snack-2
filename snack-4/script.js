const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}
const chefCopy = { ...chef };
console.log('chef:', chef)
console.log('chefCopy:', chefCopy);



const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};
const restaurantCopy = structuredClone(restaurant);
console.log('restaurant:', restaurant)
console.log('restaurantCopy:', restaurantCopy);




// DOMANDA 1: Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// RISPOSTA 1: Il metodo migliore è Spread perchè crea una copia superficiale dell'oggetto e mantiene il riferimento alla funzione.

// DOMANDA 2: Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// RISPOSTA 2: Il metodo migliore è structuredClone perchè crea una copia profonda dell'oggetto e gestisce oggetti complessi, ad esempio qui abbiamo new Date, mantenendone tutte le informazioni