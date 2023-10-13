import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Slider from '@/components/Slider/Slider'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Service from '@/components/Service'
import Skills from '@/components/Skills'
import About from '@/components/About'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Blog from '@/components/Blog'
import Contect from '@/components/Contect'
import HireMe from '@/components/HireMe'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const contentRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const scrollThumbRef = useRef(null);
  const observer = useRef(null);
  const [thumbHeight, setThumbHeight] = useState(20);

  function handleResize(ref, trackSize) {
    const { clientHeight, scrollHeight } = ref;
    setThumbHeight(Math.max((clientHeight / scrollHeight) * trackSize, 20));
  }

  // If the content and the scrollbar track exist, use a ResizeObserver to adjust height of thumb and listen for scroll event to move the thumb
  useEffect(() => {
    if (contentRef.current && scrollTrackRef.current) {
      const ref = contentRef.current;
      const {clientHeight: trackSize} = scrollTrackRef.current;
      observer.current = new ResizeObserver(() => {
        handleResize(ref, trackSize);
      });
      observer.current.observe(ref);
      return () => {
        observer.current?.unobserve(ref);
      };
    }
  }, []);
  return (
    <>
    <ParallaxProvider>


      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="custom-scrollbars__container">
        <div className="custom-scrollbars__content" ref={contentRef} >
          <Header />
         
          <Slider />
          
          <About />
          <Resume />
          <Service />
          <Skills />
          <Projects />
          {/* <Blog /> */}
          <HireMe />
          <Contect />
          {/* <Footer /> */}
        </div>
        <div className="custom-scrollbars__scrollbar">
          {/* <button className="custom-scrollbars__button">⇑</button> */}
          <div className="custom-scrollbars__track-and-thumb">
            <div className="custom-scrollbars__track"></div>
            <div
              className="custom-scrollbars__thumb"
              ref={scrollThumbRef}
              style={{
                height: `${thumbHeight}px`,
              }}
            ></div>
          </div>
          {/* <button className="custom-scrollbars__button">⇓</button> */}
        </div>
      </div>
    </ParallaxProvider>
    </>
  )
}
