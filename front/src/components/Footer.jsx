import React from "react";

const Footer = () => {

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div id="footer" className=" bg-gradient-to-b from-secondary to-primary text-white">
      <div className="flex justify-between items-center px-16 py-10">
        <div className="flex gap-20">
          <div className="flex flex-col gap-3 w-2/5">
            <img
              src="logos/logo_keybox_white.png"
              alt="logo_keybox"
              className=" w-28 h-28 mt-[-2rem]"
            />
            <p className="">
              Unlock a Bright Future with Key Box E-learning. Explore a
              top-notch learning experience tailored for students and parents
              who value their children's education. Transform their future with
              Key Box E-learning.
            </p>
          </div>

          <div className="flex flex-col gap-10 ">
            <h4 className="font-bold">Site Navigation</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Download</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-10 ">
            <h4 className="font-bold">Explore</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <button
                onClick={() => scrollToSection("#tutorial")}
                >Keybox Tutorial</button>
              </li>
              <li>
                <button
                onClick={() => scrollToSection("#testimonials")}
                >Testimonials</button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-10">
            <h4>Socials</h4>
            <div className="flex gap-4">
              <img src="icons/facebook.svg" alt="facebook icon" />
              <img src="icons/instagram.svg" alt="instgram icon" />
              <img src="icons/X.svg" alt="X icon" />
              <img src="icons/linkedin.svg" alt="linkdin icon" />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-secondary" />

      <p className="text-xs text-center py-10">
        © 2023 Keybox. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
