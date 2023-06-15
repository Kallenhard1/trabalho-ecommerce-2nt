// const arrLinks = [];

// const links = document.querySelectorAll('a');

// const linksList = links.forEach((link) => arrLinks.push({
//     folder: link.pathname,
//     link: link.href,
//     text: link.textContent
// }));

// function findMatches(wordToMatch, words) {
//     return words.filter(word => {
//         const regex = new RegExp(wordToMatch, 'gi');
//         return word.text.match(regex) || word.link.match(regex);
//     });
// }

// function wordWithBars(x) {
//     return x.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
// }

// function displayMatches() {
//     const matchArray = findMatches(this.value, arrLinks);
//     const html = matchArray.map(word => {
//         const regex = new RegExp(this.value,'gi');
//         const linkName = word.link.replace(regex, `<a class="hl">${this.value}</a>`);
//         const textName = word.text.replace(regex, `<a class="hl">${this.value}</a>`);
//         return `
//             <li>
//                 <a class="name">${textName}, ${linkName}</a>
//                 <a class="folder">${wordWithBars(word.folder)}</a>
//             </li>
//         `;
//     }).join('');
//     suggestions.innerHTML = html;
// }

// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);