import React from "react";
import { useParallax } from "react-scroll-parallax";

const Resume = () => {
  const parallax = useParallax({
    easing: "easeOutQuad",
    translateY: [50, 0],
    opacity: [0.2, 1.2],
  });
  return (
    <section
      ref={parallax.ref}
      class="ftco-section ftco-no-pb"
      id="resume-section"
    >
      <div class="container">
        <div class="row justify-content-center pb-5">
          <div class="col-md-10 heading-section text-center ftco-animate">
            <h1 class="big big-2">Resume</h1>
            <h2 class="mb-4">Resume</h2>
            <p>
              As a skilled and motivated developer with 2+ years of experience,
              my objective is to create visually stunning and highly functional
              code that captivate users and deliver exceptional results for
              clients. I aim to leverage my expertise in MERN to create
              innovative and user-centric web solutions that meet client
              objectives and exceed user expectations. I am committed to
              continuous learning, staying up-to-date with the latest industry
              trends, and delivering projects on time and within budget.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="resume-wrap ftco-animate">
              <span class="date">2017 - 2021</span>
              <h2>B.Tech in Computer Engineering</h2>
              <span class="position">
                Bhagwan Arihant Institute Of Technology
              </span>
              <p class="mt-4">
                An information technology bachelor's degree develops targeted
                skills in network design, network administration, and
                programming. Many programs also emphasize IT theory and its
                practical applications, along with cybersecurity and information
                security concepts.
              </p>
            </div>

            <div class="resume-wrap ftco-animate">
              <span class="date">2022 - Till Now</span>
              <h2>Full Stack Developer</h2>
              <span class="position">Globalia Soft LLP</span>
              <p class="mt-4">
                A full-stack developer is a developer or engineer who can build
                both the front end and the back end of a website. The front end
                (the parts of a website a user sees and interacts with) and the
                back end (the behind-the-scenes data storage and processing)
                require different skill sets.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="resume-wrap ftco-animate">
              <span class="date">2021 - 2022</span>
              <h2>React JS Developer</h2>
              <span class="position">Globalia Soft LLP</span>
              <p class="mt-4">
                React is a JavaScript library for building user interfaces (UIs)
                and UI components. What is a React developer? React developers
                are software professionals who work with React to build UIs. By
                association, React developers are also front-end developers as
                well as JavaScript developers.
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-md-6 text-center ftco-animate">
            <p>
              <a
                href="/resume.pdf"
                download="Om-Resume"
                class="btn btn-primary py-4 px-5"
              >
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
