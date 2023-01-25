// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
const firstBtn = document.querySelector("button");
//    - Select the second button by using an "id"
const secondBtn = document.getElementById("second-btn");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
// function firstBtnClicked() {
//   console.dir(firstBtn);
// }

firstBtn.addEventListener("click", firstBtnClicked);

//    - Output the second button WITHOUT using the variable in which it's stored
// function secondBtnClicked(event) {
//   console.dir(event.target);
// }

secondBtn.addEventListener("click", secondBtnClicked);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
const firstPara = document.body.children[2].children[1];
console.log(firstPara);

const thirdPara = document.body.children[2].children[3];
console.log(thirdPara);
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
function firstBtnClicked() {
  thirdPara.remove();
}
//    - The second button changes the background color of the first paragraph to blue
function secondBtnClicked(event) {
  // firstPara.style.backgroundColor = "blue";
  firstPara.classList.add("blue");
}

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
