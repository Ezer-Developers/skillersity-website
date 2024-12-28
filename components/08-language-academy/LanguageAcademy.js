"use client";

import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";
import React, { useEffect, useState } from "react";
import CourseDetails from "../../data/course-details/courseData.json";
import Card from "../Cards/Card";
import TestimonialSeven from "../Testimonials/Testimonial-Seven"
import TeamThree from "../Team/TeamThree"
import SplitTwo from "../Split/Split-Two";
import Newsletter from "../Newsletters/Newsletter";
import languageClub from "../../public/images/banner/language-club.png";
import AboutTwo from "../Abouts/About-Two";
import CountDownTwo from "../Counters/CountDownTwo";
import { ParallaxProvider } from "react-scroll-parallax";
import PopupForm from "../Forms/PopupForm";

const LanguageAcademy = ({ blogs }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen((prev) => !prev);
  };

  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.languageAcademy));

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="rbt-banner-area rbt-banner-7 bg-gradient-1 theme-shape header-transperent-spacer">
        <div className="wrapper w-100">
          <div className="container">
            <div className="row g-5 justify-content-between align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="content">
                  <div className="inner">
                    <div className="section-title text-start">
                      <span className="subtitle bg-primary-opacity">
                        Welcome to SKILLESITY
                      </span>
                    </div>
                    <h1 className="title">
                      Advancing
                      <span className="theme-gradient"> Your Career with</span> Practical Learning</h1>
                    <div className="rbt-button-group justify-content-start mt--30">
                      <button
                        className="rbt-btn btn-gradient rbt-switch-btn"
                        onClick={togglePopup}
                      >
                        <span data-text="Enquire Now">Enquire Now</span>
                      </button>
                      <Link
                        className="rbt-btn btn-border rbt-switch-btn"
                        href="#"
                      >
                        <span data-text="Find Courses">Find Courses</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="thumbnail-wrapper">
                  <div className="thumbnail text-end">
                    <Image
                      src={languageClub}
                      width={597}
                      height={479}
                      alt="Education Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopupForm isOpen={isPopupOpen} onClose={togglePopup} />

      <div className="rbt-about-area bg-color-white csm-rbt-section-gapBtm pb_md--80 pb_sm--80 about-style-1">
        <div className="container">
          <ParallaxProvider>
            <AboutTwo />
          </ParallaxProvider>
        </div>
      </div>

      <main className="rbt-main-wrapper">
        <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-secondary-opacity">
                    Top Popular Course
                  </span>
                  <h2 className="title">
                    Skillersity Course student <br /> can join with us.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row row--15">
              <Card
                col="col-lg-4 col-md-6 col-sm-6 col-12"
                mt="mt--30"
                start={0}
                end={3}
                isDesc={true}
                isUser={true}
              />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="load-more-btn mt--60 text-center">
                  <Link
                    className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                    href="#">
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Load More Course</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-about-area bg-color-white pb_md--80 pb_sm--80 about-style-1" style={{ paddingTop: "40px" }}>
          <div className="container">
            <SplitTwo />
          </div>
        </div>

        <div className="rbt-testimonial-area bg-color-white-alt rbt-section-gap overflow-hidden">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--10">
                    <span className="subtitle bg-primary-opacity">
                      EDUCATION FOR EVERYONE
                    </span>
                    <h2 className="title">
                      People like Skillersity education. <br /> No joking - here’s
                      the proof!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TestimonialSeven />
        </div>

        <div className="rbt-team-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    Our Teacher
                  </span>
                  <h2 className="title">Whose Inspirations You</h2>
                </div>
              </div>
            </div>
            <TeamThree />
          </div>
        </div>
      </main>

      <div
        className="rbt-countdown-area bg_image bg_image--6 bg_image_fixed rbt-section-gap"
        data-black-overlay="5"
      >
        <div className="container">
          <CountDownTwo />
        </div>
      </div>
      <div className="rbt-section-gap">
        <Newsletter />
      </div>

      <div className="rbt-rbt-blog-area rbt-section-gap bg-gradient-1">
        <div className="container">
          <div className="row mb--55 row--30 align-items-end">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-pink-opacity">Our Posts</span>
                <h2 className="title">Skillersity News</h2>
                <p className="description has-medium-font-size mt--20">
                  Language Academy Blog.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5">
            {blogs.slice(0, 3).map((data, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                <div className="rbt-card variation-02 rbt-hover">
                  <div className="rbt-card-img">
                    <Link href={`/blog-details/${data.slug}`}>
                      <Image
                        src={data.thumbnail.large}
                        width={450}
                        height={267}
                        priority
                        alt="Card image"
                      />
                    </Link>
                  </div>
                  <div className="rbt-card-body">
                    <h5 className="rbt-card-title">
                      <Link href={`/blog-details/${data.slug}`}>
                        {data.title}
                      </Link>
                    </h5>
                    <p className="rbt-card-text">{data?.desc}</p>
                    <div className="rbt-card-bottom">
                      <Link
                        className="transparent-button"
                        href={`/blog-details/${data.slug}`}
                      >
                        Learn More
                        <i>
                          <svg
                            width="17"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g stroke="#27374D" fill="none" fillRule="evenodd">
                              <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                              <path
                                strokeLinecap="square"
                                d="M.663 5.572h14.594"
                              />
                            </g>
                          </svg>
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageAcademy;
