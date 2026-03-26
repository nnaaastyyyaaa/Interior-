const mainTitle = document.getElementById("main-title");
const chooseBtn = document.querySelector(".choose-style-button");
const pages = document.querySelectorAll(".page");
const getDevInfoBtn = document.querySelector(".developer-info");
const pagesList = document.querySelector(".pages-list");

mainTitle.innerHTML += "(Others will be soon!)";

for (const page of pages) {
  const styleName = page.querySelector("p b");
  styleName.textContent = `${styleName.textContent}!`;
}

const mainTitleText = mainTitle.firstChild;
mainTitleText.nodeValue =
  "Welcome to the Loft, Industrial, and Scandinavian styles!";
function userDialog() {
  const want = confirm("Hello! Do you want to choose style for your room?");
  if (want) {
    const color = prompt("Do you like light or dark colors?");
    const minimalismOrDecor = prompt("Dou you prefer minimalizm or decor?");
    const likesRawMaterials = confirm(
      "Do you like exposed pipes, concrete, and metal elements?",
    );
    const prefersCozy = prompt(
      "Do you prefer cozy or more brutal/raw atmosphere?",
    );

    let scandinavianScore = 0;
    let industrialScore = 0;
    let loftScore = 0;

    if (color === "light") scandinavianScore++;
    if (color === "dark") loftScore++;

    if (minimalismOrDecor === "minimalism") scandinavianScore++;
    if (minimalismOrDecor === "decor") loftScore++;

    if (likesRawMaterials) industrialScore++;

    if (prefersCozy === "cozy") scandinavianScore++;
    if (prefersCozy === "brutal" || prefersCozy === "raw") industrialScore++;

    if (likesRawMaterials && minimalismOrDecor === "decor") loftScore++;

    const scores = [scandinavianScore, industrialScore, loftScore];
    let maxScore = 0;
    for (let i = 0; i < scores.length; i++) {
      maxScore = scores[i] > maxScore ? scores[i] : maxScore;
    }

    if (maxScore === scandinavianScore) {
      alert("Your style is scandinavian!");
      window.location.href = "./scandinavian.html";
    } else if (maxScore === industrialScore) {
      alert("Your style is industrial");
      window.location.href = "./industrial.html";
    } else if (maxScore === loftScore) {
      alert("Your style is loft!");
      window.location.href = "./loft.html";
    }
  }
}

chooseBtn.onclick = userDialog;

function developerInfo(name, surname, position = "developer") {
  alert(`Here is information about web-developer:\n
        name: ${name},\n
        surname: ${surname},\n
        position:${position}`);
}
function devInfo() {
  developerInfo("Anastasia", "Andrienko");
}

getDevInfoBtn.addEventListener("click", devInfo);

const handle = {
  handleEvent(event) {
    const current = event.target.dataset.current;
    if (current) {
      alert(`You clicked ${current} page. ${event.currentTarget}`);
    }
  },
};

document.addEventListener("click", (event) => {
  const target = event.target;
  const border = target.closest("[data-border]");
  if (border) {
    target.style.border = "3px solid rgb(65, 31, 9)";
  }
});

pagesList.addEventListener("click", handle);
setTimeout(() => {
  pagesList.removeEventListener("click", handle);
}, 15000);
