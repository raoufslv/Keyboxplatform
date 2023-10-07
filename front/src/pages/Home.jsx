import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";

const Home = () => {
  const isLoggedIn = localStorage.getItem("token"); // Check if the token is present in local storage

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      const scrollButton = document.querySelector("#scrollButton");
      if (window.scrollY > 500) {
        scrollButton.classList.remove("hidden");
      } else {
        scrollButton.classList.add("hidden");
      }
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <div className="bg-primary min-h-full overflow-hidden">
      <div className="bg-gradient-to-r from-white/20 to-tertiary/20 min-h-full">
        <div className="px-16 text-white">
          {/* Scroll to top button */}
          <div
            id="scrollButton"
            className="fixed bottom-10 right-10 hidden cursor-pointer bg-secondary rounded-full p-2"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src="icons/up.svg" alt="scroll to top icon" />
          </div>

          <Navbar />

          {/* Hero  Section */}
          <div className="flex justify-between gap-[5rem] items-center py-10">
            <div className="flex flex-col gap-10">
              <h2 className="text-5xl font-bold w-3/5">
                Empower Your Future Through{" "}
                <span className="text-secondary">Learning</span> with Us!
              </h2>
              {isLoggedIn ? (
                <div className="flex gap-10 justify-start items-center text-xl">
                  <motion.button
                    onClick={() => (window.location.href = "/dashboard")}
                    whileHover={{ scale: 1.05 }} // Scale up the button on hover
                    className="text-white bg-gradient-to-b from-secondary to-secondary/0 hover:text-secondary transition duration-300 ease-in-out py-3 px-10 rounded-full border-secondary border-[1px]"
                  >
                    Explore courses
                  </motion.button>
                </div>
              ) : (
                <div className="flex gap-10 justify-start items-center text-xl">
                  <motion.button
                    onClick={() => (window.location.href = "/signup")}
                    whileHover={{ scale: 1.05 }} // Scale up the button on hover
                    className="text-white bg-gradient-to-b from-secondary to-secondary/0 hover:text-secondary transition duration-300 ease-in-out py-2 px-10 rounded-full border-secondary border-[1px]"
                  >
                    S'inscrire
                  </motion.button>
                  <motion.button
                    onClick={() => (window.location.href = "/signin")}
                    whileHover={{ scale: 1.05 }} // Scale up the button on hover
                    className="text-white hover:bg-gradient-to-b hover:from-secondary hover:to-secondary/0 transition duration-300 ease-in-out py-2 px-8 rounded-full border-secondary border-[1px]"
                  >
                    Se connecter
                  </motion.button>
                </div>
              )}
            </div>
            <div className="">
              <img
                src="images/hero.png"
                alt="hero section image"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* About Section */}
          <div
            id="about"
            className="flex my-40 justify-between py-10 px-5 bg-gradient-to-b from-secondary to-white/0 rounded-bl-none rounded-3xl"
          >
            <div className="w-full">
              <img
                src="images/aboutus_illustration.png"
                alt="aboutus_illustration"
                className="w-3/5"
              />
            </div>
            <div className=" flex flex-col gap-10">
              <h2 className=" text-primary font-bold text-4xl w-[10rem]">
                About us
              </h2>
              <p className=" w-[35rem]">
                KEYBOX is a 2021-founded tech learning center specializing in
                robotics and technology. Our mission is to make robotics
                accessible to enthusiasts and creators of all ages through
                advanced software, hardware solutions, and training programs.
                Join us in exploring the exciting world of robotics!s to make
                robotics accessible to enthusiasts and creators of all ages
                through advanced software, hardware solutions, and training
                programs. Join us in exploring the exciting world of robotics!ge
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="py-10" id="services">
            <h2 className="text-5xl text-center font-bold">Our services</h2>
            <div className="flex gap-20 items-center justify-center py-10">
              <motion.div
                className="flex w-1/4  cursor-pointer py-10 flex-col justify-center items-center bg-gradient-to-b from-secondary via-white to-secondary rounded-3xl"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <img src="images/services1.png" alt="" />
                <h3 className="text-white text-xl font-bold">Adult training</h3>
              </motion.div>
              <motion.div
                className="flex w-1/4  cursor-pointer py-10 px-2 flex-col justify-center items-center bg-gradient-to-b from-secondary via-white to-secondary rounded-3xl"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <img src="images/services2.png" alt="" />
                <h3 className="text-white text-xl font-bold">
                  Children's training
                </h3>
              </motion.div>
            </div>
          </div>

          {/* tutorial Section */}
          <div
            className="py-10 flex flex-col justify-center items-center"
            id="tutorial"
          >
            <h2 className="text-5xl text-center font-bold">
              Watch Our Video tutorial
            </h2>
            <iframe
              src="https://www.youtube.com/embed/HSQTzY1te2Y"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              className="w-full h-[30rem] px-24 py-10"
            />
          </div>

          {/* download app Section */}
          <div
            className="py-10 flex flex-col justify-center items-center"
            id="downloadapp"
          >
            <h2 className="text-5xl text-center font-bold">Download our app</h2>
            <div className="flex justify-center">
              <div className="flex flex-col justify-between items-center w-1/2 text-center px-10 py-10rounded-3xl">
                <p className="text-start font-medium text-xl mt-32 w-4/5">
                  Embarquez dans une aventure passionnante en téléchargeant
                  notre application dès maintenant pour dévoiler un univers de
                  potentialités inexplorées.
                </p>

                <div className="flex gap-10 flex-row-reverse justify-center items-center">
                  <div className="flex pr-4 p-1 gap-3 justify-center items-center bg-primary bg-opacity-40 rounded-2xl">
                    <img
                      src="icons/playstore.svg"
                      alt="appstore icon"
                      className="w-[4rem]"
                    />
                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                      <span className="text-xs">Get it on</span>
                      <a
                        target="_blank"
                        href="https://playstore.com/us/app/keybox/id1546623873"
                        className="font-bold text-xl"
                      >
                        playstore
                      </a>
                    </div>
                  </div>
                  <div className="flex pr-4 p-1 gap-3 justify-center items-center bg-primary bg-opacity-40 rounded-2xl">
                    <img
                      src="icons/appstore.svg"
                      alt="appstore icon"
                      className="w-[4rem]"
                    />
                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                      <span className="text-xs">download on the</span>
                      <a
                        target="_blank"
                        href="https://apps.apple.com/us/app/keybox/id1546623873"
                        className="font-bold text-xl"
                      >
                        App store
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <img
                src="images/download_app.png"
                alt="download_app img"
                className="w-2/3 mr-[-20rem]"
              />
            </div>
          </div>

          {/* Testimonials Section */}
          <div
            className="py-20 flex flex-col justify-center items-center"
            id="testimonials"
          >
            <h2 className="text-5xl text-center font-bold pb-20">
              Users Opinion
            </h2>
            <div className="flex gap-20 justify-center items-center py-10">
              <div className="flex flex-col gap-5 justify-center items-center w-2/5">
                <img
                  src="images/testomonials.png"
                  alt="testimonials image"
                  className="border-4 border-secondary rounded-full"
                />
                <h3>Aya Celyne LAGAB</h3>
                <img src="icons/ratings.png" alt="rating icons" />
                <p className="bg-gradient-to-t from-secondary to-secondary/10 p-4 rounded-[4rem] rounded-tl-none">
                  my experience with Key Box has been exceptional. The expert
                  instructors and practical skills I've gained have been
                  invaluable. Key Box has opened doors to personal and
                  professional growth, and I highly recommend it.
                </p>
              </div>
              <div className="flex flex-col gap-5 justify-center items-center w-2/5">
                <img
                  src="images/testomonials.png"
                  alt="testimonials image"
                  className="border-4 border-secondary rounded-full"
                />
                <h3>Aya Celyne LAGAB</h3>
                <img src="icons/ratings.png" alt="rating icons" />
                <p className="bg-gradient-to-t from-secondary to-secondary/10 p-4 rounded-[4rem] rounded-tl-none">
                  my experience with Key Box has been exceptional. The expert
                  instructors and practical skills I've gained have been
                  invaluable. Key Box has opened doors to personal and
                  professional growth, and I highly recommend it.
                </p>
              </div>
            </div>
          </div>

          {/* footer Section */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
