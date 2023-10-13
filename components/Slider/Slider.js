import React from 'react'
import 'animate.css';
var $ = require("jquery");
if (typeof window !== "undefined") {
	window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Link from 'next/link';
import { motion } from "framer-motion";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
	ssr: false,
});
const responsive = {
	0: {
		items: 1
	},
	600: {
		items: 1
	},
	1000: {
		items: 1
	}

}
const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible
};
const Slider = () => {


	return (
		<section id="home-section" className="hero">
			<OwlCarousel animateOut='fadeOut'
				 smartSpeed={5} autoplay={true} nav={false} className="home-slider  owl-carousel" responsive={responsive}>
				<div className="slider-item item">
					<div className="overlay"></div>
					<div className="container">
						<div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
							<div className="one-third js-fullheight order-md-last img background-img-slider1" >
								<div className="overlay"></div>
							</div>
							<div className="one-forth d-flex  align-items-center " data-scrollax=" properties: { translateY: '70%' }">
								<div className="text">
									<span className="subheading">Hello!</span>
									<h1 className="mb-4 mt-3">I'm <span>Om Davra</span></h1>
									<h2 className="mb-4">A Freelance Web Application Developer</h2>
									<p><Link href="https://in.linkedin.com/in/om-davra-b4b34322b?challengeId=AQFcxDj-4RyphwAAAYsoWARF9dPsHhhHNRQ1WrmA8EfF-R1sxjKMxKUsya3Fk2sx8OLooWfTMq6Z3Tx46zeJS7qyBZBZl9zVtw&submissionId=6b54faf3-58a0-8d17-8873-e516edca093e&challengeSource=AgEujjm6FHjzRAAAAYsoWDpJ3Q6eFIHSvaffOMId8MAAchrudjb0ysY_RghLE3Q&challegeType=AgGWmHreSaPJVgAAAYsoWDpLzp7eqyCB9hNIhMhOovHLhj9i0VZpRto&memberId=AgEp86t3zkYh_AAAAYsoWDpO_AuLMW6AI19_3Dff1EgKWwg&recognizeDevice=AgEQ-jzwQ4pNlgAAAYsoWDpRrrpAhbntYCp4oocAtZL8BSZe5b2J" target="_blank" className="btn btn-primary py-3 px-4">Hire me</Link> <Link href="#projects-section" className="btn btn-white btn-outline-white py-3 px-4">My works</Link></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="slider-item  item">
					<div className="overlay"></div>
					<div className="container">
						<div className="row d-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
							<div className="one-third js-fullheight order-md-last img background-img-slider1" >
								<div className="overlay"></div>
							</div>
							<div className="one-forth d-flex align-items-center " data-scrollax=" properties: { translateY: '70%' }">
								<div className="text">
									<span className="subheading">Hello!</span>
									<h1 className="mb-4 mt-3">I'm a <span>web developer</span> based in India</h1>
									<p><Link href="https://in.linkedin.com/in/om-davra-b4b34322b?challengeId=AQFcxDj-4RyphwAAAYsoWARF9dPsHhhHNRQ1WrmA8EfF-R1sxjKMxKUsya3Fk2sx8OLooWfTMq6Z3Tx46zeJS7qyBZBZl9zVtw&submissionId=6b54faf3-58a0-8d17-8873-e516edca093e&challengeSource=AgEujjm6FHjzRAAAAYsoWDpJ3Q6eFIHSvaffOMId8MAAchrudjb0ysY_RghLE3Q&challegeType=AgGWmHreSaPJVgAAAYsoWDpLzp7eqyCB9hNIhMhOovHLhj9i0VZpRto&memberId=AgEp86t3zkYh_AAAAYsoWDpO_AuLMW6AI19_3Dff1EgKWwg&recognizeDevice=AgEQ-jzwQ4pNlgAAAYsoWDpRrrpAhbntYCp4oocAtZL8BSZe5b2J" target="_blank" className="btn btn-primary py-3 px-4">Hire me</Link> <Link href="#projects-section" className="btn btn-white btn-outline-white py-3 px-4">My works</Link></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</OwlCarousel>
		</section>
	)
}

export default Slider