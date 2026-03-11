import { memo } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:techwithurvil@gmail.com" data-cursor="disable">
                techwithurvil@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <div className="education-entry">
              <p className="education-degree">B.E. in Computer Engineering</p>
              <p className="education-institution">
                Govt. Engineering College, Gandhinagar (GTU)
              </p>
              <p className="education-period">Jul 2023 – Mar 2026</p>
            </div>
            <div className="education-entry">
              <p className="education-degree">Diploma in Computer Engineering</p>
              <p className="education-institution">
                R.C Technical Institute (GTU)
              </p>
              <p className="education-period">Aug 2020 – Jul 2023</p>
            </div>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Urvil004"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/urvil-darji"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/Urvil93575713"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Have a project in mind or want to automate something? Let's build
              it.
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);