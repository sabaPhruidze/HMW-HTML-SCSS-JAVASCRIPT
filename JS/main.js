const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  //idx is the number of clicked one and idx1 is all the number of smallCups 0-7
  smallCups.forEach((cup, idx1) => {
    if (idx >= idx1) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    // height of the big cup is 340
    percentage.style.height = `${(fullCups / totalCups) * 340}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  // there is also a remained problem inside big cup. basically It does not
  // become full completely, that is why I am going to write this code
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${4 - (500 * fullCups) / 1000}L`;
  }
}
