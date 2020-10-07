window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".burger").addEventListener("click", function () {
    document.querySelector(".menu").classList.add("menu-visible");
  });
  document.querySelector(".menu__close").addEventListener("click", function () {
    document.querySelector(".menu").classList.remove("menu-visible");
  });

  new Swiper(".swiper-container", {
    slidesPerView: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".paginator",
      type: "bullets",
      bulletClass: "paginator-item",
      bulletActiveClass: "paginator-item-active",
      clickable: true,
    },
    controller: {
      inverse: true,
    },
  });

  $(".question__list__btn").click(function () {
    const parent = $(this).parent();
    if (parent.hasClass("list-item--active")) {
      parent.removeClass("list-item--active");
    } else {
      $(".question__list li").removeClass("list-item--active");
      parent.addClass("list-item--active");
    }
  });
});
