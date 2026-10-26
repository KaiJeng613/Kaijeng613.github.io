const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

function activateTab(target) {
  tabButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.tab === target);
  });

  tabPanels.forEach(panel => {
    panel.classList.toggle("active", panel.id === target);
  });
}

tabButtons.forEach(button => {
  button.addEventListener("click", () => activateTab(button.dataset.tab));
});

// Shared links can open any tab, e.g. ?tab=about.
const requestedTab = new URLSearchParams(window.location.search).get("tab");
const hasRequestedTab = Array.from(tabButtons).some(
  button => button.dataset.tab === requestedTab
);

if (hasRequestedTab) {
  activateTab(requestedTab);

  // Wait for images to settle before scrolling to the tab navigation.
  window.addEventListener("load", () => {
    document.querySelector(".tabs").scrollIntoView({
      behavior: "instant",
      block: "start"
    });
  }, { once: true });
}

const filterButtons = document.querySelectorAll(".filter-button");
const experienceItems = document.querySelectorAll(".experience-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(filterButton => {
      filterButton.classList.toggle("active", filterButton === button);
    });

    experienceItems.forEach(item => {
      item.classList.toggle(
        "hidden",
        filter !== "all" && item.dataset.category !== filter
      );
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const scrollTopButton = document.getElementById("scrollTop");

function updateScrollTopButton() {
  scrollTopButton.classList.toggle("show", window.scrollY > 400);
}

window.addEventListener("scroll", updateScrollTopButton, { passive: true });
updateScrollTopButton();

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
