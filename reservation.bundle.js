"use strict";
(self["webpackChunkrestauraunt_page"] = self["webpackChunkrestauraunt_page"] || []).push([["reservation"],{

/***/ "./src/reservation.js":
/*!****************************!*\
  !*** ./src/reservation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
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
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/reservation.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYXVudC1wYWdlLy4vc3JjL3Jlc2VydmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCByZXNlcnZhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmVzZXJ2YXRpb24uY2xhc3NMaXN0LmFkZChcIm1vZHVsZVwiKTtcclxuICByZXNlcnZhdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlc2VydmF0aW9uXCIpO1xyXG5cclxuICBjb25zdCByZXNlcnZhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHJlc2VydmF0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gIHJlc2VydmF0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIk1ha2UgYSBSZXNlcnZhdGlvblwiO1xyXG5cclxuICBjb25zdCByZXNlcnZhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICByZXNlcnZhdGlvbkZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwic3VibWl0LnBocFwiKTtcclxuICByZXNlcnZhdGlvbkZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiUE9TVFwiKTtcclxuXHJcbiAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpO1xyXG4gIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZTpcIjtcclxuXHJcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lXCIpO1xyXG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcclxuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IHBob25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgcGhvbmVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwaG9uZVwiKTtcclxuICBwaG9uZUxhYmVsLnRleHRDb250ZW50ID0gXCJQaG9uZTpcIjtcclxuXHJcbiAgY29uc3QgcGhvbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBwaG9uZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZWxcIik7XHJcbiAgcGhvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBob25lXCIpO1xyXG4gIHBob25lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInBob25lXCIpO1xyXG4gIHBob25lSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlbWFpbFwiKTtcclxuICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gXCJFbWFpbDpcIjtcclxuXHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJlbWFpbFwiKTtcclxuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW1haWxcIik7XHJcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZW1haWxcIik7XHJcblxyXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZVwiKTtcclxuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XHJcblxyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XHJcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZVwiKTtcclxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XHJcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIHRydWUpO1xyXG5cclxuICBjb25zdCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgdGltZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpbWVcIik7XHJcbiAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaW1lOlwiO1xyXG5cclxuICBjb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdGltZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0aW1lXCIpO1xyXG4gIHRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpbWVcIik7XHJcbiAgdGltZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aW1lXCIpO1xyXG4gIHRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgZ3Vlc3RzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZ3Vlc3RzTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZ3Vlc3RzXCIpO1xyXG4gIGd1ZXN0c0xhYmVsLnRleHRDb250ZW50ID0gXCJOdW1iZXIgb2YgR3Vlc3RzOlwiO1xyXG5cclxuICBjb25zdCBndWVzdHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBndWVzdHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xyXG4gIGd1ZXN0c0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ3Vlc3RzXCIpO1xyXG4gIGd1ZXN0c0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJndWVzdHNcIik7XHJcbiAgZ3Vlc3RzSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMVwiKTtcclxuICBndWVzdHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgYnJhbmNoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgYnJhbmNoTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiYnJhbmNoXCIpO1xyXG4gIGJyYW5jaExhYmVsLnRleHRDb250ZW50ID0gXCJQcmVmZXJyZWQgQnJhbmNoOlwiO1xyXG5cclxuICBjb25zdCBicmFuY2hTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gIGJyYW5jaFNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJyYW5jaFwiKTtcclxuICBicmFuY2hTZWxlY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImJyYW5jaFwiKTtcclxuXHJcbiAgY29uc3QgYnJhbmNoMU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgYnJhbmNoMU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImJyYW5jaDFcIik7XHJcbiAgYnJhbmNoMU9wdGlvbi50ZXh0Q29udGVudCA9IFwiQnJhbmNoIE5hbWU6IEFkZHJlc3MsIFBob25lIE51bWJlclwiO1xyXG5cclxuICAvLyBSZXBlYXQgZm9yIG90aGVyIGJyYW5jaGVzXHJcbiAgLy8gY29uc3QgYnJhbmNoMk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgLy8gYnJhbmNoMk9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiYnJhbmNoMlwiKTtcclxuICAvLyBicmFuY2gyT3B0aW9uLnRleHRDb250ZW50ID1cIkJyYW5jaCBOYW1lOiBBZGRyZXNzLCBQaG9uZSBOdW1iZXJcIjtcclxuXHJcbiAgYnJhbmNoU2VsZWN0LmFwcGVuZENoaWxkKGJyYW5jaDFPcHRpb24pO1xyXG4gIC8vIGJyYW5jaFNlbGVjdC5hcHBlbmRDaGlsZChicmFuY2gyT3B0aW9uKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG5cclxuICByZXNlcnZhdGlvbkZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcclxuICByZXNlcnZhdGlvbkZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICByZXNlcnZhdGlvbkZvcm0uYXBwZW5kQ2hpbGQocGhvbmVMYWJlbCk7XHJcbiAgcmVzZXJ2YXRpb25Gb3JtLmFwcGVuZENoaWxkKHBob25lSW5wdXQpO1xyXG4gIHJlc2VydmF0aW9uRm9ybS5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcclxuICByZXNlcnZhdGlvbkZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XHJcbiAgcmVzZXJ2YXRpb25Gb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgcmVzZXJ2YXRpb25Gb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgcmVzZXJ2YXRpb25Gb3JtLmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XHJcbiAgcmVzZXJ2YXRpb25Gb3JtLmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XHJcbiAgcmVzZXJ2YXRpb25Gb3JtLmFwcGVuZENoaWxkKGd1ZXN0c0xhYmVsKTtcclxuICByZXNlcnZhdGlvbkZvcm0uYXBwZW5kQ2hpbGQoZ3Vlc3RzSW5wdXQpO1xyXG4gIHJlc2VydmF0aW9uRm9ybS5hcHBlbmRDaGlsZChicmFuY2hMYWJlbCk7XHJcbiAgcmVzZXJ2YXRpb25Gb3JtLmFwcGVuZENoaWxkKGJyYW5jaFNlbGVjdCk7XHJcbiAgcmVzZXJ2YXRpb25Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIHJlc2VydmF0aW9uLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uVGl0bGUpO1xyXG4gIHJlc2VydmF0aW9uLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uRm9ybSk7XHJcblxyXG4gIHJldHVybiByZXNlcnZhdGlvbjtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9