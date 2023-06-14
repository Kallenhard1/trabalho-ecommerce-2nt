const images = ["./assets/produto_1.png", "./assets/produto_2.webp", "./assets/produto_3.webp", "./assets/produto_4.webp"];

let imgState = 0;

const imgTag = document.getElementById("imgClickAndChange");

document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.product-button');
  addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
      alert(`Produto ${button.name} adicionado ao carrinho!`);
  });
  });
});

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % images.length);
  event.target.src = images[imgState];
});