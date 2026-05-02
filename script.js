const themeswitch = document.getElementById("themechange");
const root = document.documentElement;

const saved = localStorage.getItem("mode");

if (saved === "light") {
  root.classList.add("light");
  if (themeswitch) themeswitch.checked = true;
}

if (themeswitch) {
  themeswitch.addEventListener("change", () => {
    if (themeswitch.checked) {
      root.classList.add("light");
      localStorage.setItem("mode", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("mode", "dark");
    }
  });
}
