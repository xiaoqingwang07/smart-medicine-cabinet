const authScreens = new Set(["p01", "p02", "p03", "p04"]);
const fallbackScreen = "p01";

function showScreen(screenId) {
  const target = document.getElementById(screenId) ? screenId : fallbackScreen;
  const screens = document.querySelectorAll("[data-screen]");
  const tabBar = document.querySelector(".tab-bar");

  screens.forEach((screen) => {
    screen.classList.toggle("screen--active", screen.id === target);
  });

  if (tabBar) {
    tabBar.hidden = authScreens.has(target);
    tabBar.querySelectorAll("[data-tab-target]").forEach((item) => {
      item.classList.toggle("tab-bar__item--active", item.dataset.tabTarget === target);
    });
  }

  if (window.location.hash !== `#${target}`) {
    window.location.hash = target;
  }
}

window.showScreen = showScreen;

window.addEventListener("hashchange", () => {
  showScreen(window.location.hash.slice(1) || fallbackScreen);
});

document.addEventListener("DOMContentLoaded", () => {
  showScreen(window.location.hash.slice(1) || fallbackScreen);
});
