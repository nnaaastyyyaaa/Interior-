const table = document.querySelector("#elements");
const boxes = document.querySelectorAll(".industrial-box");

let current = null;
let shiftX = 0;
let shiftY = 0;

let zIndex = 1;

function moveAt(pageX, pageY) {
  current.style.left = pageX - shiftX + "px";
  current.style.top = pageY - shiftY + "px";
}
boxes.forEach((box) => {
  box.addEventListener("mousedown", (event) => {
    event.preventDefault();
    current = box;

    const rect = box.getBoundingClientRect();

    shiftX = event.clientX - rect.left;
    shiftY = event.clientY - rect.top;

    box.style.position = "absolute";
    box.style.zIndex = zIndex++;

    moveAt(event.pageX, event.pageY);
  });
});

document.addEventListener("mousemove", (event) => {
  event.preventDefault();
  if (!current) return;
  moveAt(event.pageX, event.pageY);
});

document.addEventListener("mouseup", (event) => {
  event.preventDefault();
  current = null;
});

table.addEventListener("mouseover", (event) => {
  const target = event.target;

  if (target.closest("img")) {
    console.log(event.relatedTarget);
    target.style.transform = "scale(1.1)";
    target.style.boxShadow = "0 0 10px black";
  } else if (target.closest("p")) {
    console.log(event.relatedTarget);
    target.style.background = "#a08971";
    target.style.color = "white";
    target.style.borderRadius = "5px";
  }
});

table.addEventListener("mouseout", (event) => {
  const target = event.target;
  if (target.closest("img")) {
    console.log(event.relatedTarget);
    target.style.transform = "scale(1)";
    target.style.boxShadow = "";
  } else if (target.closest("p")) {
    console.log(event.relatedTarget);
    target.style.background = "";
    target.style.color = "";
  }
});
