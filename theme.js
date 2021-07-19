let selector = document.getElementById("switch");
theme = localStorage.getItem("themeValue");

selector.value = theme;
selector.addEventListener("click", changeTheme, false);

function storageTheme(theme) {
  if (theme == 1) {
    document.getElementById("body").classList.remove("theme-2");
    document.getElementById("body").classList.remove("theme-3");
  } else if (theme == 2) {
    document.getElementById("body").classList.add("theme-2");
    document.getElementById("body").classList.remove("theme-3");
  } else {
    document.getElementById("body").classList.add("theme-3");
    document.getElementById("body").classList.remove("theme-2");
  }
}

function changeTheme() {
  theme = selector.value;
  storageTheme(theme);
  localStorage.setItem("themeValue", selector.value);
}

storageTheme(theme);

// let selector = document.getElementById("switch"),
//   theme = localStorage.getItem("themeValue");

// selector.value = theme;
// selector.addEventListener("click", changeTheme, false);

// function storageTheme(theme) {
//   if (theme == 1) {
//     document.getElementById("body").classList.remove("theme-2");
//     document.getElementById("body").classList.remove("theme-3");
//   } else if (theme == 2) {
//     document.getElementById("body").classList.add("theme-2");
//     document.getElementById("body").classList.remove("theme-3");
//   } else {
//     document.getElementById("body").classList.remove("theme-2");
//     document.getElementById("body").classList.add("theme-3");
//   }
// }

// function changeTheme() {
//   theme = selector.value;
//   storageTheme(theme);
//   localStorage.setItem("themeValue", selector.value);
// }

// storageTheme(theme);
