import React, { useRef, useState } from 'react'
import { useCountUp } from 'react-countup';
import { useParallax } from 'react-scroll-parallax';

const Skills = () => {
  const parallax = useParallax({
    easing: 'easeOutQuad',
    translateY: [50, 0],
    opacity: [0.2, 1.2]
  });
  const [value , setValue] = useState()
  const countUpRef = useRef(null);
 
  useCountUp({ ref: countUpRef, end: 1234567 ,  enableScrollSpy: true,});

  return (
    <section ref={parallax.ref}  class="ftco-section" id="skills-section">
      <div class="container">
        <div class="row justify-content-center pb-5">
          <div class="col-md-12 heading-section text-center ftco-animate">
            <h1 class="big big-2">Skills</h1>
            <h2 class="mb-4">My Skills</h2>
            <p>Full-stack expertise in modern web development, including front-end and back-end technologies, databases, and server-side applications. Creating dynamic user interfaces, efficient data management, and scalable web applications with a comprehensive full-stack approach.</p>
          </div>
        </div>
       
        <div class="row">
          <div class="col-md-6 animate-box">
            <div class="progress-wrap ftco-animate">
              <h3>React JS</h3>
              <div class="progress">
                <div class="progress-bar color-1" role="progressbar" aria-valuenow="90"
                  aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 animate-box">
            <div class="progress-wrap ftco-animate">
              <h3>Next JS</h3>
              <div class="progress">
                <div class="progress-bar color-2" role="progressbar" aria-valuenow="85"
                  aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 animate-box">
            <div class="progress-wrap ftco-animate">
              <h3>TypeScript</h3>
              <div class="progress">
                <div class="progress-bar color-2" role="progressbar" aria-valuenow="85"
                  aria-valuemin="0" aria-valuemax="100" style={{ width: "30%" }}>
                  <span>30%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 animate-box">
            <div class="progress-wrap ftco-animate">
              <h3>Node JS</h3>
              <div class="progress">
                <div class="progress-bar color-3" role="progressbar" aria-valuenow="95"
                  aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}>
                  <span>65%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 animate-box">
            <div class="progress-wrap ftco-animate">
              <h3>MongoDB</h3>
              <div class="progress">
                <div class="progress-bar color-3" role="progressbar" aria-valuenow="95"
                  aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 animate-box">
            <div class="progress-wrap ftco-animate">
              <h3>Sequelize</h3>
              <div class="progress">
                <div class="progress-bar color-3" role="progressbar" aria-valuenow="95"
                  aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                  <span>50%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 animate-box">
            <div class="progress-wrap ftco-animate">
              <h3>HTML/CSS</h3>
              <div class="progress">
                <div class="progress-bar color-4" role="progressbar" aria-valuenow="90"
                  aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 animate-box">
            <div class="progress-wrap ftco-animate">
              <h3>Tailwind CSS</h3>
              <div class="progress">
                <div class="progress-bar color-5" role="progressbar" aria-valuenow="70"
                  aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                  <span>60%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 animate-box">
            <div class="progress-wrap ftco-animate">
              <h3>Material-UI</h3>
              <div class="progress">
                <div class="progress-bar color-5" role="progressbar" aria-valuenow="70"
                  aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                  <span>50%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 animate-box">
            <div class="progress-wrap ftco-animate">
              <h3>SEO</h3>
              <div class="progress">
                <div class="progress-bar color-6" role="progressbar" aria-valuenow="80"
                  aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills