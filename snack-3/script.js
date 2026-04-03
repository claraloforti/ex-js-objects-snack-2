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

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

console.log(hamburger, secondBurger, thirdBurger)

// DOMANDA: Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// RISPOSTA: Vengono creati 9 oggetti, perche structuredClone crea una copia non solo del primo livello di un oggetto ma anche di tutti i livelli annidati