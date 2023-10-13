import React from 'react'
import { useParallax } from 'react-scroll-parallax';

const Projects = () => {
    const parallax = useParallax({
        easing: 'easeOutQuad',
        translateY: [20, 0],
        opacity: [0.2, 1.2]
      });
    return (
        <section ref={parallax.ref} class="ftco-section ftco-project" id="projects-section">
            <div class="container">
                <div class="row justify-content-center pb-5">
                    <div class="col-md-12 heading-section text-center ftco-animate">
                        <h1 class="big big-2">Projects</h1>
                        <h2 class="mb-4">Our Projects</h2>
                        {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p> */}
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(./assets/images/project-4.jpg)" }}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="https://dev.joinleadoff.com/">join-leadoff</a></h3>
                                <span>join-leadoff is a unique stock market platform to purchase private company stocks across from the india .</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(./assets/images/project-5.jpg)" }}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="https://dev333.musicart.io/">Musicart</a></h3>
                                <span>MusicArt is a unique new NFT platform with its sole focus on celebrating and promoting music-based art and imagery.
                                    This platform provides environment for musicians to trade their visual art, as opposed to seeing their work lost in a sea of NFTs in unrelated genres on other platforms.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(./assets/images/project-1.jpg)" }}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="https://glints.com/">Glints</a></h3>
                                <span>This is Job search portal.
                                    Application has  management functionality for job search,
                                    Find new job position and opportunities.</span>
                            </div>
                        </div>

                        <div class="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(./assets/images/project-6.jpg)" }}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="https://limecall.com/">limecall</a></h3>
                                <span>Application has Automatically route leads to the right reTurn web visitors into customers faster, book more qualified, enable instant web conversion management.</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(./assets/images/project-2.jpg)" }}>
                                    <div class="overlay"></div>
                                    <div class="text text-center p-4">
                                        <h3><a href="http://sms.seafairmiami.com/">SEAFAIR</a></h3>
                                        <span>Management Software.
                                            Application has  management functionality, Buyer and seller,
                                            provide purchase order functionality.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(./assets/images/project-3.jpg)" }}>
                                    <div class="overlay"></div>
                                    <div class="text text-center p-4">
                                        <h3><a href="https://dropoffer.com/">DropOffer</a></h3>
                                        <span>Finding your dream home.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects