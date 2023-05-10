let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.getElementById("list");
let listItems = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function createDeleteBtn() {
  let button = document.createElement("button");
  button.appendChild(document.createTextNode("X"));
  button.classList.add("delete");
  return button;
}

function createListItem() {
  let li = document.createElement("li");
  let deleteButton = createDeleteBtn();
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(deleteButton);
  return li;
}

function addToList() {
  let li = createListItem();
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength()) {
    addToList();
  } else {
    alert("Please enter an item");
  }
}

function addListAfterKeypress(e) {
  if (!inputLength() && e.key === "Enter") {
    alert("Please enter an item");
  } else if (e.key === "Enter") {
    addToList();
  }
}

function toggleDoneOrDelete(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDoneOrDelete);
