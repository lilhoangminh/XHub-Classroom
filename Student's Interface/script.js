// render navbar
document.addEventListener('DOMContentLoaded', function () {
    var nalItems = document.querySelectorAll('.nal-item');
    var borderSlider = document.querySelector('.border-slider');
    var activeItem = document.querySelector('.nal-item.selected');

    function moveSlider() {
        var selectedRect = activeItem.getBoundingClientRect();
        var sliderOffset = selectedRect.left - nalItems[0].getBoundingClientRect().left;

        borderSlider.style.width = selectedRect.width + 'px';
        borderSlider.style.transform = 'translateX(' + sliderOffset + 'px)';
    }

    nalItems.forEach(function (item) {
        item.addEventListener('click', function () {
            nalItems.forEach(function (otherItem) {
                otherItem.classList.remove('selected');
            });

            item.classList.add('selected');
            activeItem = item;

            moveSlider();
        });
    });
    moveSlider();
});