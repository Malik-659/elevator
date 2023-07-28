let elevator = document.querySelector(".elevator_border");
let upButton = document.querySelector(".upButton");
let downButton = document.querySelector(".downButton");
let sensor = document.querySelector(".sensor");
let up1 = document.querySelector(".up1");
let up2 = document.querySelector(".up2");
let up3 = document.querySelector(".up3");
let up4 = document.querySelector(".up4");
let up5 = document.querySelector(".up5");

upButton.addEventListener("click", () => {
  if (elevator.style.marginTop === "105%") {
    elevator.style.marginTop = "79%";
  } else if (elevator.style.marginTop === "79%") {
    elevator.style.marginTop = "53%";
  } else if (elevator.style.marginTop === "53%") {
    elevator.style.marginTop = "27%";
  } else if (elevator.style.marginTop === "27%") {
    elevator.style.marginTop = "";
  }
});
downButton.addEventListener("click", () => {
  if (elevator.style.marginTop === "") {
    elevator.style.marginTop = "27%";
  } else if (elevator.style.marginTop === "27%") {
    elevator.style.marginTop = "53%";
  } else if (elevator.style.marginTop === "53%") {
    elevator.style.marginTop = "79%";
  } else if (elevator.style.marginTop === "79%") {
    elevator.style.marginTop = "105%";
  }
});
sensor.addEventListener("click", () => {
  let prom = prompt("Введите этаж");
  if (elevator.style.marginTop === "" && prom == 1) {
    elevator.style.marginTop = "105%";
  } else if (elevator.style.marginTop === "" && prom == 2) {
    elevator.style.marginTop = "79%";
  } else if (elevator.style.marginTop === "" && prom == 3) {
    elevator.style.marginTop = "53%";
  } else if (elevator.style.marginTop === "" && prom == 4) {
    elevator.style.marginTop = "27%";
  } else if (elevator.style.marginTop === "" && prom == 5) {
    elevator.style.marginTop = "";
  }

  if (elevator.style.marginTop === "27%" && prom == 1) {
    elevator.style.marginTop = "105%";
  } else if (elevator.style.marginTop === "27%" && prom == 2) {
    elevator.style.marginTop = "79%";
  } else if (elevator.style.marginTop === "27%" && prom == 3) {
    elevator.style.marginTop = "53%";
  } else if (elevator.style.marginTop === "27%" && prom == 4) {
    elevator.style.marginTop = "27%";
  } else if (elevator.style.marginTop === "27%" && prom == 5) {
    elevator.style.marginTop = "";
  }
  if (elevator.style.marginTop === "53%" && prom == 1) {
    elevator.style.marginTop = "105%";
  } else if (elevator.style.marginTop === "53%" && prom == 2) {
    elevator.style.marginTop = "79%";
  } else if (elevator.style.marginTop === "53%" && prom == 3) {
    elevator.style.marginTop = "53%";
  } else if (elevator.style.marginTop === "53%" && prom == 4) {
    elevator.style.marginTop = "27%";
  } else if (elevator.style.marginTop === "53%" && prom == 5) {
    elevator.style.marginTop = "";
  }
  if (elevator.style.marginTop === "79%" && prom == 1) {
    elevator.style.marginTop = "105%";
  } else if (elevator.style.marginTop === "79%" && prom == 2) {
    elevator.style.marginTop = "79%";
  } else if (elevator.style.marginTop === "79%" && prom == 3) {
    elevator.style.marginTop = "53%";
  } else if (elevator.style.marginTop === "79%" && prom == 4) {
    elevator.style.marginTop = "27%";
  } else if (elevator.style.marginTop === "79%" && prom == 5) {
    elevator.style.marginTop = "";
  }
  if (elevator.style.marginTop === "105%" && prom == 1) {
    elevator.style.marginTop = "105%";
  } else if (elevator.style.marginTop === "105%" && prom == 2) {
    elevator.style.marginTop = "79%";
  } else if (elevator.style.marginTop === "105%" && prom == 3) {
    elevator.style.marginTop = "53%";
  } else if (elevator.style.marginTop === "105%" && prom == 4) {
    elevator.style.marginTop = "27%";
  } else if (elevator.style.marginTop === "105%" && prom == 5) {
    elevator.style.marginTop = "";
  }
});
