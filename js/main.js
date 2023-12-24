/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== DAY COUNTER FOR CHRISTMAS ===============*/
const titleData = document.getElementById("title"),
  numberData = document.getElementById("number-data"),
  textData = document.getElementById("text-data"),
  msgChristmas = document.getElementById("msg-christmas");

const christmasCountdown = () => {
  let now = new Date(), // Get today's date
    currentMonth = now.getMonth() + 1, // Get the current month
    currentDay = now.getDate(); // Get the current day of the month.

  let nextChristmasYear = now.getFullYear();
  if (currentMonth == 12 && currentDay > 25) {
    nextChristmasYear += 1;
  }

  let newChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`,
    christmasDay = new Date(newChristmasDate),
    timeLeft = christmasDay - now;

  let day = 0,
    hour = 0,
    minute = 0,
    second = 0;

  // Don't calculate the time left if it is Christmas day
  if (currentMonth != 12 || (currentMonth == 12 && currentDay != 25)) {
    day = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    hour = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    minute = Math.floor(timeLeft / 1000 / 60) % 60;
    second = Math.floor(timeLeft / 1000) % 60;
  }

  // Show missing days
  numberData.innerHTML = day < 10 ? `0${day}` : day;
  textData.innerHTML = "Days";

  // Show missing Hours.
  if (currentDay == 24) {
    numberData.innerHTML = hour < 10 ? `0${hour}` : hour;
    textData.innerHTML = "Hours";
  }

  // Show missing minutes. Countdown, 0 hours left, show minutes (00:59)
  if (currentDay == 24 && hour === 0) {
    numberData.innerHTML = minute < 10 ? `0${minute}` : minute;
    textData.innerHTML = "Minutes";
  }

  // Show missing seconds. Countdown, 0 hours & 0 minutes left, show seconds (00:00:59)
  if (currentDay == 24 && hour === 0 && minute === 0) {
    numberData.innerHTML = second < 10 ? `0${second}` : second;
    textData.innerHTML = "Seconds";
  }

  // Show message on Christmas Day
  if (currentMonth == 12 && currentDay == 25) {
    titleData.style.display = "none";
    msgChristmas.style.display = "block";
    msgChristmas.innerHTML = "Today is 25th Dec, Marry Christmas";
  }

  // Show remaining days & remove Christmas message
  if (currentMonth == 12 && currentDay == 26) {
    titleData.style.display = "block";
    msgChristmas.style.display = "none";
  }
};

setInterval(christmasCountdown, 1000);
