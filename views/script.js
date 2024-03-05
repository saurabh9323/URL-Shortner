const toggleSwitch = document.querySelector(".checkbox");
const container = document.querySelector(".container");

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    container.classList.add("night-mode");
  } else {
    container.classList.remove("night-mode");
  }
});
