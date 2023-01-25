const productNameEle = document.getElementById("product-name");
const remainigCharEle = document.getElementById("remaining-chars");

const maxAllowedChars = productNameEle.maxLength;

function updateRemainChars(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingChars = maxAllowedChars - enteredTextLength;
  remainigCharEle.textContent = remainingChars;

  if (remainingChars <= 10) {
    remainigCharEle.classList.add("warning");
  }
}

productNameEle.addEventListener("input", updateRemainChars);
