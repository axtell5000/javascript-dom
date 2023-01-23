const firstParagraph = document.querySelector("p");

function changeText() {
  firstParagraph.textContent = "Clicked";
  console.log("hello");
}

firstParagraph.addEventListener("click", changeText);

const inputEl = document.querySelector("input");

function retrieveInput(event) {
  // let enteredText = inputEl.value;
  let enteredText = event.target.value;
  console.log(enteredText);
  console.log(event);
}

inputEl.addEventListener("input", retrieveInput);
