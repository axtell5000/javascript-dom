console.dir(document);

// document.body.children[1].children[0].href = "http://www.youtube.com";

let anchorEl = document.getElementById("external-link");
anchorEl.href = "https://io9.com";

anchorEl = document.querySelector("a");
anchorEl.href = "https://www.udemy.com";

// Add an element
// 1. Create new element
let newAnchor = document.createElement("a");
newAnchor.href = "https://www.google.com";
newAnchor.textContent = "Try Google";

//2) Get access to parent to hold new element
let firstParagraph = document.querySelector("p"); // first p

//3) Insert new element into parent element content
firstParagraph.append(newAnchor);

// Remove Element
// 1) Select element you want removed
const firstH1 = document.querySelector("h1");
// 2) Remove it
firstH1.remove();
//firstH1.parentElement.removeChild(firstH1) // for older browsers

// Move element
firstParagraph.parentElement.append(firstParagraph);

firstParagraph.innerHTML = "This is <strong>important</strong>"; // be wary of uding this
