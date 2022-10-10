(function () {
  class SlideShow {
    constructor(startIndex, element) {
      this.startIndex = startIndex;
      this.currentIndex = this.startIndex;
      this.element = element;
      this.slides = this.element.querySelectorAll('.design__slider-item');
      this.setActiveSlide();
      this.next();
      this.prev();
    }

    setActiveSlide() {
      this.slides.forEach((item, index) => {
        if (index === this.currentIndex) {
          item.classList.add('_slide-active');
        } else {
          item.classList.remove('_slide-active');
        }
      });
    }

    next() {
      let nextBtn = this.element.querySelector('.design__slider-nav_next');
      nextBtn.addEventListener('click', () => {
        if (this.currentIndex === this.slides.length - 1) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
        this.setActiveSlide();
      });
    }

    prev() {
      let prevBtn = this.element.querySelector('.design__slider-nav_prev');
      prevBtn.addEventListener('click', () => {
        if (this.currentIndex === 0) {
          this.currentIndex = this.slides.length - 1;
        } else {
          this.currentIndex--;
        }
        this.setActiveSlide();
      });
    }
  }

  let slideShow = document.querySelectorAll('.design__slider');

  slideShow.forEach((item) => {
    new SlideShow(0, item);
  });
})();
