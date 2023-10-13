import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useParallax } from "react-scroll-parallax";

const HireMe = () => {
  const parallax = useParallax({
    easing: "easeOutQuad",
    translateY: [100, 0],
  });

  return (
    <>
      <section
        ref={parallax.ref}
        class="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
        id="section-counter"
      >
        <div class="container">
          <div class="row d-md-flex align-items-center">
            <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div class="block-18">
                <div class="text">
                  {/* <CountUp isCounting end={10000000} duration={3.2} />
                   */}
                  <CountUp
                    duration="1"
                    className="number"
                    end={5}
                    enableScrollSpy
                  />

                  <span>Awards</span>
                </div>
              </div>
            </div>
            <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div class="block-18">
                <div class="text">
                  <CountUp
                    duration="1"
                    className="number"
                    end={22}
                    enableScrollSpy
                  />
                  <span>Completed Projects</span>
                </div>
              </div>
            </div>
            <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div class="block-18">
                <div class="text">
                  <CountUp
                    duration="1"
                    className="number"
                    end={15}
                    enableScrollSpy
                  />
                  <span>Happy Customers</span>
                </div>
              </div>
            </div>
            <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div class="block-18">
                <div class="text">
                  <CountUp
                    duration="1"
                    className="number"
                    end={120}
                    enableScrollSpy
                  />
                  <span>Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="ftco-section ftco-hireme img margin-top"
        style={{ backgroundImage: "url(./assets/images/bg_1.jpg)" }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7 ftco-animate text-center">
              <h2>
                I'm <span>Available</span> for freelancing
              </h2>
              {/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> */}
              <p class="mb-0 cursor-pointer">
                <Link
                  href="https://in.linkedin.com/in/om-davra-b4b34322b?challengeId=AQFcxDj-4RyphwAAAYsoWARF9dPsHhhHNRQ1WrmA8EfF-R1sxjKMxKUsya3Fk2sx8OLooWfTMq6Z3Tx46zeJS7qyBZBZl9zVtw&submissionId=6b54faf3-58a0-8d17-8873-e516edca093e&challengeSource=AgEujjm6FHjzRAAAAYsoWDpJ3Q6eFIHSvaffOMId8MAAchrudjb0ysY_RghLE3Q&challegeType=AgGWmHreSaPJVgAAAYsoWDpLzp7eqyCB9hNIhMhOovHLhj9i0VZpRto&memberId=AgEp86t3zkYh_AAAAYsoWDpO_AuLMW6AI19_3Dff1EgKWwg&recognizeDevice=AgEQ-jzwQ4pNlgAAAYsoWDpRrrpAhbntYCp4oocAtZL8BSZe5b2J"
                  target="_blank"
                  className="btn btn-primary py-3 px-5"
                >
                  Hire me
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HireMe;
