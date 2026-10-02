// Opens and closes the mobile top menu dropdown (see menu.css)
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".global-header").forEach(function (header) {
    const toggle = header.querySelector(".menu-toggle");
    if (!toggle) return;

    function setOpen(open) {
      header.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "✕" : "☰";
    }

    toggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("menu-open"));
    });

    // Close when tapping outside the header
    document.addEventListener("click", function (e) {
      if (!header.contains(e.target)) setOpen(false);
    });
  });
});
