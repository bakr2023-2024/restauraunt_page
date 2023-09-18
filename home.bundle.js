"use strict";
(self["webpackChunkrestauraunt_page"] = self["webpackChunkrestauraunt_page"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _history_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.jpg */ "./src/history.jpg");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const home = document.createElement("div");
  home.classList.add("module");
  home.setAttribute("id", "home");
  const header = document.createElement("div");
  header.classList.add("header");
  const logo = new Image();
  logo.src = _logo_png__WEBPACK_IMPORTED_MODULE_1__;
  logo.classList.add("logo");
  const motto = document.createElement("h1");
  motto.textContent = "Welcome to Delicious Eats";
  header.appendChild(logo);
  header.appendChild(motto);
  const history = document.createElement("div");
  history.classList.add("history");
  const historyText = document.createElement("p");
  historyText.textContent =
    "Delicious Eats has been serving mouthwatering dishes since 2005. Our mission is to provide high-quality, flavorful meals that leave our customers craving for more. Whether you're looking for traditional favorites or innovative culinary creations, we have something for everyone.";
  const historyImage = new Image();
  historyImage.src = _history_jpg__WEBPACK_IMPORTED_MODULE_0__;
  historyImage.classList.add("history-image");
  history.appendChild(historyText);
  history.appendChild(historyImage);
  const branches = document.createElement("div");
  branches.classList.add("branches");
  const branchesTitle = document.createElement("h2");
  branchesTitle.textContent = "Our Branches";
  branches.appendChild(branchesTitle);
  const branchList = document.createElement("ul");
  const branch1 = document.createElement("li");
  branch1.textContent = "Downtown Location: 123 Main Street, (555) 123-4567";
  branchList.appendChild(branch1);
  const branch2 = document.createElement("li");
  branch2.textContent = "Westside Location: 789 Elm Avenue, (555) 987-6543";
  branchList.appendChild(branch2);
  branches.appendChild(branchList);
  const hours = document.createElement("div");
  hours.classList.add("hours");
  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Opening Hours";
  const hoursTable = document.createElement("table");
  const tableHeaderRow = document.createElement("tr");
  const mondayHeaderCell = document.createElement("th");
  mondayHeaderCell.textContent = "Monday";
  tableHeaderRow.appendChild(mondayHeaderCell);
  const tuesdayHeaderCell = document.createElement("th");
  tuesdayHeaderCell.textContent = "Tuesday";
  tableHeaderRow.appendChild(tuesdayHeaderCell);
  hoursTable.appendChild(tableHeaderRow);
  const tableDataRow = document.createElement("tr");
  const mondayDataCell = document.createElement("td");
  mondayDataCell.textContent = "9:00 AM - 10:00 PM";
  tableDataRow.appendChild(mondayDataCell);
  const tuesdayDataCell = document.createElement("td");
  tuesdayDataCell.textContent = "9:00 AM - 10:00 PM";
  tableDataRow.appendChild(tuesdayDataCell);
  hoursTable.appendChild(tableDataRow);
  hours.appendChild(hoursTitle);
  hours.appendChild(hoursTable);
  home.appendChild(header);
  home.appendChild(history);
  home.appendChild(branches);
  home.appendChild(hours);
  return home;
});


/***/ }),

