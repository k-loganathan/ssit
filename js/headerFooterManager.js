class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="header" id="home">
      <a href="index.html">
        <img src="img/SSIT-Logo.png" alt="SSIT logo" class="logo" />
      </a>
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li><a class="main-nav-link" href="index.html">Home</a></li>

          <li class="mobile-nav-course">
            <a class="main-nav-link" href="course-list.html">Courses</a>
          </li>
          <li class="disk-course-dropdown">
            <div class="course-dropdown">
              <button class="course-dropdown-btn main-nav-link">
                Courses <i class="bi bi-chevron-down dropdown-icon"></i>
              </button>
              <div class="dropdown-contain">
                <div class="course-dropdown-cont">
                  <img
                    class="star-svg"
                    src="img/star-icon.svg"
                    alt="star svg icon"
                  />
                  <a href="FSD-page.html" class="course-dropdown-fullsta main-nav-link"
                    >Advanced Engineering Full Stack Development</a
                  >
                </div>
                <div class="course-dropdown-cont">
                  <img
                    class="star-svg"
                    src="img/star-icon.svg"
                    alt="star svg icon"
                  />
                  <a href="JFS-page.html" class="course-dropdown-fullsta main-nav-link"
                    >Java Full Stack Development</a
                  >
                </div>
                <div class="course-dropdown-cont">
                  <img
                    class="star-svg"
                    src="img/star-icon.svg"
                    alt="star svg icon"
                  />
                  <a href="PFS-page.html" class="course-dropdown-fullsta main-nav-link"
                    >Python Full Stack Development</a
                  >
                </div>
                <div class="course-dropdown-cont">
                  <img
                    class="star-svg"
                    src="img/star-icon.svg"
                    alt="star svg icon"
                  />
                  <a href="MS-page.html" class="course-dropdown-fullsta main-nav-link"
                    >Mern Stack Development</a
                  >
                </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a class="main-nav-link" href="index.html#testimonials">Testimonials</a>
          </li>
          <li><a class="main-nav-link" href="FAQ.html">FAQ</a></li>
          <li>
            <button onclick="openForm()" class="main-nav-link nav-cta">
              Enquire Now
            </button>
          </li>
        </ul>
      </nav>

      <button class="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>`;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footer">
    <div class="container footer-grid">
      <div class="logo-col">
        <a href="index.html" class="footer-logo">
          <img class="logo" alt="Omnifood logo" src="img/SSIT-Logo-light.png" />
        </a>

        <ul class="social-links">
          <li>
            <a
              class="footer-link"
              href="https://www.instagram.com/statestreetitofficial"
              ><ion-icon
                class="social-icon"
                name="logo-instagram"
              ></ion-icon
            ></a>
          </li>
          <li>
            <a class="footer-link" href="#"
              ><ion-icon class="social-icon" name="logo-facebook"></ion-icon
            ></a>
          </li>
          <li>
            <a
              class="footer-link"
              href="https://www.linkedin.com/in/state-street-it-978a252a4/"
              ><ion-icon class="social-icon" name="logo-linkedin"></ion-icon
            ></a>
          </li>
        </ul>
      </div>

      <div class="address-col">
        <p class="footer-heading">Contact us</p>
        <address class="contacts">
          <p class="address">
            State Street IT, Ticel Park,Anna University Campus,Vadavalli,
            Coimbatore - 641 046.
          </p>
          <p>
            <a class="footer-link" href="tel:+91 63808 12149"
              >+91 63808 12149</a
            ><br />
            <a class="footer-link" href="mailto:enquiry@statestreetit.com"
              >enquiry@statestreetit.com</a
            >
          </p>
        </address>
      </div>

      <nav class="nav-col">
        <p class="footer-heading">Company</p>
        <ul class="footer-nav">
          <li><a class="footer-link" href="#">About State Street IT</a></li>
          <li><a class="footer-link" href="#">Courses</a></li>
          <li><a class="footer-link" href="#">Placement Companies</a></li>
          <li><a class="footer-link" href="#">Help center</a></li>
          <li><a class="footer-link" href="#">Privacy & terms</a></li>
        </ul>
      </nav>

      <nav class="nav-col map-loc">
        <p class="footer-heading">Map Location</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1384.5068712706836!2d76.8848091653381!3d11.040366992213851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f7808126e0d%3A0x2f4473b48153dc84!2sTICEL%20BIO%20PARK%20LTD%20Phase%20-%20III!5e0!3m2!1sen!2sin!4v1702455751810!5m2!1sen!2sin"
          class="google-map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </nav>
    </div>
    <p class="copyright">
      Copyright &copy; <span class="year">2027</span> by State Street IT,
      Inc. All rights reserved.
    </p>
  </footer>
  `;
  }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);

class EnquiryPopUpForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="blur popup" id="enquiry-form">
    <section class="enquiry-form-section">
      <div class="enquiry-form-box">
        <button class="form-close-btn" onclick="closeForm()">
          <ion-icon class="close_form" name="close-outline"></ion-icon>
        </button>
        <div class="form-container">
          <h2 class="subheading-2">Book a Free Demo Class!</h2>
          <form
            method="post"
            action=""
            name="contact-form"
            class="enquiry-form"
            onsubmit="opentqpopup()"
          >
            <div>
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                class="form-el"
                required
              />
            </div>
            <div>
              <label for="mobile">Mobile No</label>
              <input
                type="number"
                name="mobile"
                placeholder="Enter your Mobile No"
                class="form-el"
                s
                required
              />
            </div>
            <div>
              <label for="email">Email ID</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email ID"
                class="form-el"
                required
              />
            </div>
            <div>
              <label for="select_one">Describe Yourself</label>
              <select
                id="select_one"
                name="yourself"
                class="form-el"
                required
              >
                <option value="">Please Choose one Option:</option>
                <option value="Student">Student</option>
                <option value="Employee">Employee</option>
              </select>
            </div>

            <div>
              <input type="submit" />
            </div>
          </form>
        </div>

        <div class="enquiry-img-box">
          <img
            src="img/enquiry-img.png"
            alt="enquiry vector image"
            class="enquiry-img"
          />
        </div>
      </div>
    </section>
  </div>

  <div class="blur popup thankyou-contain" id="thankyou-popup">
    <section class="thankyou-popup" id="thankyou-popup-show">
      <h2 class="heading-tertiary thankyou-text">Thank You!</h2>
      <p class="enquiry-description">
        Your details has been successfully submitted!
      </p>
      <button type="button" onclick="closeTq()" class="btn thankyou-btn">
        OK
      </button>
    </section>
  </div>`;
  }
}

customElements.define("enquire-pop-up-form", EnquiryPopUpForm);
