let currentSelection = 0;

const formPage = document.getElementById("formPage");
const thankyouPage = document.getElementById("thankyouPage");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");

const submitButton = document.getElementById("submitButton");

const userRating = document.getElementById("userRating");
const removeActiveButtonClass = () => {
  button1.classList.remove("active-button");
  button2.classList.remove("active-button");
  button3.classList.remove("active-button");
  button4.classList.remove("active-button");
  button5.classList.remove("active-button");
};
//event listeners
button1.addEventListener("click", () => {
  currentSelection = 1;
  removeActiveButtonClass();
  button1.classList.add("active-button");
});
button2.addEventListener("click", () => {
  currentSelection = 2;
  removeActiveButtonClass();
  button2.classList.add("active-button");
});
button3.addEventListener("click", () => {
  currentSelection = 3;
  removeActiveButtonClass();
  button3.classList.add("active-button");
});
button4.addEventListener("click", () => {
  currentSelection = 4;
  removeActiveButtonClass();
  button4.classList.add("active-button");
});
button5.addEventListener("click", () => {
  currentSelection = 5;
  removeActiveButtonClass();
  button5.classList.add("active-button");
});

submitButton.addEventListener("click", () => {
  if (currentSelection != 0) {
    console.log(currentSelection);
    formPage.remove();
    userRating.textContent = "You selected " + currentSelection + " out of 5";
    thankyouPage.classList.remove("hidden");
  }
});
