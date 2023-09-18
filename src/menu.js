export default () => {
  const menu = document.createElement("div");
  menu.classList.add("module");
  menu.setAttribute("id", "menu");

  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("title");
  menuTitle.textContent = "Menu";  
  const menuText = document.createElement("p");
  menuText.classList.add("text");
  menuText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mi vitae sagittis blandit, magna lacus aliquam felis, vitae lacinia nunc risus vitae neque. Nulla facilisi. Nullam ac semper nisi. Donec auctor, ex id luctus aliquam, purus nibh aliquet purus, sit amet molestie odio ante vitae nunc.";

  menu.appendChild(menuTitle);
  menu.appendChild(menuText);

  return menu;
};
