const root = document.documentElement;
const menuToggle = document.querySelector("#menu-toggle");
const navList = document.querySelector("#nav-list");
const themeToggle = document.querySelector("#theme-toggle");
const currentYear = document.querySelector("#current-year");

if (currentYear) currentYear.textContent = String(new Date().getFullYear());

function setTheme(theme) {
  const isDark = theme === "dark";
  root.dataset.theme = isDark ? "dark" : "light";
  themeToggle?.setAttribute("aria-pressed", String(isDark));
  themeToggle?.setAttribute("aria-label", isDark ? "Activar tema claro" : "Activar tema oscuro");
  const themeLabel = themeToggle?.querySelector(".theme-label");
  if (themeLabel) themeLabel.textContent = isDark ? "Oscuro" : "Claro";
}

try {
  setTheme(localStorage.getItem("edgar-portfolio-theme") || "light");
} catch {
  setTheme("light");
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  try {
    localStorage.setItem("edgar-portfolio-theme", nextTheme);
  } catch {
    // El cambio visual funciona aunque el navegador bloquee el almacenamiento local.
  }
});

function closeMenu() {
  if (!menuToggle || !navList || !window.matchMedia("(max-width: 720px)").matches) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  navList.hidden = true;
}

if (menuToggle && navList) {
  const mobileQuery = window.matchMedia("(max-width: 720px)");
  const syncMenu = () => {
    if (mobileQuery.matches) {
      menuToggle.hidden = false;
      navList.hidden = menuToggle.getAttribute("aria-expanded") !== "true";
    } else {
      menuToggle.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      navList.hidden = false;
    }
  };

  syncMenu();
  mobileQuery.addEventListener("change", syncMenu);
  menuToggle.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Cerrar menú" : "Abrir menú");
    navList.hidden = !willOpen;
  });
  navList.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const projectCards = [...document.querySelectorAll(".project-card")];
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const projectCount = document.querySelector("#project-count");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;
    projectCards.forEach((card) => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    if (projectCount) projectCount.textContent = `${visibleCount} ${visibleCount === 1 ? "proyecto" : "proyectos"}`;
  });
});

const projectDialog = document.querySelector("#project-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogProblem = document.querySelector("#dialog-problem");
const dialogStack = document.querySelector("#dialog-stack");
const dialogStatus = document.querySelector("#dialog-status");
const dialogImage = document.querySelector("#dialog-image");
const dialogCaption = document.querySelector("#dialog-caption");
const dialogRepo = document.querySelector("#dialog-repo");

document.querySelectorAll("[data-project-details]").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    if (!card || !projectDialog) return;
    const image = card.querySelector(".project-media img");
    const repo = card.querySelector(".project-actions a");
    const title = card.querySelector("h3")?.textContent?.trim() || "Proyecto";
    dialogTitle.textContent = title;
    dialogDescription.textContent = card.querySelector(".project-summary")?.textContent?.trim() || "";
    dialogProblem.textContent = card.querySelector(".project-facts div:first-child p")?.textContent?.trim() || "";
    dialogStack.textContent = [...card.querySelectorAll(".tag-list li")].map((tag) => tag.textContent.trim()).join(" · ");
    dialogStatus.textContent = card.querySelector(".project-note")?.textContent?.trim() || "Proyecto académico.";
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialogCaption.textContent = card.querySelector(".image-caption")?.textContent?.trim() || "Captura del proyecto";
    dialogRepo.href = repo.href;
    projectDialog.showModal();
  });
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => projectDialog?.close());
});

projectDialog?.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");
const copyButton = document.querySelector("#copy-message");
let validatedMessage = "";

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...contactForm.querySelectorAll("input, textarea")];
  let firstInvalid = null;
  fields.forEach((field) => {
    const invalid = !field.checkValidity();
    field.setAttribute("aria-invalid", String(invalid));
    if (invalid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    feedback.textContent = "Revisa los campos: completa tu nombre, un correo válido y un mensaje de al menos 10 caracteres.";
    feedback.classList.add("is-error");
    firstInvalid.focus();
    copyButton.hidden = true;
    return;
  }

  const formData = new FormData(contactForm);
  validatedMessage = `De: ${formData.get("name")} (${formData.get("email")})\n\n${formData.get("message")}`;
  feedback.textContent = "Mensaje validado en este navegador. No se envió ni guardó; puedes copiarlo y continuar por GitHub.";
  feedback.classList.remove("is-error");
  copyButton.hidden = false;
});

contactForm?.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    field.removeAttribute("aria-invalid");
    if (feedback.classList.contains("is-error")) feedback.textContent = "";
  });
});

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(validatedMessage);
    feedback.textContent = "Mensaje copiado al portapapeles. Puedes pegarlo donde prefieras.";
  } catch {
    feedback.textContent = "El navegador bloqueó el portapapeles. Selecciona y copia el texto de tus campos manualmente.";
  }
});
