import React from 'react'
import { useParallax } from 'react-scroll-parallax';

const About = () => {

	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [50, 0],
		opacity:[0 , 1]
	  });
	return (
		<section ref={parallax.ref} class="ftco-about img ftco-section ftco-no-pb" id="about-section">
			<div class="container">
				<div class="row d-flex">
					<div class="col-md-6 col-lg-5 d-flex">
						<div class="img-about img d-flex align-items-stretch">
							<div class="overlay"></div>
							<div class="img d-flex align-self-stretch align-items-center background-img-slider1" >
							</div>
						</div>
					</div>
					<div   class="col-md-6 col-lg-7 pl-lg-5 pb-5">
						<div class="row justify-content-start pb-3">
							<div class="col-md-12 heading-section ftco-animate">
								<h1 class="big">About</h1>
								<h2 class="mb-4">About Me</h2>
								<p>I am a highly skilled and motivated web developer with over 2+ years of experience in front-end and back-end development. I hold a Bachelor's degree in Computer Science from Gujarat University and have a strong foundation in HTML, CSS, JavaScript, React and Node.</p>
								<ul class="about-info mt-4 px-md-0 px-2">
									<li class="d-flex"><span>Name:</span> <span>Om Davra</span></li>
									<li class="d-flex"><span>Date of birth:</span> <span>January 01, 2001</span></li>
									<li class="d-flex"><span>Address:</span> <span>Surat, Gujarat, India</span></li>
									<li class="d-flex"><span>Zip code:</span> <span>395004</span></li>
									<li class="d-flex"><span>Email:</span> <span>omdavrab@gmail.com</span></li>
									<li class="d-flex"><span>Phone: </span> <span>+91 63533-42686</span></li>
								</ul>
							</div>
						</div>
						<div class="counter-wrap ftco-animate d-flex mt-md-3">
							<div class="text">
								<p class="mb-4">
									<span class="number" data-number="120">10</span>
									<span> Project completed</span>
								</p>
								<p><a href="/resume.pdf" download="Om-Resume" class="btn btn-primary py-3 px-3">Download CV</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About