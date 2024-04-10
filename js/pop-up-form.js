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
              <input type="submit" onclick="opentqpopup()" />
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
    <section class="thankyou-popup">
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
