const divA = window.document.getElementById("a")
const divB = window.document.getElementById("b")
const divC = window.document.getElementById("c")

divA.addEventListener("mouseenter", function () {
    divA.style.backgroundColor = "red";
})
divA.addEventListener("mouseleave", function () {
    divA.style.backgroundColor = "";
})

divB.addEventListener("mouseenter", function () {
    divB.innerHTML = "BBB"
})
divB.addEventListener("mouseleave", function () {
    divB.innerHTML = "B"
})

const initialWidth = divC.offsetWidth;
const initialHeight = divC.offsetHeight;
function expandirDiv() {
    divC.style.width = initialWidth * 1.5 + "px";
    divC.style.height = initialHeight * 1.5 + "px";
}

function retrairDiv() {
    divC.style.width = initialWidth + "px";
    divC.style.height = initialHeight + "px";
}
divC.addEventListener("mouseenter", function () {
    expandirDiv();
})
divC.addEventListener("mouseleave", function () {
    retrairDiv();
})
