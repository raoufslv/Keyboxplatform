import React from "react";
import Card from "../components/Card";

const TrainerDashboard = () => {
  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-gradient-to-r from-white/20 to-tertiary/20 min-h-screen">
        <div className="pb-16 px-16 flex">
          <div className=" flex flex-col justify-between items-center py-4 bg-gradient-to-b from-white/50 to-secondary rounded-xl w-fit gap-20 px-5 mt-6 text-white">
            <img
              onClick={() => (window.location.href = "/")}
              src="logos/logo_keybox_white.png"
              alt="logo_keybox"
              className=" w-32 mt-[-1rem] cursor-pointer"
            />
            <ul className="flex flex-col gap-5  font-bold text-center w-full">
              <li>Dashboard</li>
              <li className="opacity-50 cursor-pointer hover:opacity-100 transition duration-300 ease-in-out">
                Quizzes
              </li>
              <li className="opacity-50 cursor-pointer hover:opacity-100 transition duration-300 ease-in-out">
                Courses
              </li>
              <li className="opacity-50 cursor-pointer hover:opacity-100 transition duration-300 ease-in-out">
                Messages
              </li>
              <li className="opacity-50 cursor-pointer hover:opacity-100 transition duration-300 ease-in-out">
                Schedule
              </li>
            </ul>
            <ul className="flex flex-col gap-5  font-bold text-center w-full">
              <li className="cursor-pointer">Profile</li>
              <li className="cursor-pointer">Logout</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 w-full text-white mt-6 ml-6">
            <div className="flex gap-5 w-full h-fit rounded-3xl p-5 bg-secondary">
              <div className="flex flex-col gap-5 w-[60%] text-white">
                <span className="text-white opacity-50">10 Octobre 2023</span>
                <h2 className="text-2xl font-bold">Welcome back, John!</h2>
                <p className="text-white opacity-50 w-[80%]">
                  Vous trouverez toutes les informations possibles pour votre
                  formation Java
                </p>
              </div>
              <img
                src="images/hero_formateur.png"
                alt="hero_formateur image"
                className="w-[40%]"
              />
            </div>

            <div className="text-black">
              <h2 className="text-2xl text-white font-bold mb-5">Mes cours</h2>
              <div className="flex gap-5">
                <Card Title="Arduino introduction" Image="images/arduino.png" />
                <Card Title="Arduino Advanced" Image="images/arduino.png" />
                <div className="bg-white border-2 border-secondary rounded-xl w-[18rem] h-[18rem] flex justify-center items-center">
                  <a
                    href="/course"
                    className="text-secondary transition duration-300 ease-in-out flex flex-col gap-10 justify-center items-center"
                  >
                    <img
                      src="icons/plus.svg"
                      alt="plus icon"
                      className="w-16 h-16 cursor-pointer"
                    />
                    <h4 className="text-center text-secondary font-bold text-xl">
                      Ajouter un cours
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;
