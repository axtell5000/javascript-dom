const productNameEle = document.getElementById("product-name");
const remainigCharEle = document.getElementById("remaining-chars");

const maxAllowedChars = productNameEle.maxLength;

function updateRemainChars(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingChars = maxAllowedChars - enteredTextLength;
  remainigCharEle.textContent = remainingChars;

  if (remainingChars === 0) {
    remainigCharEle.classList.add("error");
    productNameEle.classList.add("error");
  } else if (remainingChars <= 10) {
    remainigCharEle.classList.add("warning");
    productNameEle.classList.add("warning");
    remainigCharEle.classList.remove("error");
    productNameEle.classList.remove("error");
  } else {
    remainigCharEle.classList.remove("warning");
    productNameEle.classList.remove("warning");
  }
}

productNameEle.addEventListener("input", updateRemainChars);
