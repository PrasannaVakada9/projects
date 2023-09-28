let counterElement = document.getElementById("counterValue");
let decrementEl = document.getElementById("decrement")
let incrementEl = document.getElementById("increment")
let resetEl = document.getElementById("reset")


decrementEl.addEventListener("click", () => {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
  
})

incrementEl.addEventListener("click", (callback) => {
    let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
})

resetEl.addEventListener("click", () => {
    let counterValue = 0;
  counterElement.textContent = counterValue;
  counterElement.style.color = "black";
})



