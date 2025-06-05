
const sigmaForm = document.getElementById("sigma__form");
const input = document.getElementById("sigma__input");
const inputUrl = document.getElementById("sigma__input--url");
const listS = document.querySelector("#scp");
const listO = document.querySelector("#other");

let optionsG = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

getScps(optionsG);

function getScps(options) {
  fetch("http://localhost:3000/scps", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Assuming data is an array of SCP objects
      data.forEach((scp) => {
        const listItem = document.createElement("li");
        listItem.classList.add("gallery__item");

        const link = document.createElement("a");
        link.href = scp.url;
        link.textContent = scp.name;
        link.target = "_blank"; // Open in a new tab
        link.classList.add("gallery__link");
        if (scp.name.includes("SCP")) {
          listS.appendChild(listItem);
        } else {
          listO.appendChild(listItem);
        }

        listItem.appendChild(link);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

sigmaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameS = input.value.trim();
  const urlS = inputUrl.value.trim();
  if (nameS && urlS) {
    const newScp = {
      name: nameS,
      url: urlS,
    };
    const optionsP = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newScp),
    };
    getScps(optionsP);
    getScps(optionsG);
    input.value = ""; // Clear input field
    inputUrl.value = ""; // Clear URL field
  } else {
    alert("Please enter both a name and a URL.");
  }
});
