import React from 'react'
import { useParallax } from 'react-scroll-parallax';

const Service = () => {
    const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [30, 0],
		opacity:[0.2 , 1.2]
	  });
    return (
        <section ref={parallax.ref}  class="ftco-section" id="services-section">
            <div class="container">
                <div class="row justify-content-center py-5 mt-5">
                    <div class="col-md-12 heading-section text-center ftco-animate">
                        <h1 class="big big-2">Services</h1>
                        <h2 class="mb-4">Services</h2>
                        <p>Complete web solutions for your online presence. I offer web design, web development, and back-end expertise to create engaging websites and web applications tailored to your business needs.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 text-center d-flex ftco-animate">
                        <a href="#" class="services-1">
                            <span class="icon">
                                <i class="flaticon-analysis"></i>
                            </span>
                            <div class="desc">
                                <h3 class="mb-5">Web Design</h3>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-4 text-center d-flex ftco-animate">
                        <a href="#" class="services-1">
                            <span class="icon">
                                <i class="flaticon-ideas"></i>
                            </span>
                            <div class="desc">
                                <h3 class="mb-5">Web Development</h3>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-4 text-center d-flex ftco-animate">
                        <a href="#" class="services-1">
                            <span class="icon">
                                <i class="flaticon-analysis"></i>
                            </span>
                            <div class="desc">
                                <h3 class="mb-5">Backend Development</h3>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4 text-center d-flex ftco-animate">
                        <a href="#" class="services-1">
                            <span class="icon">
                                <i class="flaticon-flasks"></i>
                            </span>
                            <div class="desc">
                                <h3 class="mb-5">Web SEO</h3>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4 text-center d-flex ftco-animate">
                        <a href="#" class="services-1">
                            <span class="icon">
                                <i class="flaticon-ideas"></i>
                            </span>
                            <div class="desc">
                                <h3 class="mb-5">Product Strategy</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service