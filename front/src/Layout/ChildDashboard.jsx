import React from "react";
import NavbarUser from "../components/NavbarUser";
import { motion } from "framer-motion";

const ChildDashboard = () => {
  const GameCard = ({ image, title }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="flex justify-center cursor-pointer items-center py-4 pr-6 bg-white rounded-3xl"
      >
        <img src={image} alt={title} className="mx-auto" />
        <h3 className="text-2xl font-bold text-primary/90 text-center">
          {title}
        </h3>
      </motion.div>
    );
  };

  return (
    <div className="bg-primary min-h-full">
      <div className="bg-gradient-to-r from-white/20 to-tertiary/20 min-h-full">
        <div className="pb-16 px-16">
          <NavbarUser />

          <form action="" className="flex justify-center items-center my-5">
            <div className="flex justify-center gap-2 items-center bg-white/10 rounded-xl px-5 py-3 w-[80%]">
              <img
                src="icons/rechercher.svg"
                alt="recherche icon"
                className="w-6 h-6 cursor-pointer"
                onClick={() => (window.location.href = "/")}
              />
              <input
                type="text"
                placeholder="Rechercher"
                className=" bg-transparent text-white focus:outline-none w-full"
              />
            </div>
          </form>

          <div className="flex items-center justify-between">
            <img
              src="images/3D_garcon.png"
              alt="3D_garcon image"
              className="w-[20%]"
            />

            <div className="flex flex-col gap-6">
              <GameCard image="images/c++.png" title="Jeu en C++" />
              <GameCard image="images/python_icon.png" title="Jeu en Python" />
              <GameCard image="images/java_icon.png" title="Jeu en Java" />
            </div>

            <div className="text-white W-full">
              <div className=" bg-gradient-to-b from-secondary/20 to-secondary/10 rounded-[3rem] p-8 w-full">
                <h2 className="text-2xl font-bold mb-5">Your position</h2>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <h3 className="text-xl font-bold">4th</h3>
                  </div>
                  <h3 className="text-xl font-bold">1000 pts</h3>
                </div>

                <hr className="my-5" />

                <div className="flex justify-between items-center bg-secondary/80 rounded-[3rem] p-5">
                  <div className="flex gap-2 items-center">
                    <h3 className="text-xl font-bold">5th</h3>
                  </div>
                  <h3 className="text-xl font-bold"> 900 pts</h3>
                </div>

                <hr className="my-5" />

                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <h3 className="text-xl font-bold">6th</h3>
                  </div>
                  <h3 className="text-xl font-bold"> 800 pts</h3>
                </div>
                <div className="flex justify-center">
                  <button className=" border-2 border-secondary py-3 px-5 flex justify-center items-center gap-5 mt-10 rounded-full hover:bg-secondary/80 transition duration-300 ease-in-out">
                    <img
                      src="icons/medal.svg"
                      alt="arrow_left icon"
                      className="inline-block ml-2"
                    />
                    <p className="text-xl font-bold">see all ranking</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildDashboard;
