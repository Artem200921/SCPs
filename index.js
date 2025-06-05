const sigmaDiv = document.querySelector(".gallery");
const sigmaForm = document.getElementById("sigma__form");
const input = document.getElementById("sigma__input");
const inputUrl = document.getElementById("sigma__input--url");
const listSW = document.querySelector("#scpW");
const listOW = document.querySelector("#otherW");

let optionsG = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

getScps(optionsG);

function getScps(options) {
  fetch("https://artem200921.github.io/Server/scps.json", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Assuming data is an array of SCP objects
      setTimeout(() => {
        data.forEach((scp) => {
          const listItem = document.createElement("li");
          listItem.classList.add("gallery__item");

          const link = document.createElement("a");
          const deleteButton = document.createElement("button");

          deleteButton.classList.add("delete__button");
          deleteButton.addEventListener("click", () => {
            fetch(`https://artem200921.github.io/Server/scps.json/${scp.id}`, {
              method: "DELETE",
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                // Remove the list item from the DOM
                setTimeout(() => {
                  // Remove the list item after a short delay
                  listItem.remove();
                }, 500);
              })
              .catch((error) => {
                console.error(
                  "There was a problem with the delete operation:",
                  error
                );
              });
          });
          link.href = scp.url;
          link.textContent = scp.name;
          link.target = "_blank"; // Open in a new tab
          link.classList.add("gallery__link");
          if (scp.name.includes("SCP")) {
            listSW.appendChild(listItem);
            deleteButton.textContent = "Annihilate";
          } else {
            listItem.classList.add("other__item");
            listOW.appendChild(listItem);
            deleteButton.textContent = "Delete";
          }

          listItem.appendChild(link);
          listItem.appendChild(deleteButton);
        });
      }, 500);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

sigmaDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery__item")) {
    const link = e.target.children[0];
    window.open(link.href, link.target);
  }
  // console.log(e);

  // const link = item.querySelector(".gallery__link");
  // window.open(link.href, link.target);
});

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
    fetch("https://artem200921.github.io/Server/scps.json", optionsP);
    input.value = "";
    inputUrl.value = "";
    getScps(optionsG);
  } else {
    alert("Please enter both a name and a URL.");
  }
  listSW.innerHTML = "";
  listOW.innerHTML = "";
});
