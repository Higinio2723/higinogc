const raiz = document.documentElement;

try {
  const guardado = localStorage.getItem("tema");
  if (guardado) raiz.dataset.tema = guardado;
} catch {}

document.getElementById("tema").addEventListener("click", () => {
  const nuevo = raiz.dataset.tema === "claro" ? "oscuro" : "claro";
  raiz.dataset.tema = nuevo;
  try { localStorage.setItem("tema", nuevo); } catch {}
});

document.getElementById("anio").textContent = new Date().getFullYear();

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observador.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => observador.observe(el));
