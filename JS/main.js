let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 120 );
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});

const targetDate = new Date("2024-04-25");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date();
  const diffInMs = targetDate.getTime() - now.getTime();

  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

  daysElement.textContent = days;
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const sr = ScrollReveal (
  {
      distance: '10px',
      duration: 1750,
      delay: 150,
      reset: true,
  }
);

sr.reveal('.countdown',{origin: 'right'});
sr.reveal('.sales-top-box',{origin: 'top'});
sr.reveal('.categories-card',{origin: 'top'});
sr.reveal('.sales-proudcts',{origin: 'top'});
sr.reveal('.view-all',{origin: 'top'});
sr.reveal('.sbb',{origin: 'top'});
