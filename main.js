document.addEventListener("DOMContentLoaded", function () {
  // ********** Navigation buttons event listeners - Exchange tables **********
  const exchangeSlider = document.querySelector(
    ".main-tables-container--slider"
  );
  const exchangeSlides = document.querySelectorAll(".exchange-slide");
  let currentExchangeSlide = 0;
  let exchangeStartX, exchangeEndX;

  function showExchangeSlide(n) {
    exchangeSlides.forEach((slide) => slide.classList.remove("active"));
    exchangeSlides[n].classList.add("active");
  }

  function navigateExchangeSlides(direction) {
    currentExchangeSlide += direction;
    currentExchangeSlide = Math.min(
      Math.max(currentExchangeSlide, 0),
      exchangeSlides.length - 1
    );
    showExchangeSlide(currentExchangeSlide);
  }

  exchangeSlider.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("prev")) {
      navigateExchangeSlides(-1);
    } else if (target.classList.contains("next")) {
      navigateExchangeSlides(1);
    }
  });

  // Touch gestures event listeners - Exchange tables
  exchangeSlider.addEventListener("touchstart", function (e) {
    if (window.innerWidth < 930) {
      exchangeStartX = e.touches[0].clientX;
    }
  });

  exchangeSlider.addEventListener("touchmove", function (e) {
    if (window.innerWidth < 930) {
      exchangeEndX = e.touches[0].clientX;
    }
  });

  exchangeSlider.addEventListener("touchend", function () {
    if (window.innerWidth < 930) {
      const deltaX = exchangeStartX - exchangeEndX;
      const minDeltaX = 50; // Threshold to determine a valid gesture

      if (Math.abs(deltaX) > minDeltaX) {
        if (deltaX > 0) {
          navigateExchangeSlides(1);
        } else {
          navigateExchangeSlides(-1);
        }
      }
    }
  });

  showExchangeSlide(currentExchangeSlide);

  // ********** Navigation buttons event listeners - Plans **********
  const plansSlider = document.querySelector(".plans-container--slider");
  const plansSlides = document.querySelectorAll(".plan-slide");
  let currentPlanSlide = 1;
  let plansStartX, plansEndX;

  function showPlanSlide(n) {
    plansSlides.forEach((slide) => slide.classList.remove("active"));
    plansSlides[n].classList.add("active");

    // Hide prev button
    document.querySelector(".plans-container--slider .prev").style.display =
      n === 0 && window.innerWidth < 930 ? "none" : "inline-block";

    // Hide next button
    document.querySelector(".plans-container--slider .next").style.display =
      n === plansSlides.length - 1 && window.innerWidth < 930
        ? "none"
        : "inline-block";
  }

  function navigatePlanSlides(direction) {
    currentPlanSlide += direction;
    currentPlanSlide = Math.min(
      Math.max(currentPlanSlide, 0),
      plansSlides.length - 1
    );
    showPlanSlide(currentPlanSlide);
  }

  plansSlider.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("prev")) {
      navigatePlanSlides(-1);
    } else if (target.classList.contains("next")) {
      navigatePlanSlides(1);
    }
  });
  // Touch gestures event listeners - Exchange tables
  plansSlider.addEventListener("touchstart", function (e) {
    if (window.innerWidth < 930) {
      plansStartX = e.touches[0].clientX;
    }
  });

  plansSlider.addEventListener("touchmove", function (e) {
    if (window.innerWidth < 930) {
      plansEndX = e.touches[0].clientX;
    }
  });

  plansSlider.addEventListener("touchend", function () {
    if (window.innerWidth < 930) {
      const deltaX = plansStartX - plansEndX;
      const minDeltaX = 50; // Threshold to determine a valid gesture

      if (Math.abs(deltaX) > minDeltaX) {
        if (deltaX > 0) {
          navigatePlanSlides(1);
        } else {
          navigatePlanSlides(-1);
        }
      }
    }
  });

  showPlanSlide(currentPlanSlide);
});
