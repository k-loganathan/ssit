// console.log("hello World");
const h1 = document.querySelector(".heading-primary");
console.log(h1);

///////////////////////////////////////////////////////////
// Set current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////

// Make Mobile Navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scroling Animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    // const href = link.getAttribute("href");

    // Scroll back to top
    // if (href === "index.html")
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });

    // Scroll to other links
    // if (href !== "#" && href.startsWith("#")) {
    //   const sectionEl = document.querySelector(href);
    //   sectionEl.scrollIntoView({ behavior: "smooth" });
    // }

    // close Mobile Navigation

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/

// OPEN FORM AND CLOSE FORM

function openForm() {
  document.getElementById("enquiry-form").style.display = "block";
}

function closeForm() {
  document.getElementById("enquiry-form").style.display = "none";
}

function opentqpopup() {
  document.getElementById("enquiry-form").style.display = "none";
}
// ***

function opentqpopup() {
  // Display the popup
  document.getElementById("thankyou-popup").style.display = "block";
  // document
  //   .getElementById("thankyou-popup-show")
  //   .classList.add("thankyou-popup-show");
  // Prevent the form from submitting (optional)
  return false;
}

// ***

// function opentqpopup() {
//   document.getElementById("thankyou-popup").style.display = "block";
// }

function closeTq() {
  document.getElementById("enquiry-form").style.display = "none";
  document.getElementById("thankyou-popup").style.display = "none";
}

function closeTqp() {
  document.getElementById("thankyou-popup").style.display = "none";
}

// **************
// form

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwJhyDMsv-B8ALbrw7XbsBqcYfY8CTIiz1uMOgvuRLAzskQGevqfMAZeg_PD4BxoSwYLw/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    // .then((response) =>
    //   alert("Thank you! your form is submitted successfully.")
    // )
    // .then(() => {
    //   window.location.reload();
    // })
    .catch((error) => console.error("Error!", error.message));
});

const pageForm = document.forms["page-contact-form"];

pageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(pageForm) })
    // .then((response) =>
    //   alert("Thank you! your form is submitted successfully.")
    // )
    // .then(() => {
    //   window.location.reload();
    // })
    .catch((error) => console.error("Error!", error.message));
});

// **************
// Pop Up

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".popup").style.display = "block";
  }, 10000);
});

// **************
// Hero Video

var playButton = document.getElementById("play_button");
// Event listener for the play/pause button
playButton.addEventListener("click", function () {
  if (video.paused == true) {
    // Play the video
    video.play();

    document.getElementById("play_button").classList.add("hide-play-btn");

    // Update the button text to 'Pause'
    playButton.innerHTML = `<i class="bi bi-pause-circle"></i>`;
  } else {
    // Pause the video
    video.pause();

    document.getElementById("play_button").classList.remove("hide-play-btn");

    // Update the button text to 'Play'
    playButton.innerHTML = `<i class="bi bi-play-circle-fill"></i>`;
  }
});
