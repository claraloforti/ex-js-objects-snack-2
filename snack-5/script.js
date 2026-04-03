const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // "Chef Hyur" perchè viene modificato l'oggetto maker originale dato che non abbiamo una copia
console.log(secondBurger.maker.name); // "Chef Hyur" 
console.log(hamburger.maker.restaurant.name); // "Hyur's II" perchè secondBurger.maker e hamburger.maker fanno riferimento allo stesso oggetto
console.log(secondBurger.maker.restaurant.name); // "Hyur's II" perchè secondBurger.maker.restaurant fa riferimento alla stessa copia a cui fa riferimento newRestaurant

// DOMANDA: Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// RISPOSTA: Vengono creati 5 oggetti: hamburger, maker e restaurant, la copia di restaurant e la copia di hamburger.