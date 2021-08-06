"use strict";

const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modal_button = document.querySelector(".modal__button");
const doneItemList = document.querySelector(".section__list");

modal.addEventListener("click", closeModal);

let item_list = [];

function insertEvent() {
  let input_box = document.querySelector(".input_box");
  if (input_box.value === "") {
    modal.classList.toggle("show");
    if (modal.classList.contains("show")) {
      body.style.overflow = "hidden";
    }
  } else {
    item_list.push(input_box.value);
    input_box.value = "";

    showItemList();
  }
}

function showItemList() {
  let list = "<ul>";

  for (let i = 0; i < item_list.length; i++) {
    list += `<li><span class="span__item">${item_list[i]}</span>
    <button class="button__delete"><i class="far fa-trash-alt"></i></button></li>`;
  }

  list += "</ul>";

  document.querySelector(".section__list").innerHTML = list;

  let delete_item = document.querySelectorAll(".button__delete");
  for (let i = 0; i < delete_item.length; i++) {
    delete_item[i].addEventListener("click", () => deleteItemList(i));
  }
}

function deleteItemList(index_num) {
  item_list.splice(index_num, 1);
  showItemList();
}

function closeModal() {
  modal.classList.toggle("show");
  if (!modal.classList.contains("show")) {
    body.style.overflow = "auto";
  }
}

doneItemList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI" || "SPAN") {
    event.target.classList.toggle("clicked");
  }
});
