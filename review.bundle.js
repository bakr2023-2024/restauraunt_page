"use strict";
(self["webpackChunkrestauraunt_page"] = self["webpackChunkrestauraunt_page"] || []).push([["review"],{

/***/ "./src/review.js":
/*!***********************!*\
  !*** ./src/review.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const review = document.createElement("div");
  review.classList.add("module");
  review.setAttribute("id", "review");

  const reviewTitle = document.createElement("h1");
  reviewTitle.classList.add("title");
  reviewTitle.textContent = "Customer Reviews";

  const reviewList = document.createElement("ul");

  const review1 = document.createElement("li");
  const comment1 = document.createElement("span");
  comment1.classList.add("comment");
  comment1.textContent =
    "The food was delicious and the service was excellent. I highly recommend this place!";
  review1.appendChild(comment1);

  const review2 = document.createElement("li");
  const comment2 = document.createElement("span");
  comment2.classList.add("comment");
  comment2.textContent = "Another review comment";
  review2.appendChild(comment2);

  const review3 = document.createElement("li");
  const comment3 = document.createElement("span");
  comment3.classList.add("comment");
  comment3.textContent = "Yet another review comment";
  review3.appendChild(comment3);

  reviewList.appendChild(review1);
  reviewList.appendChild(review2);
  reviewList.appendChild(review3);

  review.appendChild(reviewTitle);
  review.appendChild(reviewList);

  return review;
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/review.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYXVudC1wYWdlLy4vc3JjL3Jldmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXZpZXcuY2xhc3NMaXN0LmFkZChcIm1vZHVsZVwiKTtcclxuICByZXZpZXcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXZpZXdcIik7XHJcblxyXG4gIGNvbnN0IHJldmlld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHJldmlld1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICByZXZpZXdUaXRsZS50ZXh0Q29udGVudCA9IFwiQ3VzdG9tZXIgUmV2aWV3c1wiO1xyXG5cclxuICBjb25zdCByZXZpZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICBjb25zdCByZXZpZXcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnN0IGNvbW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29tbWVudDEuY2xhc3NMaXN0LmFkZChcImNvbW1lbnRcIik7XHJcbiAgY29tbWVudDEudGV4dENvbnRlbnQgPVxyXG4gICAgXCJUaGUgZm9vZCB3YXMgZGVsaWNpb3VzIGFuZCB0aGUgc2VydmljZSB3YXMgZXhjZWxsZW50LiBJIGhpZ2hseSByZWNvbW1lbmQgdGhpcyBwbGFjZSFcIjtcclxuICByZXZpZXcxLmFwcGVuZENoaWxkKGNvbW1lbnQxKTtcclxuXHJcbiAgY29uc3QgcmV2aWV3MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBjb21tZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNvbW1lbnQyLmNsYXNzTGlzdC5hZGQoXCJjb21tZW50XCIpO1xyXG4gIGNvbW1lbnQyLnRleHRDb250ZW50ID0gXCJBbm90aGVyIHJldmlldyBjb21tZW50XCI7XHJcbiAgcmV2aWV3Mi5hcHBlbmRDaGlsZChjb21tZW50Mik7XHJcblxyXG4gIGNvbnN0IHJldmlldzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgY29uc3QgY29tbWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjb21tZW50My5jbGFzc0xpc3QuYWRkKFwiY29tbWVudFwiKTtcclxuICBjb21tZW50My50ZXh0Q29udGVudCA9IFwiWWV0IGFub3RoZXIgcmV2aWV3IGNvbW1lbnRcIjtcclxuICByZXZpZXczLmFwcGVuZENoaWxkKGNvbW1lbnQzKTtcclxuXHJcbiAgcmV2aWV3TGlzdC5hcHBlbmRDaGlsZChyZXZpZXcxKTtcclxuICByZXZpZXdMaXN0LmFwcGVuZENoaWxkKHJldmlldzIpO1xyXG4gIHJldmlld0xpc3QuYXBwZW5kQ2hpbGQocmV2aWV3Myk7XHJcblxyXG4gIHJldmlldy5hcHBlbmRDaGlsZChyZXZpZXdUaXRsZSk7XHJcbiAgcmV2aWV3LmFwcGVuZENoaWxkKHJldmlld0xpc3QpO1xyXG5cclxuICByZXR1cm4gcmV2aWV3O1xyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==