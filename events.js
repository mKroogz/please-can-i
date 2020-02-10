import domManager from "./domManager.js"

const demandEventManager = () => {
    const addButton = document.querySelector(".pleaButton");
  
    addButton.addEventListener("click", () => {
      domManager.printPleasToDOM();
    });
};

export default demandEventManager