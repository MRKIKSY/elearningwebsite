import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    ref: "homeRef",
  },
  {
    display: "About",
    ref: "aboutRef",
  },
  {
    display: "Courses",
    ref: "coursesRef",
  },
  {
    display: "Company",
    ref: "companyRef",
  },
  {
    display: "Testimonials",
    ref: "testimonialsRef",
  },
];

const Header = ({ refs }) => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const handleScroll = (ref) => {
    if (refs[ref] && refs[ref].current) {
      window.scrollTo({
        top: refs[ref].current.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.error(`Ref ${ref} is not defined or does not have a current property.`);
    }
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Learners.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <button
                      onClick={() => handleScroll(item.ref)}
                      className="nav__link"
                    >
                      {item.display}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +88 0123456789
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
