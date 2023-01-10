const contr = document.querySelector(".contr");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const reset = document.getElementById("res");
const todo = document.querySelector(".todo");


function creat(i) {
  const list= document.createElement("div");
  list.className = "list";
  list.textContent = i;
  todo.append(list);
}

btn.addEventListener("click", () => {
  creat(input.value);
  icon.style.display = "block";
});

reset.addEventListener("click", () => {
  todo.innerHTML = "";
});
const icon = document.createElement("i");
icon.className = "fa-solid fa-trash-can";

icon.addEventListener("click", () => {

  list.remove();
});
// btn.addEventListener("click", () => {
//   input.innerHTML = remove();
// });
