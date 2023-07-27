const laneModal = document.querySelector(".lane-modal");
const addLaneBtn = document.querySelector(".add-lane-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const saveModalBtn = document.querySelector(".save-modal-btn");
const originInput = document.querySelector(".origin-input");
const destinationInput = document.querySelector(".destination-input");
const linkDisplay = document.querySelector(".link-display");
function openLaneModal() {
  laneModal.style.display = "block";
}

function closeLaneModal() {
  laneModal.style.display = "none";
}

addLaneBtn.onclick = () => {
  openLaneModal();
};
closeModalBtn.onclick = () => {
  closeLaneModal();
};

saveModalBtn.onclick = () => {
  saveLaneModal();
  closeLaneModal();
};

function saveLaneModal() {
  const laneDisplay = document.createElement("div");
  laneDisplay.classList.add("laneDisplay");
  const originInputValue = originInput.value;
  laneDisplay.innerHTML = originInputValue;
  linkDisplay.appendChild(laneDisplay);
}
