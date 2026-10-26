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
const experienceSearch = document.getElementById("experience-search");
const experienceStatus = document.getElementById("experience-status");
const experienceEmpty = document.getElementById("experience-empty");
const resetExperience = document.getElementById("reset-experience");
let selectedCategory = "all";

const searchableExperience = Array.from(experienceItems, item => ({
  element: item,
  category: item.dataset.category,
  text: item.textContent.toLowerCase().replace(/\s+/g, " ")
}));

function filterExperience() {
  const terms = experienceSearch.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const searchMatches = searchableExperience.filter(item =>
    terms.every(term => item.text.includes(term) || item.category.includes(term))
  );
  let visibleCount = 0;

  searchableExperience.forEach(item => {
    const visible = searchMatches.includes(item) &&
      (selectedCategory === "all" || item.category === selectedCategory);
    item.element.classList.toggle("hidden", !visible);
    if (visible) visibleCount++;
  });

  filterButtons.forEach(button => {
    const category = button.dataset.filter;
    const selected = category === selectedCategory;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
    // Keep the selected category available even if its search has no matches.
    button.hidden = category !== "all" && !selected &&
      !searchMatches.some(item => item.category === category);
  });

  experienceStatus.textContent = `${visibleCount} of ${searchableExperience.length} experiences`;
  experienceEmpty.hidden = visibleCount !== 0;
  resetExperience.hidden = terms.length === 0 && selectedCategory === "all";
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.filter;
    filterExperience();
  });
});

experienceSearch.addEventListener("input", filterExperience);
resetExperience.addEventListener("click", () => {
  experienceSearch.value = "";
  selectedCategory = "all";
  filterExperience();
  experienceSearch.focus();
});
filterExperience();

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
