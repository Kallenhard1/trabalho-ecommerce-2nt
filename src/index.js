const cartLinks = [];
const cart = [];
const images = ["./assets/produto_1.png", "./assets/produto_2.webp", "./assets/produto_3.webp", "./assets/produto_4.webp"];
let imgState = 0;

const imgTag = document.getElementById("imgClickAndChange");
const addToCartButtons = document.querySelectorAll('.product-button');


function addToCart() {
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      cart.push({ name: button.name });
      console.log(cart);
      const name = cart.map(obj => obj.name).join(', ');
      alert(`Você tem os produtos ${JSON.stringify(name)} adicionados ao carrinho!`);
    });
  });
}

function changeImage(event) {
  imgState = (++imgState % images.length);
  event.target.src = images[imgState];
  console.log(imgState);
}

document.addEventListener('DOMContentLoaded', addToCart);
imgTag.addEventListener("click", changeImage);