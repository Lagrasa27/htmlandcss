const products = [
    {name: 'golf star', price: 30},
    {name: 'green shell', price: 30},
    {name: 'red shell', price: 30},
    {name: 'banana skin', price: 30},
    {name: 'mushroom', price: 30}
];


// const filtered = products.filter( product => product.price >20);
//
// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);


console.log(promos);
