const categoryModal = document.querySelector(".category-modal");
const addCategoryBtn = document.querySelector(".add-category-btn");
const closeCategoryBtn = document.querySelector(".close-category-btn");
const saveCategoryBtn = document.querySelector(".save-category-btn");
const urlNameInput = document.querySelector(".url-name-input");
const categoryURLInput = document.querySelector(".category-url-input");
const categoryNameContainer = document.querySelector(
  ".category-name-container"
);

function openCategoryModal() {
  categoryModal.style.display = "block";
}

function closeCategoryModal() {
  categoryModal.style.display = "none";
}

addCategoryBtn.onclick = () => {
  openCategoryModal();
};
closeCategoryBtn.onclick = () => {
  closeCategoryModal();
};

saveCategoryBtn.onclick = () => {
  saveCategoryModal();
  closeCategoryModal();
};

function saveCategoryModal() {
  const urlNameContainer = document.createElement("div");
  urlNameContainer.classList.add("categoryNameContainer");
  let urlNameInputValue = urlNameInput.value;
  urlNameContainer.innerHTML = urlNameInputValue;
  categoryNameContainer.appendChild(urlNameContainer);
}
