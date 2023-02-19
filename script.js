// mobile nav
const navContainer = document.getElementById('mobile-nav-container');
const navBtn = document.getElementById('mobile-nav-plus');
const body = document.querySelector('body');
var navOpen = false;

function navToggle() {
  if(navOpen) {
    navBtn.classList.remove('open');
    navBtn.classList.add('close');
    navContainer.style.display = 'none';
    body.style.overflow = 'visible';
    navOpen = false;
    
  } else {
    navBtn.classList.add('open');
    navBtn.classList.remove('close');
    navContainer.style.display = 'block';
    body.style.overflow = 'hidden';
    navOpen = true;
  }
}

// lineup page
const day1Btn = document.getElementById('day1-tab');
const day2Btn = document.getElementById('day2-tab');
const lineupContainer = document.getElementById('lineup-container');

day1Btn.addEventListener('click', () => {
  lineupContainer.style.backgroundImage = 'linear-gradient(to bottom right, rgba(255, 103, 0, 0.3), rgba(79, 13, 114, 0.4))';
  day1Btn.classList.remove('bg-primary');
  day1Btn.classList.remove('border-bottom');
  day1Btn.classList.add('bg-transparent');

  day2Btn.classList.add('bg-primary');
  day2Btn.classList.add('border-bottom');
  day2Btn.classList.remove('bg-transparent');
})

day2Btn.addEventListener('click', () => {
  lineupContainer.style.backgroundImage = 'linear-gradient(to bottom left, rgba(79, 13, 114, 0.3), rgba(255, 103, 0, 0.4))';
  day2Btn.classList.remove('bg-primary');
  day2Btn.classList.remove('border-bottom');
  day2Btn.classList.add('bg-transparent');

  day1Btn.classList.add('bg-primary');
  day1Btn.classList.add('border-bottom');
  day1Btn.classList.remove('bg-transparent');
})


// Accordion Expand All and Collapse All
function expandAll(Btn) {
  var target = Btn.dataset.target;
  var itemList = document.getElementById(target).children;

  if(Btn.dataset.expanded == 'false') {
    for(var item = 0; item < itemList.length; item ++) {
     // collapse content classes
      itemList[item].children[1].classList.add('show');
      // button classes
      itemList[item].children[0].children[0].classList.remove('collapsed');
      itemList[item].children[0].children[0].ariaExpanded = true;
    };
    Btn.innerHTML = "Collapse All"
    Btn.setAttribute('data-expanded', 'true');
  } else {
    for(var item = 0; item < itemList.length; item ++) {
      // collapse content classes
      itemList[item].children[1].classList.remove('show');
      // button classes
      itemList[item].children[0].children[0].classList.add('collapsed');
      itemList[item].children[0].children[0].ariaExpanded = false;
    };
    Btn.innerHTML = "Expand All"
    Btn.setAttribute('data-expanded', 'false');
  }
}

// desktop navbar intersection observer
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach
  console.log(entries);
})

observer.observe(sections[0])

// build a countdown timer
function countdownTimer(targetDate) {
  var now = new Date();
  var distance = targetDate - now;
  if (distance < 0) {
    return {
        'days': 0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0
    };
  }
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// set content of the countdown timer in html
function setCountdownTimer(targetDate) {
    var timer = countdownTimer(targetDate);
    document.getElementById('days').innerHTML = String(timer.days).padStart(2, '0');
    document.getElementById('hours').innerHTML = String(timer.hours).padStart(2, '0')
    document.getElementById('minutes').innerHTML = String(timer.minutes).padStart(2, '0');
    document.getElementById('seconds').innerHTML = String(timer.seconds).padStart(2, '0');
}

// set the target date
var targetDate = new Date('March 3, 2023 00:00:00').getTime();

// update the countdown every 1 second
setInterval(function() {
  setCountdownTimer(targetDate);
}, 1000);