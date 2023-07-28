const categoryModal = document.querySelector(".category-modal");
const addCategoryBtn = document.querySelector(".add-category-btn");
const closeCategoryBtn = document.querySelector(".close-category-btn");
const saveCategoryBtn = document.querySelector(".save-category-btn");
const urlNameInput = document.querySelector(".url-name-input");
const categoryURLInput = document.querySelector(".category-url-input");
const categoryNameContainer = document.querySelector(
  ".category-name-container"
);
//new
const urlDisplaySection = document.querySelector(".url-display-section");

const urlDisplayContainer = document.querySelector(".url-display-container");
//new
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
// categoryName
function saveCategoryModal() {
  const categoryName = document.createElement("div");
  categoryName.classList.add("category-name");
  let categoryNameInputValue = urlNameInput.value;
  categoryName.innerHTML = categoryNameInputValue;
  categoryNameContainer.appendChild(categoryName);
  //display section
  const urlDisplaySection = document.createElement("div");
  urlDisplaySection.classList.add("url-display-section");
  const sectionHeader = document.createElement("h1");
  sectionHeader.innerHTML = categoryNameInputValue;
  const addUrlBtn = document.createElement("button");
  addUrlBtn.classList.add("addUrlBtn");
  addUrlBtn.innerHTML = "Add URL";
  urlDisplayContainer.appendChild(urlDisplaySection);
  urlDisplaySection.append(sectionHeader, addUrlBtn);
  // urlControlSection.appendChild(addUrlBtn);
  const categoryNames = document.querySelectorAll(".category-name");
  categoryNames.forEach((name) => {
    name.onclick = (e) => {
      e.target.urlDisplaySection.style.display = "block";
    };
  });

  //  e.target.urlDisplaySection.style.display = "block";
  //new
}
const sectionHeader = document.querySelector(".section-header");
