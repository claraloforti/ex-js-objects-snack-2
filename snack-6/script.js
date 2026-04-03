const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

const chefCopy = { ...chef };
console.log('chef:', chef)
console.log('chefCopy:', chefCopy);


// DOMANDA: Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// RISPOSTA: Il metodo migliore per clonare chef è spread perché copia le proprietà di primo livello e mantiene il riferimento alle funzioni 