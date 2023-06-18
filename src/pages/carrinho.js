const products = [
    {id: 1, name: "Produto 1", link: "./products/produto_1.html"},
    {id: 2, name: "Produto 2", link: "./products/produto_2.html"},
    {id: 3, name: "Produto 3", link: "./products/produto_3.html"},
    {id: 4, name: "Produto 4", link: "./products/produto_4.html"}
];

const cart = [];

const cartItems = products.map((item) => item.name);
const cartLinks = products.map((link) => link.link);

console.log(cartItems);
console.log(cartLinks);
