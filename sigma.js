const BASE_URL = "http://localhost:3000/scps";

export async function scpFunc(options) {
  try {
    const response = await fetch(`${BASE_URL}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

// const newStudent = {
//   name: "Artem",
// };

// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newStudent),
// };

// async function addNewStudent() {
//   try {
//     const response = await fetch("items/books.json", options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// document.querySelector("button").addEventListener("click", () => {
//   addNewStudent();
// });
