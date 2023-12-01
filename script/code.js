// functionality
const btnAdd = document.querySelector("[data-add]");
let output = document.querySelector("[data-list]");
let input = document.querySelector("[data-input]");

let tasks = [];

function addTask() {
  let input = document.querySelector("[data-input]");

  let status = document.querySelector("[data-status]");

  let output = document.querySelector("[data-list]");

  if (input.value == "") {
    status.textContent = "please enter a task";
    console.log(`empty`);
  } else {
    tasks.push(input);
    status.textContent = "task added!";
    output.innerHTML += `<li class="task"><input data-done type="checkbox"> <span data-task>${input.value}</span> <button data-del>Del</button></li>`;
    input.value = "";
  }
  let deleteBtns = document.querySelectorAll("[data-del]");
  for (let button of deleteBtns) {
    button.addEventListener("click", function () {
      button.parentElement.remove();
    });
  }
  let checkBox = document.querySelector("[data-done]");
  for (let checkbox of checkBox) {
    checkbox.addEventListener("click", function () {
      if (checkbox.checked) {
        checkbox.parentElement.children[1].innerHTML = `<s>${checkbox.parentElement.children[1].innerHTML}</s>`;
      } else {
        checkbox.parentElement.children[1].innerHTML =
          checkbox.parentElement.children[1].children[0].textContent;
      }
    });
  }
}

btnAdd.addEventListener("click", addTask);
