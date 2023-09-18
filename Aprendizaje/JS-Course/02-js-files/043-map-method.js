// map method this is not a destructive method

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salesprices = prices.map(price => price / 2);
// console.log(salesprices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'bomb', price: 40},
    {name: 'carrot', price: 300},
    {name: 'selfish', price: 10},
    {name: 'dishes', price: 50}
];

const salePorduct = products.map((product) =>{
    if (product.price > 30 ){
        return {name: product.name, price: product.price /2}
    } else {
        return product;
    }
});

console.log(salePorduct);