// dark.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");

  // Ambil status dari localStorage
  const isDark = localStorage.getItem("darkMode") === "true";

  // Terapkan class jika dark mode aktif
  if (isDark) {
    document.body.classList.add("dark-mode");
  }

  // Sinkronkan toggle jika ada
  if (toggle) {
    toggle.checked = isDark;

    toggle.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "true");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "false");
      }
    });
  }
});
