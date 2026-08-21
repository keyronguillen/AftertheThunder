/* ============================================================
   Después del trueno — script.js
   ============================================================ */

// >>> HOTMART CHECKOUT LINK (After the Thunder) <<<
// This is your real checkout link. If the product ever changes, update it here.
const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/P107263303L";


/* ---------- Buy buttons ---------- */
function goToCheckout() {
  if (HOTMART_CHECKOUT_URL.includes("XXXXXXX")) {
    alert("Set your Hotmart link in script.js (HOTMART_CHECKOUT_URL constant).");
    return;
  }
  window.open(HOTMART_CHECKOUT_URL, "_blank", "noopener");
}

document.querySelectorAll("[data-buy]").forEach(function (btn) {
  btn.addEventListener("click", goToCheckout);
});


/* ---------- Año en el footer ---------- */
var yearEl = document.getElementById("year");
if (yearEl) { yearEl.textContent = new Date().getFullYear(); }


/* ---------- Reveal al hacer scroll (sin librerías) ---------- */
(function () {
  var items = document.querySelectorAll(".reveal");

  // Degradación elegante: si no hay soporte, mostrar todo.
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  items.forEach(function (el) { observer.observe(el); });
})();
