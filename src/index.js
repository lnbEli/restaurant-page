import "./style.css";
import populateAboutPage from "./aboutPage.js";
import populateMenuPage from "./menuPage.js";
import populateContactPage from "./contactPage.js";

const btns = document.querySelectorAll(".btn");

populateAboutPage();

btns.forEach((element) => {
  element.addEventListener("click", () => {
    deleteContent();
    if (element.textContent === "About") {
      populateAboutPage();
    } else if (element.textContent === "Menu") {
      populateMenuPage();
    } else {
      populateContactPage();
      console.log(element);
    }
  });
});

function deleteContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

// This does not This return the very similar error - Uncaught TypeError: functions[element.textContent] is not a function
//     at HTMLButtonElement

// console.log(`populate${element.textContent}Page`);
// functions[`populate${element.textContent}Page`]();
