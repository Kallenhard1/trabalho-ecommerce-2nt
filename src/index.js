const images = ["./assets/produto_1.png", "./assets/produto_2.webp", "./assets/produto_3.webp", "./assets/produto_4.webp"];

const cart = [];

let imgState = 0;

const imgTag = document.getElementById("imgClickAndChange");
const addToCartButtons = document.querySelectorAll('.product-button');

function addToCart() {
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      cart.push(button.name);
      console.log(cart);
      alert(`Você tem os produtos ${cart.join(', ')} adicionados ao carrinho!`);
    });
  });
}

function changeImage(event) {
  imgState = (++imgState % images.length);
  event.target.src = images[imgState];
}

document.addEventListener('DOMContentLoaded', addToCart);
imgTag.addEventListener("click", changeImage);