import { save, load } from "./modules/storage.js";
 // імпортуємо franc для визначення мови
// import skps from "./nvsdjvdj.json"; // видалити цей рядок
import { StorageSystem, SCPObject } from "./storageSystem.js"; // змінено з .ts на .js

const sigmaDiv = document.querySelector(".gallery");
const sigmaForm = document.getElementById("sigma__form");
const input = document.getElementById("sigma__input");
const inputUrl = document.getElementById("sigma__input--url");
const listSW = document.querySelector("#scpW");
const listSF = document.querySelector("#otherF");
const listSU = document.querySelector("#otherU");
const listOW = document.querySelector("#otherW");

const key = "scps";
let ssaps = load(key);

async function init() {
  if (!ssaps) {
    // Завантажуємо JSON через fetch
    const response = await fetch("./nvsdjvdj.json");
    const skps = await response.json();
    ssaps = skps.skps;
    save(key, ssaps);
  }

  console.log(ssaps);

  const storage = new StorageSystem();
  ssaps.forEach((scp) => {
    const id =
      scp.id || Date.now().toString() + Math.random().toString(36).slice(2, 8);
    storage.add(new SCPObject(id, scp.name, scp.url));
    getScps(scp.name, scp.url, id);
  });
  // --- кінець інтеграції ---

  function getScps(name, url, id) {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");
    if (id) listItem.dataset.id = id; // додаємо data-id
    const link = document.createElement("a");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete__button");
    const isRussian = (text) => /[а-яё]/i.test(text);
    const isUkrainian = (text) => /[ґєіїҐЄІЇ]/.test(text);
    // const langdetect = require("langdetect");
    

    if (name.includes("SCP")) {
      listSW.appendChild(listItem);
      deleteButton.textContent = "Annihilate";
    } else if (isRussian(name)) {
      deleteButton.textContent = "Удалить";
      listSF.appendChild(listItem);
    } else {
      listItem.classList.add("other__item");
      listOW.appendChild(listItem);
      deleteButton.textContent = "Delete";
    }
    link.href = url;
    link.textContent = name;
    link.target = "_blank";
    link.classList.add("gallery__link");
    listItem.appendChild(link);
    listItem.appendChild(deleteButton);

    // --- додано обробник видалення ---
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const itemId = listItem.dataset.id;
      // Видалити з storage
      storage.remove(itemId);
      // Видалити з ssaps
      const idx = ssaps.findIndex((obj) => obj.id === itemId);
      if (idx !== -1) {
        ssaps.splice(idx, 1);
        save(key, ssaps);
      }
      // Видалити з DOM
      listItem.remove();
    });
    // --- кінець додавання ---
  }

  sigmaDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("gallery__item")) {
      const link = e.target.children[0];
      window.open(link.href, link.target);
    }

    const link = item.querySelector(".gallery__link");
    window.open(link.href, link.target);
  });

  sigmaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(ssaps);
    setTimeout(() => {
      if (input && inputUrl) {
        addScp(input, inputUrl);
        input.value = "";
        inputUrl.value = "";
      } else {
        alert("Please enter both a name and a URL.");
      }
    }, 1000);
  });

  function addScp(input, inputUrl) {
    const nameS = input.value.trim();
    const urlS = inputUrl.value.trim();
    if (nameS && urlS) {
      // Генеруємо простий id
      const id = Date.now().toString() + Math.random().toString(36).slice(2, 8);
      const newScp = {
        name: nameS,
        url: urlS,
        id: id,
      };

      input.value = "";
      inputUrl.value = "";
      let array = [];
      ssaps.forEach((scp) => {
        array.push(scp.name);
      })
        if (array.includes(nameS)) {
          alert("this scp already exists");
        } else {
          storage.add(new SCPObject(newScp.id, newScp.name, newScp.url));
          ssaps.push(newScp);
          save(key, ssaps);
          console.log(ssaps);
          getScps(newScp.name, newScp.url, newScp.id); // передаємо id
        }
      
      
    } else {
      alert("Please enter both a name and a URL.");
    }
  }
}

init(); // Викликаємо асинхронну ініціалізацію