/***/ "./src/history.jpg":
/*!*************************!*\
  !*** ./src/history.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb6d6cee34e1a9e782ab.jpg";

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de7647e7e3b836d86a62.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ047QUFDOUIsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNDQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseUNBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhdW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGlzdG9yeSBmcm9tIFwiLi9oaXN0b3J5LmpwZ1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvLnBuZ1wiO1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibW9kdWxlXCIpO1xyXG4gIGhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gIGxvZ28uc3JjID0gTG9nbztcclxuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG4gIGNvbnN0IG1vdHRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIG1vdHRvLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIERlbGljaW91cyBFYXRzXCI7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChtb3R0byk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGlzdG9yeS5jbGFzc0xpc3QuYWRkKFwiaGlzdG9yeVwiKTtcclxuICBjb25zdCBoaXN0b3J5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGhpc3RvcnlUZXh0LnRleHRDb250ZW50ID1cclxuICAgIFwiRGVsaWNpb3VzIEVhdHMgaGFzIGJlZW4gc2VydmluZyBtb3V0aHdhdGVyaW5nIGRpc2hlcyBzaW5jZSAyMDA1LiBPdXIgbWlzc2lvbiBpcyB0byBwcm92aWRlIGhpZ2gtcXVhbGl0eSwgZmxhdm9yZnVsIG1lYWxzIHRoYXQgbGVhdmUgb3VyIGN1c3RvbWVycyBjcmF2aW5nIGZvciBtb3JlLiBXaGV0aGVyIHlvdSdyZSBsb29raW5nIGZvciB0cmFkaXRpb25hbCBmYXZvcml0ZXMgb3IgaW5ub3ZhdGl2ZSBjdWxpbmFyeSBjcmVhdGlvbnMsIHdlIGhhdmUgc29tZXRoaW5nIGZvciBldmVyeW9uZS5cIjtcclxuICBjb25zdCBoaXN0b3J5SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBoaXN0b3J5SW1hZ2Uuc3JjID0gSGlzdG9yeTtcclxuICBoaXN0b3J5SW1hZ2UuY2xhc3NMaXN0LmFkZChcImhpc3RvcnktaW1hZ2VcIik7XHJcbiAgaGlzdG9yeS5hcHBlbmRDaGlsZChoaXN0b3J5VGV4dCk7XHJcbiAgaGlzdG9yeS5hcHBlbmRDaGlsZChoaXN0b3J5SW1hZ2UpO1xyXG4gIGNvbnN0IGJyYW5jaGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBicmFuY2hlcy5jbGFzc0xpc3QuYWRkKFwiYnJhbmNoZXNcIik7XHJcbiAgY29uc3QgYnJhbmNoZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBicmFuY2hlc1RpdGxlLnRleHRDb250ZW50ID0gXCJPdXIgQnJhbmNoZXNcIjtcclxuICBicmFuY2hlcy5hcHBlbmRDaGlsZChicmFuY2hlc1RpdGxlKTtcclxuICBjb25zdCBicmFuY2hMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGNvbnN0IGJyYW5jaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgYnJhbmNoMS50ZXh0Q29udGVudCA9IFwiRG93bnRvd24gTG9jYXRpb246IDEyMyBNYWluIFN0cmVldCwgKDU1NSkgMTIzLTQ1NjdcIjtcclxuICBicmFuY2hMaXN0LmFwcGVuZENoaWxkKGJyYW5jaDEpO1xyXG4gIGNvbnN0IGJyYW5jaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgYnJhbmNoMi50ZXh0Q29udGVudCA9IFwiV2VzdHNpZGUgTG9jYXRpb246IDc4OSBFbG0gQXZlbnVlLCAoNTU1KSA5ODctNjU0M1wiO1xyXG4gIGJyYW5jaExpc3QuYXBwZW5kQ2hpbGQoYnJhbmNoMik7XHJcbiAgYnJhbmNoZXMuYXBwZW5kQ2hpbGQoYnJhbmNoTGlzdCk7XHJcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcclxuICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSBcIk9wZW5pbmcgSG91cnNcIjtcclxuICBjb25zdCBob3Vyc1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gIGNvbnN0IHRhYmxlSGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gIGNvbnN0IG1vbmRheUhlYWRlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgbW9uZGF5SGVhZGVyQ2VsbC50ZXh0Q29udGVudCA9IFwiTW9uZGF5XCI7XHJcbiAgdGFibGVIZWFkZXJSb3cuYXBwZW5kQ2hpbGQobW9uZGF5SGVhZGVyQ2VsbCk7XHJcbiAgY29uc3QgdHVlc2RheUhlYWRlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgdHVlc2RheUhlYWRlckNlbGwudGV4dENvbnRlbnQgPSBcIlR1ZXNkYXlcIjtcclxuICB0YWJsZUhlYWRlclJvdy5hcHBlbmRDaGlsZCh0dWVzZGF5SGVhZGVyQ2VsbCk7XHJcbiAgaG91cnNUYWJsZS5hcHBlbmRDaGlsZCh0YWJsZUhlYWRlclJvdyk7XHJcbiAgY29uc3QgdGFibGVEYXRhUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gIGNvbnN0IG1vbmRheURhdGFDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gIG1vbmRheURhdGFDZWxsLnRleHRDb250ZW50ID0gXCI5OjAwIEFNIC0gMTA6MDAgUE1cIjtcclxuICB0YWJsZURhdGFSb3cuYXBwZW5kQ2hpbGQobW9uZGF5RGF0YUNlbGwpO1xyXG4gIGNvbnN0IHR1ZXNkYXlEYXRhQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICB0dWVzZGF5RGF0YUNlbGwudGV4dENvbnRlbnQgPSBcIjk6MDAgQU0gLSAxMDowMCBQTVwiO1xyXG4gIHRhYmxlRGF0YVJvdy5hcHBlbmRDaGlsZCh0dWVzZGF5RGF0YUNlbGwpO1xyXG4gIGhvdXJzVGFibGUuYXBwZW5kQ2hpbGQodGFibGVEYXRhUm93KTtcclxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1RpdGxlKTtcclxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1RhYmxlKTtcclxuICBob21lLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChoaXN0b3J5KTtcclxuICBob21lLmFwcGVuZENoaWxkKGJyYW5jaGVzKTtcclxuICBob21lLmFwcGVuZENoaWxkKGhvdXJzKTtcclxuICByZXR1cm4gaG9tZTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9