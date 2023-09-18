export default () => {
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
};