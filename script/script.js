const oldBackground = document.body.style.backgroundImage;
const oldColor = document.body.style.backgroundColor;
const mainTitle = document.getElementById("main-title");
const pages = document.querySelectorAll(".page");

mainTitle.innerHTML += "(Others will be soon!)";

alert(`Outer html will be: ${mainTitle.outerHTML}`);
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
userDialog();

function developerInfo(name, surname, position = "developer") {
  alert(`Here is information about web-developer:\n
        name: ${name},\n
        surname: ${surname},\n
        position:${position}`);
}
developerInfo("Anastasia", "Andrienko");

function showLargerLine(line1, line2) {
  const larger = line1 > line2 ? line1 : line2;
  alert(
    `Compared 2 lines: ${line1} and ${line2}.\n Larger line is: '${larger}'`,
  );
}
showLargerLine("Kyiv", "Ukraine");

document.body.style.backgroundImage = "none";
document.body.style.backgroundColor = "pink";

setTimeout(() => {
  document.body.style.backgroundImage = oldBackground;
  document.body.style.backgroundColor = oldColor;
}, 30000);
