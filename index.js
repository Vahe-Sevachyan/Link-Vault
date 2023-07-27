const laneModal = document.querySelector(".lane-modal");
const addLaneBtn = document.querySelector(".add-lane-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const saveModalBtn = document.querySelector(".save-modal-btn");
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
