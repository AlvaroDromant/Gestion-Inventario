
const getRandomQuantity = () => {
    return ((Math.random() * 20) + 1).toFixed(0);
}


const inventario = [
    { id: 1, nombre: "Adidas Adipower CTRL 2.0", cantidad: getRandomQuantity(), precio: 179.95 },
    { id: 2, nombre: "Adidas Adipower ATTK 2.0", cantidad: getRandomQuantity(), precio: 269.99 },
    { id: 3, nombre: "Babolat Drive Tour", cantidad: getRandomQuantity(), precio: 159.81 },
    { id: 4, nombre: "Bullpadel Vertex 03", cantidad: getRandomQuantity(), precio: 244.99 },
    { id: 5, nombre: "Babolat Viper Carbon", cantidad: getRandomQuantity(), precio: 144.83 },
    { id: 6, nombre: "Adidas Adipower Soft 2.0", cantidad: getRandomQuantity(), precio: 239.99 },
    { id: 7, nombre: "Bullpadel Hack Comfort", cantidad: getRandomQuantity(), precio: 325 },
    { id: 8, nombre: "Babolat Contact", cantidad: getRandomQuantity(), precio: 215.99 },
    { id: 9, nombre: "Head Graphene 360 Alpha Pro", cantidad: getRandomQuantity(), precio: 159.99 },
    { id: 10, nombre: "Bullpadel Black Crown", cantidad: getRandomQuantity(), precio: 154.99 },
    { id: 11, nombre: "Head Bela X Pro", cantidad: getRandomQuantity(), precio: 244.99 },
    { id: 12, nombre: "Head Delta Hybrid", cantidad: getRandomQuantity(), precio: 149.99 },
    { id: 13, nombre: "NOX ML10 Pro Cup", cantidad: getRandomQuantity(), precio: 246.99 },
    { id: 14, nombre: "Siux Spartan Grafeno", cantidad: getRandomQuantity(), precio: 249.99 },
    { id: 15, nombre: "NOX ML10 Luxury L4", cantidad: getRandomQuantity(), precio: 251.95 },
    { id: 16, nombre: "Siux Diablo Fucsia", cantidad: getRandomQuantity(), precio: 159.99 },
    { id: 17, nombre: "NOX ML10 Pro P.4", cantidad: getRandomQuantity(), precio: 229.99 },
    { id: 18, nombre: "Adidas Metalbone", cantidad: getRandomQuantity(), precio: 225.32 },
    { id: 19, nombre: "Siux Pegasus Luxury", cantidad: getRandomQuantity(), precio: 159.99 },
    { id: 20, nombre: "Babolat Technical Viper", cantidad: getRandomQuantity(), precio: 232.99 },
    { id: 21, nombre: "Bullpadel Vertex 02", cantidad: getRandomQuantity(), precio: 156.39 },
    { id: 22, nombre: "Head Alpha Pro", cantidad: getRandomQuantity(), precio: 244.99 },
    { id: 23, nombre: "NOX Equation Control Pro", cantidad: getRandomQuantity(), precio: 157.46 },
    { id: 24, nombre: "Siux Pegasus Classic", cantidad: getRandomQuantity(), precio: 139.99 },
];

export { inventario };

