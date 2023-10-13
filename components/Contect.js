import React from "react";
import { useParallax } from "react-scroll-parallax";

const Contect = () => {
  const parallax = useParallax({
    easing: "easeOutQuad",
    translateY: [100, 0],
    opacity: [-1, 1],
  });
  return (
    <section
      class="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h1 ref={parallax.ref} class="big big-2">
              Contact
            </h1>
            <h2 class="mb-4">Contact Me</h2>
            {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p> */}
          </div>
        </div>

        <div class="row d-flex contact-info mb-5">
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
            <div class="align-self-stretch box p-4 text-center">
              <div class="icon d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  id="location"
                >
                  <path
                    fill="#ffbd39"
                    d="M32.12 52.61c.81 0 3.41-1.08 7.13-4.52 5.91-5.44 12.81-15 12.81-24a20.06 20.06 0 0 0-40.12 0c0 14.14 16.47 28.22 20.18 28.52ZM32 12.14a9.56 9.56 0 1 1-9.56 9.56A9.57 9.57 0 0 1 32 12.14Zm21.8 42.35c0 1.87-7.69 5.5-21.8 5.5s-21.8-3.63-21.8-5.5c0-1.25 3.6-3.57 11.62-4.77a1.34 1.34 0 0 0 .4-.13c3.76 3.55 7.44 5.83 9.66 6h.28c3 0 7.37-3.69 9.13-5.31.22-.2.44-.42.66-.64a2 2 0 0 0 .23.06c8.02 1.22 11.62 3.54 11.62 4.79Z"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-4">Address</h3>
              <p>Surat, Gujarat, India</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-5 d-flex ftco-animate">
            <div class="align-self-stretch box p-4 text-center">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="icon-phone2"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="phone"
                >
                  <g data-name="Layer 2">
                    <g data-name="phone-call">
                      <path
                        fill="#ffbd39"
                        d="M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z"
                      ></path>
                      <path
                        fill="#ffbd39"
                        d="M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2zm8.75 11.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <h3 class="mb-4">Contact Number</h3>
              <p>
                <a href="tel://1234567920">+91 63533-42686</a>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
            <div class="align-self-stretch box p-4 text-center">
              <div class="icon d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 96"
                  id="email"
                >
                  <path
                    fill="#ffbd39"
                    d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"
                    data-name="Layer 2"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-4">Email Address</h3>
              <p>
                <a href="mailto:info@yoursite.com">omdavrab@gmail.com</a>
              </p>
            </div>
          </div>
          {/* <div class="col-md-6 col-lg-3 d-flex ftco-animate">
            <div class="align-self-stretch box p-4 text-center">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="icon-globe"></span>
              </div>
              <h3 class="mb-4">Website</h3>
              <p><a href="#">yoursite.com</a></p>
            </div>
          </div> */}
        </div>

        <div class="row no-gutters block-9">
          <div class="col-md-6 order-md-last d-flex">
            <form action="#" class="bg-light p-4 p-md-5 contact-form">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Subject" />
              </div>
              <div class="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  class="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  value="Send Message"
                  class="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>

          <div class="col-md-6 d-flex">
            <div
              class="img"
              style={{ backgroundImage: "url(./assets/images/about.jpg)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contect;
