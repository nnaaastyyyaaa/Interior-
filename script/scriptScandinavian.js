const mainTitle = document.getElementById("main-title");
const topRow = document.querySelector(".top-row");
const factBox = document.querySelector(".fact-box");
const table = document.querySelector(".scandinavian-table");
const scandiColors = ["White", "Light Grey", "Beige", "Soft Pastels"];

document.write("<h3>Key Scandinavian Colors:</h3>");
document.write("<ul>");
for (const color of scandiColors) {
  document.write(`<li>${color}</li>`);
}
document.write("</ul>");
document.write(
  "<p>These colors help create a bright and airy Scandinavian atmosphere.</p>",
);

const newP = document.createElement("p");
const ptext = document.createTextNode(
  "This style emphasizes coziness and simplicity.",
);
newP.append(ptext);
factBox.append(newP);

const subHeading = document.createElement("h3");
subHeading.textContent = "Interesting Fact:";
factBox.prepend(subHeading);

const tableNote = document.createElement("p");
tableNote.textContent =
  "Table shows the most important principles of Scandinavian design.";
table.after(tableNote);

const oldParagraph = document.querySelector("p");
const newParagraph = document.createElement("p");
newParagraph.textContent =
  "Scandinavian style uses natural materials and soft colors for a clean look.";
oldParagraph.replaceWith(newParagraph);

const iframe = document.querySelector(".scandinavian-frame");
iframe.remove();
