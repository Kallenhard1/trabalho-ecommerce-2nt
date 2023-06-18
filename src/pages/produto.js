const arrLinks = [];
const arrImages = ["./assets/produto_1.png", "./assets/produto_2.webp", "./assets/produto_3.webp", "./assets/produto_4.webp"];
let imgState = 0;

const links = document.querySelectorAll('a');
const images = document.querySelectorAll('img');

const linksList = links.forEach((link) => arrLinks.push({ text: link.textContent }));

function findMatches(wordToMatch, words) {
    return words.filter(word => {
        const regex = new RegExp(wordToMatch, 'gi');
        return word.text.match(regex);
    });
}

function wordWithBars(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function changeImage(event) {
  imgState = (++imgState % arrImages.length);
  event.target.src = arrImages[imgState];
  console.log(imgState);
}

function displayMatches() {
    const matchArray = findMatches(this.value, arrLinks);
    const html = matchArray.map(word => {
        const regex = new RegExp(this.value,'gi');
        const textName = word.text.replace(regex, `<a class="hl">${this.value}</a>`);
        return `
            <div class="product">
              <img src="#">
              <h3>${textName}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <input type="submit" class="product-button" value="Comprar">
            </div>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search-text');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);