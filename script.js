document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("mainNav");
  const toggle = document.getElementById("menuToggle");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  const header = document.getElementById("siteHeader") || document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("quoteForm");
  const note = document.getElementById("formNote");
  if (form && note) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      note.textContent = "Thank you. Your enquiry has been captured in this demo.";
      note.classList.add("success");
    });
  }
});