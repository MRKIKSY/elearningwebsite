import React, { Fragment, useRef } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const companyRef = useRef(null);
  const testimonialsRef = useRef(null);

  const refs = {
    homeRef,
    aboutRef,
    coursesRef,
    companyRef,
    testimonialsRef,
  };

  return (
    <Fragment>
      <Header refs={refs} />
      <div ref={refs.homeRef}>
        <HeroSection />
      </div>
      <div ref={refs.aboutRef}>
        <CompanySection />
      </div>
      <div ref={refs.coursesRef}>
        <ChooseUs />
      </div>
      <div ref={refs.companyRef}>
        <Features />
      </div>
      <div ref={refs.testimonialsRef}>
        <FreeCourse />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
