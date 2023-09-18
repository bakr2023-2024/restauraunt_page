import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import reservation from "./reservation.js";
import review from "./review.js";
import style from "./style.css";
const addTablinks = () => {
  const tabsLinks = [];
  const names = ["Home", "Menu", "Review", "Reservation", "Contact"];
  names.forEach((name) => {
    const tab = document.createElement("button");
    tab.classList.add("tabLink");
    tab.textContent = name;
    tab.addEventListener("click", () => {
      switchTabContent(tab);
    });
    tabsLinks.push(tab);
  });
  return tabsLinks;
};
const switchTabContent = (tab) => {
  const content = document.querySelector("#module-container");
  const prev = document.querySelector("#active");
  if (prev) {
    if (prev === tab) return;
    prev.removeAttribute("id");
  }
  tab.setAttribute("id", "active");
  content.textContent = "";
  if (tab.textContent === "Home") {
    content.appendChild(home());
  } else if (tab.textContent === "Menu") {
    content.appendChild(menu());
  } else if (tab.textContent === "Review") {
    content.appendChild(review());
  } else if (tab.textContent === "Reservation") {
    content.appendChild(reservation());
  } else if (tab.textContent === "Contact") {
    content.appendChild(contact());
  }
};
const setStructure = () => {
  const tabLinks = addTablinks();
  const tabContainer = document.createElement("div");
  for (let i = 0; i < tabLinks.length; i++) {
    tabContainer.appendChild(tabLinks[i]);
  }
  tabContainer.setAttribute("id", "tab-container");
  const moduleContainer = document.createElement("div");
  moduleContainer.setAttribute("id", "module-container");
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.appendChild(tabContainer);
  content.appendChild(moduleContainer);
  document.body.appendChild(content);
  switchTabContent(tabLinks[0]);
};
setStructure();
