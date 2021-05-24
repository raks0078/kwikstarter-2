const carousel = document.querySelector(".grid-carousel");
const slides = carousel.querySelectorAll(".grid-carousel__item");
const leftButton = carousel.querySelector(".js-left");
const rightButton = carousel.querySelector(".js-right");

const getOrder = (elem) => {
  const styles = getComputedStyle(elem);
  const orderValue = styles.order;

  const order = parseInt(orderValue);
  return order;
};
const moveRight = (_) => {
  slides.forEach(function (slide) {
    order = getOrder(slide);

    // if (order == 2) {
    //   slide.style.order.add("featured");
    // } else {
    //   slide.style.order.remove("featured");
    // }

    if (order < slides.length) {
      slide.style.order = order += 1;
    } else {
      slide.style.order = 1;
    }
  });
};
const moveLeft = (_) => {
  slides.forEach(function (slide) {
    order = getOrder(slide);
    if (order > 1) {
      slide.style.order = order - 1;
    } else {
      slide.style.order = slides.length;
    }
  });
};

rightButton.addEventListener("click", (_) => {
  moveRight();
});

leftButton.addEventListener("click", (_) => {
  moveLeft();
});
