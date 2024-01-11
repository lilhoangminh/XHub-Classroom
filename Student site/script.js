document.addEventListener("DOMContentLoaded", function () {
  // Navbar Smoother
  const nalItems = document.querySelectorAll(".nal-item");
  const borderSlider = document.querySelector(".border-slider");
  let activeItem = document.querySelector(".nal-item.selected");

  function moveSlider() {
    const { left } = nalItems[0].getBoundingClientRect();
    const { left: selectedLeft, width } = activeItem.getBoundingClientRect();

    borderSlider.style.width = `${width}px`;
    borderSlider.style.transform = `translateX(${selectedLeft - left}px)`;
  }

  function toggleClasses(item) {
    nalItems.forEach((otherItem) =>
      otherItem.classList.remove("selected", "heavy")
    );
    item.classList.add("selected", "heavy");
    activeItem = item;
  }

  nalItems.forEach((item) =>
    item.addEventListener("click", () => {
      toggleClasses(item);
      moveSlider();
    })
  );

  window.addEventListener("scroll", function () {
    nalItems.forEach((item) => {
      const sectionId = item.getAttribute("href").substring(1);
      const targetSection = document.getElementById(sectionId);

      if (isInViewport(targetSection)) {
        toggleClasses(item);
        moveSlider();
      }
    });
  });
});


// Left side menu (isactive)
document.addEventListener("DOMContentLoaded", function () {
  var menuSelected = document.querySelectorAll(".object");

  // change element color
  menuSelected.forEach(function (item) {
    item.addEventListener("click", function () {
      menuSelected.forEach(function (otherItem) {
        otherItem.classList.remove("left-menu-selected");
      });
      item.classList.add("left-menu-selected");
      activeItem = item;
    });
  });
});


// Show profile dialog box
