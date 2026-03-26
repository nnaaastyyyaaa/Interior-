const advantagesList = document.querySelector(".advantages");
const definitions = document.querySelector(".definitions");
const showBtn = document.querySelector(".show");
const hideBtn = document.querySelector(".hide");
let selectedLi;

const lightSelected = (li) => {
  if (selectedLi) {
    selectedLi.classList.remove("dark");
  }
  selectedLi = li;
  selectedLi.classList.add("dark");
};

advantagesList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  console.log(li);
  if (!li) return;
  if (!advantagesList.contains(li)) return;
  lightSelected(li);
});

const definitionActions = {
  hide: () => {
    definitions.style.display = "none";
  },

  show: () => {
    definitions.style.display = "block";
  },
};

document.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  if (action && definitionActions[action]) {
    definitionActions[action]();
  }
});
