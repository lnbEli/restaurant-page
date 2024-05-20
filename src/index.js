import "./style.css";
import populateAboutPage from "./aboutPage.js";
import populateMenuPage from "./menuPage.js";
import populateContactPage from "./contactPage.js";

const pageFunctions = {
  About: populateAboutPage,
  Menu: populateMenuPage,
  Contact: populateContactPage,
};

const btns = document.querySelectorAll(".btn");

populateAboutPage();

btns.forEach((element) => {
  element.addEventListener("click", () => {
    populateContactPage();
    deleteContent();
    const buttonText = element.textContent;
    const selectedFunction = pageFunctions[buttonText];
    selectedFunction();
  });
});

function deleteContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}
