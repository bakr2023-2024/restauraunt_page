export default () => {
  const contact = document.createElement("div");
  contact.classList.add("module");
  contact.setAttribute("id", "contact");

  const contactTitle = document.createElement("h1");
  contactTitle.classList.add("title");
  contactTitle.textContent = "Contact Us";

  const contactText = document.createElement("p");
  contactText.classList.add("text");
  contactText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mi vitae sagittis blandit, magna lacus aliquam felis, vitae lacinia nunc risus vitae neque. Nulla facilisi. Nullam ac semper nisi. Donec auctor, ex id luctus aliquam, purus nibh aliquet purus, sit amet molestie odio ante vitae nunc.";

  const contactInfo = document.createElement("div");
  const contactPhone = document.createElement("p");
  contactPhone.textContent = "Phone: (555) 123-4567";
  const contactEmail = document.createElement("p");
  contactEmail.textContent = "Email: info@delicious-eats.com";

  contactInfo.appendChild(contactPhone);
  contactInfo.appendChild(contactEmail);

  contact.appendChild(contactTitle);
  contact.appendChild(contactText);
  contact.appendChild(contactInfo);

  return contact;
};