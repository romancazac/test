//timer
// Set the date we're counting down to
var countDownDate = new Date("dec 09, 2020 9:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function () {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "   " + hours + " : " +
    minutes + " : " + seconds + " ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//slider
const slider = new Swiper('.slider', {
  navigation: {
    nextEl: '.button-prev',
    prevEl: '.button-next',
  },
});


var slider1 = new Swiper('.slider1', {
  speed: 600,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//popup

const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const popupClose = document.querySelector('.popup__close');
const modals = document.querySelectorAll('.modal');
const body = document.body;
const fixBlocks = document.querySelectorAll('.fix-block');

let disableScroll = function () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
	let pagePosition = window.scrollY;
  fixBlocks.forEach((el) => {
		el.style.paddingRight = paddingOffset;
	});
	body.style.paddingRight = paddingOffset;
	body.classList.add('disable-scroll');
	body.dataset.position = pagePosition;
	body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	body.style.top = 'auto';
	body.classList.remove('disable-scroll');
  fixBlocks.forEach((el) => {
		el.style.paddingRight = '0px';
	});
	body.style.paddingRight = '0px';
	window.scroll({top: pagePosition, left: 0});
	body.removeAttribute('data-position');
}

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    
    disableScroll();
    
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
   
    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  
  enableScroll();
  
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  }
});
popupClose.addEventListener('click', (e) => {
  
  enableScroll();
  
  
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
    
 
});
