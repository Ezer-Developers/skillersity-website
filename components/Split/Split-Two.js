"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import SplitData from "../../data/elements/split.json";

const SplitTwo = ({ isImg }) => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);

  return (
    <>
      {SplitData &&
        SplitData.splitTwo.map((data, index) => (
          <div className="row g-5 align-items-center" key={index}>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="inner pr--50 pr_md--0 pr_sm--0">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    {data.tag}
                  </span>
                  <h2 className="title">{data.title}</h2>
                  <p className="description mt--30">{data.desc}</p>
                  <div className="read-more-btn">
                    <a className="rbt-moderbt-btn" href="#">
                      <span className="moderbt-btn-text">
                        Learn More About Us
                      </span>
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Display image without YouTube popup */}
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="video-popup-wrapper">
                <Image
                  className="w-100 rbt-radius"
                  src={isImg ? data.img : data.imgTwo}
                  width={isImg ? 638 : 590}
                  height={isImg ? 458 : 424}
                  alt="Video Images"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SplitTwo;
