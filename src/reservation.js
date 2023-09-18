export default () => {
  const reservation = document.createElement("div");
  reservation.classList.add("module");
  reservation.setAttribute("id", "reservation");

  const reservationTitle = document.createElement("h1");
  reservationTitle.classList.add("title");
  reservationTitle.textContent = "Make a Reservation";

  const reservationForm = document.createElement("form");
  reservationForm.setAttribute("action", "submit.php");
  reservationForm.setAttribute("method", "POST");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name:";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("required", true);

  const phoneLabel = document.createElement("label");
  phoneLabel.setAttribute("for", "phone");
  phoneLabel.textContent = "Phone:";

  const phoneInput = document.createElement("input");
  phoneInput.setAttribute("type", "tel");
  phoneInput.setAttribute("id", "phone");
  phoneInput.setAttribute("name", "phone");
  phoneInput.setAttribute("required", true);

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email:";

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");

  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date");
  dateLabel.textContent = "Date:";

  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("name", "date");
  dateInput.setAttribute("required", true);

  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "time");
  timeLabel.textContent = "Time:";

  const timeInput = document.createElement("input");
  timeInput.setAttribute("type", "time");
  timeInput.setAttribute("id", "time");
  timeInput.setAttribute("name", "time");
  timeInput.setAttribute("required", true);

  const guestsLabel = document.createElement("label");
  guestsLabel.setAttribute("for", "guests");
  guestsLabel.textContent = "Number of Guests:";

  const guestsInput = document.createElement("input");
  guestsInput.setAttribute("type", "number");
  guestsInput.setAttribute("id", "guests");
  guestsInput.setAttribute("name", "guests");
  guestsInput.setAttribute("min", "1");
  guestsInput.setAttribute("required", true);

  const branchLabel = document.createElement("label");
  branchLabel.setAttribute("for", "branch");
  branchLabel.textContent = "Preferred Branch:";

  const branchSelect = document.createElement("select");
  branchSelect.setAttribute("id", "branch");
  branchSelect.setAttribute("name", "branch");

  const branch1Option = document.createElement("option");
  branch1Option.setAttribute("value", "branch1");
  branch1Option.textContent = "Branch Name: Address, Phone Number";

  // Repeat for other branches
  // const branch2Option = document.createElement("option");
  // branch2Option.setAttribute("value","branch2");
  // branch2Option.textContent ="Branch Name: Address, Phone Number";

  branchSelect.appendChild(branch1Option);
  // branchSelect.appendChild(branch2Option);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Submit";

  reservationForm.appendChild(nameLabel);
  reservationForm.appendChild(nameInput);
  reservationForm.appendChild(phoneLabel);
  reservationForm.appendChild(phoneInput);
  reservationForm.appendChild(emailLabel);
  reservationForm.appendChild(emailInput);
  reservationForm.appendChild(dateLabel);
  reservationForm.appendChild(dateInput);
  reservationForm.appendChild(timeLabel);
  reservationForm.appendChild(timeInput);
  reservationForm.appendChild(guestsLabel);
  reservationForm.appendChild(guestsInput);
  reservationForm.appendChild(branchLabel);
  reservationForm.appendChild(branchSelect);
  reservationForm.appendChild(submitButton);

  reservation.appendChild(reservationTitle);
  reservation.appendChild(reservationForm);

  return reservation;
};
