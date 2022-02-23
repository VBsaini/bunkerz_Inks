var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});
let animationDone = false;
function update() {
  var counters = document.querySelectorAll(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    var speed = 10;
    if (counters[id].classList.contains("big")) {
      speed = 2;
    }
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, speed);
  };

  for (j = 0; j < countersQuantity; j++) {
    if (counters[j].classList.contains("big")) {
      count(600, counter[j], j);
    } else {
      count(0, counter[j], j);
    }
  }
}
let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!animationDone && entry.isIntersecting) {
      update();
      animationDone = true;
    }
  });
};
let observer = new IntersectionObserver(callback, options);
let target = document.querySelectorAll(".count");
target.forEach((ele) => {
  observer.observe(ele);
});
