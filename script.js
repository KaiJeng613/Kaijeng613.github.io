const tabButtons =
  document.querySelectorAll(".tab-button");

const tabPanels =
  document.querySelectorAll(".tab-panel");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    tabButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    tabPanels.forEach(panel => {
      panel.classList.remove("active");
    });

    button.classList.add("active");

    document
      .getElementById(target)
      .classList.add("active");
  });
});


const filterButtons =
  document.querySelectorAll(".filter-button");

const experienceItems =
  document.querySelectorAll(".experience-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    experienceItems.forEach(item => {
      const category = item.dataset.category;

      if (
        filter === "all" ||
        category === filter
      ) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});


document.getElementById("year").textContent =
  new Date().getFullYear();


const scrollTopButton =
  document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});