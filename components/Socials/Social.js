import Link from "next/link";
import React from "react";

const Social = ({ classOne, classList }) => {
  return (
    <div className={classOne}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className={classList}>
              <li>
                <Link href="https://www.facebook.com/people/Skillersity/61569769297477//">
                  <i className="feather-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com">
                  <i className="feather-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#/">
                  <i className="feather-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="#/">
                  <i className="feather-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
