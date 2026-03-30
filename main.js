let toggle = document.getElementById(`themeToggle`);
let logo = document.getElementById("logo");

// toggle.onchange = () => {
//   document.getElementById(`Dark`).classList.toggle("dark:text-gray-100");
//   document.getElementById(`Dark`).classList.toggle("dark:bg-gray-900" );
// };
let html = document.documentElement;

toggle.onchange = () => {
  if (toggle.checked) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};
// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  toggle.checked = true;
} else {
  html.classList.remove("dark");
  toggle.checked = false;
}