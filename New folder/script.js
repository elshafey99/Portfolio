document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = themeToggle.querySelector("i");

  // Set dark mode as default
  body.classList.add("dark-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });

  // Mobile Menu
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navList.classList.remove("active");
    })
  );

  // Header Scroll Effect
  const header = document.querySelector(".header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Scroll Reveal Animation
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".project-card, .skill-card, .section-title, .about-text, .timeline-item, .edu-card"
  );

  animatedElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

  // Language Toggle
  const langToggle = document.getElementById("lang-toggle");
  const langText = langToggle.querySelector(".lang-text");
  let currentLang = localStorage.getItem("language") || "en";

  // Apply saved language on load
  setLanguage(currentLang);

  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    setLanguage(currentLang);
    localStorage.setItem("language", currentLang);
  });

  function setLanguage(lang) {
    const t = translations[lang];

    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // Update language button text
    langText.textContent = lang === "en" ? "العربية" : "English";

    // Update Navigation
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks[0].textContent = t.nav.home;
    navLinks[1].textContent = t.nav.about;
    navLinks[2].textContent = t.nav.experience;
    navLinks[3].textContent = t.nav.education;
    navLinks[4].textContent = t.nav.skills;
    navLinks[5].textContent = t.nav.projects;
    navLinks[6].textContent = t.nav.contact;

    // Update Hero Section
    document.querySelector(".greeting").textContent = t.hero.greeting;
    document.querySelector(".name").textContent = t.hero.name;
    document.querySelector(".title").textContent = t.hero.title;
    document.querySelector(
      ".location"
    ).innerHTML = `<i class="fas fa-map-marker-alt" style="color: var(--primary-color)"></i> ${t.hero.location}`;
    document.querySelector(".description").textContent = t.hero.description;
    document.querySelector(".btn-primary").textContent = t.hero.viewWork;
    document.querySelector(
      ".btn-outline"
    ).innerHTML = `<i class="fas fa-download"></i> ${t.hero.downloadCV}`;

    // Update About Section
    document.querySelector("#about .section-title").textContent = t.about.title;
    const aboutParagraphs = document.querySelectorAll(".about-text p");
    aboutParagraphs[0].textContent = t.about.paragraph1;
    aboutParagraphs[1].textContent = t.about.paragraph2;
    aboutParagraphs[2].textContent = t.about.paragraph3;

    // Update Experience Section
    document.querySelector("#experience .section-title").textContent =
      t.experience.title;
    const timelineItems = document.querySelectorAll(".timeline-item");
    t.experience.jobs.forEach((job, index) => {
      if (timelineItems[index]) {
        const item = timelineItems[index];
        item.querySelector(".timeline-date").textContent = job.date;
        item.querySelector("h3").textContent = job.title;
        item.querySelector(".company").innerHTML = `<a href="${
          item.querySelector(".company a").href
        }" target="_blank" rel="noopener noreferrer">${job.company}</a> | ${
          job.location
        }`;
        const responsibilities = item.querySelectorAll("ul li");
        job.responsibilities.forEach((resp, i) => {
          if (responsibilities[i]) {
            responsibilities[i].textContent = resp;
          }
        });
      }
    });

    // Update Education Section
    document.querySelector("#education .section-title").textContent =
      t.education.title;
    const eduCards = document.querySelectorAll(".edu-card");
    t.education.items.forEach((item, index) => {
      if (eduCards[index]) {
        eduCards[index].querySelector("h3").textContent = item.degree;
        eduCards[index].querySelector(".institution").textContent =
          item.institution;
        eduCards[index].querySelector(".date").textContent = item.date;
      }
    });

    // Update Skills Section
    document.querySelector("#skills .section-title").textContent =
      t.skills.title;
    const skillCategories = document.querySelectorAll(".skills-category h3");
    const categoryKeys = Object.keys(t.skills.categories);
    skillCategories.forEach((cat, index) => {
      if (categoryKeys[index]) {
        cat.textContent = t.skills.categories[categoryKeys[index]];
      }
    });

    // Update Projects Section
    document.querySelector("#projects .section-title").textContent =
      t.projects.title;
    const projectCards = document.querySelectorAll(".project-card");
    t.projects.items.forEach((project, index) => {
      if (projectCards[index]) {
        const card = projectCards[index];
        const titleElement = card.querySelector(".project-title");
        titleElement.innerHTML = project.status
          ? `${project.title} <span style="color: var(--accent-color); font-size: 0.85rem;">${project.status}</span>`
          : project.title;
        card.querySelector(".project-desc").textContent = project.description;
      }
    });

    // Update Contact Section
    document.querySelector("#contact .section-title").textContent =
      t.contact.title;
    document.querySelector(".contact-text").textContent = t.contact.description;

    // Update Contact Form
    const formLabels = document.querySelectorAll(".form-group label");
    formLabels[0].innerHTML = `<i class="fas fa-user"></i> ${t.contact.form.name}`;
    formLabels[1].innerHTML = `<i class="fas fa-envelope"></i> ${t.contact.form.email}`;
    formLabels[2].innerHTML = `<i class="fas fa-phone"></i> ${t.contact.form.phone}`;
    formLabels[3].innerHTML = `<i class="fas fa-tag"></i> ${t.contact.form.subject}`;
    formLabels[4].innerHTML = `<i class="fas fa-comment-dots"></i> ${t.contact.form.message}`;

    document.querySelector("#name").placeholder =
      t.contact.form.namePlaceholder;
    document.querySelector("#email").placeholder =
      t.contact.form.emailPlaceholder;
    document.querySelector("#phone").placeholder =
      t.contact.form.phonePlaceholder;
    document.querySelector("#message").placeholder =
      t.contact.form.messagePlaceholder;

    const selectOptions = document.querySelectorAll("#subject option");
    selectOptions[0].textContent = t.contact.form.subjectPlaceholder;
    selectOptions[1].textContent = t.contact.form.subjectOptions.job;
    selectOptions[2].textContent = t.contact.form.subjectOptions.freelance;
    selectOptions[3].textContent = t.contact.form.subjectOptions.collaboration;
    selectOptions[4].textContent = t.contact.form.subjectOptions.general;

    document.querySelector(
      ".submit-btn"
    ).innerHTML = `<i class="fas fa-paper-plane"></i> ${t.contact.form.submit}`;
    document.querySelector(".contact-divider span").textContent =
      t.contact.divider;

    // Update Footer
    document.querySelector(
      ".footer p"
    ).innerHTML = `&copy; 2025 Mohamed Magdy Elshafey. ${t.footer.rights}`;
  }
});
