    document.addEventListener('DOMContentLoaded', function() {
    // JavaScript to apply tilt effect on hover
    document.querySelector('.tilt-container').addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const tiltX = (y / rect.height - 1) * 20; // Adjust the tilt range
      const tiltY = (x / rect.width - 1) * 20; // Adjust the tilt range
      this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    // Reset the tilt on mouse leave
    document.querySelector('.tilt-container').addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  });


  function myFunction() {
    alert("Still under processing!");
  }

// function background1() {
//   document.querySelector('img-selector').style.left.img-prod img = "url(img/prod1.png)";
// }

function changeImage(fileName){
  let displayImage = document.querySelector("#image1");

  displayImage.setAttribute("src", fileName);

  // if(displayImage.src.match('img/prod1.png')){
  //   displayImage.src ='img/prod2.png'
  // }
  // else
  // displayImage.src ='img/prod2.png'
}

// document.addEventListener("DOMContentLoaded", function () {
//   const cardSlider = document.querySelector(".card-slider");
//   let currentIndex = 0;

//   function showCard(index) {
//       const cardWidth = document.querySelector(".card").offsetWidth;
//       cardSlider.style.transform = `translateX(${-index * cardWidth}px)`;
//   }

//   function nextCard() {
//       currentIndex = (currentIndex + 1) % 3; // Assuming 3 cards, adjust as needed
//       showCard(currentIndex);
//   }

//   function prevCard() {
//       currentIndex = (currentIndex - 1 + 3) % 3; // Assuming 3 cards, adjust as needed
//       showCard(currentIndex);
//   }

//   document.querySelector(".slider-container").addEventListener("swiped-left", nextCard);
//   document.querySelector(".slider-container").addEventListener("swiped-right", prevCard);

//   // You can also add buttons or other navigation controls to trigger nextCard and prevCard functions.
// });

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });



  // let sections = document.querySelectorAll('section');

  // window.onscroll = () => {

  //   sections.forEach(sec => {

  //     let top = window.scrollY;
  //     let offset = sec.offsetTop;
  //     let height = sec.offsetHeight;



  //     if(top >= offset && top <= offset + height) {
  //       sec.classList.add('show-animate');
  //     }
  //     else {
  //       sec.classList.remove('show-animate');
  //     }
  //   })
  // }