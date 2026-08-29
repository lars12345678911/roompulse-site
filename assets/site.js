(() => {
  "use strict";

  const config = window.ROOMPULSE_SITE || {};
  const lang = document.documentElement.lang || "nb";
  const messages = {
    nb: {
      setup: "Før publisering: åpne assets/site-config.js og fyll inn navn og støtte-e-post.",
      comingSoon: "Kommer snart til App Store",
      appStore: "Åpne i App Store",
      missingContact: "Støtteadresse publiseres før lansering"
    },
    en: {
      setup: "Before publishing: open assets/site-config.js and add your name and support email.",
      comingSoon: "Coming soon to the App Store",
      appStore: "View on the App Store",
      missingContact: "Support address will be published before launch"
    },
    es: {
      setup: "Antes de publicar: abre assets/site-config.js y añade tu nombre y correo de soporte.",
      comingSoon: "Próximamente en el App Store",
      appStore: "Ver en el App Store",
      missingContact: "La dirección de soporte se publicará antes del lanzamiento"
    }
  };
  const t = messages[lang] || messages.en;

  const placeholderName = !config.developerName || /BYTT|CHANGE|REPLACE/i.test(config.developerName);
  const placeholderEmail = !config.supportEmail || /BYTT|CHANGE|REPLACE|example\.com/i.test(config.supportEmail);

  document.querySelectorAll("[data-developer-name]").forEach((node) => {
    node.textContent = config.developerName || "RoomPulse";
  });

  document.querySelectorAll("[data-support-email]").forEach((node) => {
    const email = placeholderEmail ? "" : config.supportEmail;
    node.textContent = email || t.missingContact;
    if (email && node.tagName === "A") {
      node.href = `mailto:${email}`;
      node.removeAttribute("aria-disabled");
    } else if (node.tagName === "A") {
      node.removeAttribute("href");
      node.setAttribute("aria-disabled", "true");
    }
  });

  document.querySelectorAll("[data-support-email-button]").forEach((node) => {
    const email = placeholderEmail ? "" : config.supportEmail;
    if (email) {
      node.href = `mailto:${email}`;
      node.classList.remove("button-disabled");
      node.removeAttribute("aria-disabled");
    } else {
      node.removeAttribute("href");
      node.classList.add("button-disabled");
      node.setAttribute("aria-disabled", "true");
    }
  });

  document.querySelectorAll("[data-effective-date]").forEach((node) => {
    const dates = config.effectiveDate || {};
    node.textContent = dates[lang] || dates.en || "";
  });

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-app-store-link]").forEach((node) => {
    if (config.appStoreUrl) {
      node.href = config.appStoreUrl;
      node.textContent = t.appStore;
      node.classList.remove("button-disabled");
      node.removeAttribute("aria-disabled");
    } else {
      node.removeAttribute("href");
      node.textContent = t.comingSoon;
      node.classList.add("button-disabled");
      node.setAttribute("aria-disabled", "true");
    }
  });

  if (placeholderName || placeholderEmail) {
    document.querySelectorAll("[data-setup-warning]").forEach((node) => {
      node.textContent = t.setup;
      node.classList.add("is-visible");
    });
  }

  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-primary-nav]");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
