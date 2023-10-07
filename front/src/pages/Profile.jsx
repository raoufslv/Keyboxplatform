import React from "react";
import NavbarUser from "../components/NavbarUser";

const Profile = () => {
  return (
    <div className="bg-primary min-h-full h-screen overflow-hidden">
      <div className="bg-gradient-to-r from-white/20 to-tertiary/20 min-h-full">
        <div className="px-16 text-white">
          <NavbarUser />
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-bold mb-5 text-center">Mon profile</h2>
            <div className="flex gap-10 items-center justify-center">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col bg-transparent border-2 border-white rounded-lg px-5 py-2 w-[22rem]">
                  <label htmlFor="fullname">nom complet</label>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Nom"
                    value={"John snow"}
                    className="bg-transparent border-none text-white focus:outline-none"
                  />
                </div>
                <div className="flex flex-col bg-transparent border-2 border-white rounded-lg px-5 py-2 w-[22rem]">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={"john@gmail.com"}
                    className="bg-transparent border-none text-white focus:outline-none"
                  />
                </div>

                <div className="flex flex-col bg-transparent border-2 border-white rounded-lg px-5 py-2 w-[22rem]">
                  <label htmlFor="password">mot de passe</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="mot de passe"
                    value={"********"}
                    className="bg-transparent border-none text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col bg-transparent border-2 border-white rounded-lg px-5 py-2 w-[22rem]">
                  <label htmlFor="fullname">phone number</label>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Nom"
                    value={"0540762334"}
                    className="bg-transparent border-none text-white focus:outline-none"
                  />
                </div>
                <div className="flex flex-col bg-transparent border-2 border-white rounded-lg px-5 py-2 w-[22rem]">
                  <label htmlFor="date">date of birth</label>
                  <input
                    type="date"
                    name="date"
                    placeholder="Date of birth"
                    value={"1999-12-12"} // date format
                    className="bg-transparent border-none text-white focus:outline-none"
                  />
                </div>

                <div className="flex flex-col bg-transparent border-2 border-white rounded-lg px-5 py-2 w-[22rem]">
                  <label htmlFor="password">address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="address"
                    value={"Bab errouar"}
                    className="bg-transparent border-none text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <button className="self-end bg-secondary text-xl font-bold text-primary rounded-lg px-5 py-2 mt-10 flex gap-2 items-center hover:bg-secondary/50 transition duration-300 ease-in-out">
              <img src="icons/save.svg" alt="save icon" />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
