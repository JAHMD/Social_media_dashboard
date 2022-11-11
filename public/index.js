const html = document.documentElement;
const modeBtn = document.getElementById("dark-btn");
const mode = window.localStorage.getItem("mode");

mode ? html.classList.add("dark") : "";

modeBtn.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    window.localStorage.setItem("mode", "");
  } else {
    html.classList.add("dark");
    window.localStorage.setItem("mode", "dark");
  }
});
