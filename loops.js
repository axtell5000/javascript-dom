for (let i = 0; i < 100; i++) {
  console.log(i);
}

const authors = ["Joe Abercrombie", "Robin Hobb", "Fonda Lee", "R.F Kuang"];

for (const author of authors) {
  console.log(author);
}

const loggedInUser = {
  name: "Stephen",
  age: 44,
  isLoggedIn: false,
  sex: "m",
};

for (const prop in loggedInUser) {
  console.log(prop, loggedInUser[prop]);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log("Done");
