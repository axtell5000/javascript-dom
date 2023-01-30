const numberEle = document.getElementById("user-number");
const calcBtn = document.querySelector("#calculator button");
const calculatedSum = document.getElementById("calculated-sum");

function calcSum() {
  const sumTotal = parseInt(numberEle.value);
  let runningTotal = 0;
  for (let i = sumTotal; i >= 0; i--) {
    runningTotal = runningTotal + i;
  }
  calculatedSum.textContent = runningTotal;
  calculatedSum.style.display = "block";
}

calcBtn.addEventListener("click", calcSum);

// Array looping

const allLinks = document.querySelectorAll("#highlight-links a");
console.log(allLinks);

for (link of allLinks) {
  link.classList.add("highlight");
}

// User profile

const user = {
  name: "Stephen Axtell",
  age: 40,
  job: "Frontend Developer",
  city: "Cape Town",
};

const userBtn = document.querySelector("#user-data button");

function showUser() {
  const userList = document.getElementById("output-user-data");
  userList.innerHTML = "";

  for (const prop in user) {
    const listEle = document.createElement("li");
    const outputText = prop.toUpperCase() + ": " + user[prop];
    listEle.textContent = outputText;
    userList.append(listEle);
  }
}

userBtn.addEventListener("click", showUser);

// While loop dice roll statistics
const rollDiceEle = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 100) + 1;
}

function calcMumberofDiceRolls() {
  const diceInputEle = document.getElementById("user-target-number");
  const listDiceRolls = document.getElementById("dice-rolls");

  const enteredNum = parseInt(diceInputEle.value); // getting input and converting to integer
  listDiceRolls.innerHTML = ""; // resetting element everytime button is clicked

  let hasRolledNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledNumber) {
    const rolledNumber = rollDice(); // calling random number generator

    // if (rolledNumber == enteredNum) {
    //   hasRolledNumber = true;
    // }
    numberOfRolls++; // increment rolls by one
    // creating the li element and adding it to the ul
    const newRolledListEle = document.createElement("li");
    const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
    newRolledListEle.textContent = outputText;
    listDiceRolls.append(newRolledListEle);

    hasRolledNumber = rolledNumber == enteredNum; // checking the condition
  }

  const outputTotalRollsEle = document.getElementById("output-total-rolls");
  const outputTargetNumberEle = document.getElementById("output-target-number");
  // adding the mumbers to the spans
  outputTargetNumberEle.textContent = enteredNum;
  outputTotalRollsEle.textContent = numberOfRolls;
}

rollDiceEle.addEventListener("click", calcMumberofDiceRolls);
