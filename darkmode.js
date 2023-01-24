const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
const darkImage = document.querySelector(".imgDark");
const lightImage = document.querySelector(".imgLight");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkImage.classList.add("show");
    lightImage.classList.add("hide");
    lightImage.classList.remove("show");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightImage.classList.add("show");
    darkImage.classList.remove("show");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// SHow SideBar

const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sideBar");

menu.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

// Get Page Nom value

let pageNom = document.querySelector(".pageNom");
let PageValue = document.querySelector(".pageNom").textContent;

document.querySelector(".pageNom").addEventListener("click", function () {
  console.log(PageValue);
});

//   Show Search Bar
let searchbtn = document.querySelector(".search");
let showForm = document.querySelector(".showForm");

searchbtn.addEventListener("click", function () {
  showForm.classList.add("headerCenterClick");

  searchbtn.classList.toggle("hide");
});

//   Get Search Bar Value

let searchedValue = document.querySelector(".searchedValue");
let formInput = document.querySelector(".formInput");

searchedValue.addEventListener("click", function () {
  console.log("Searched Value is " + formInput.value);
});
