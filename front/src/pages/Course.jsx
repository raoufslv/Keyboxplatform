import React from "react";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/footer";

const Course = () => {
  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-gradient-to-r from-white/20 to-tertiary/20 min-h-screen">
        <div className="px-16 text-white">
          <NavbarUser />

          <button
            className="flex items-center gap-5 mt-10"
            onClick={() => {
              window.history.back();
            }}
          >
            <img
              src="icons/left.svg"
              alt="arrow_left icon"
              className="absolute top-20 left-10 ml-10 mt-10 w-10 h-10"
            />
          </button>

          <h2 className="text-4xl font-bold mt-10 mb-20 text-center">
            Course Python
          </h2>
          <div className="flex justify-center">
            <div className="border-[1px] relative border-secondary/80 rounded-[3rem] rounded-bl-none w-3/5 p-6 px-24">
              <img
                src="images/course_prof.png"
                alt="course_prof image"
                className="object-cover object-center rounded-3xl w-1/4 absolute top-[-4rem] left-[-4rem]"
              />
              <h4 className="text-2xl font-bold mb-2">
                Prof Dahmani Fouzia - doctorante
              </h4>
              <p className=" mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magnud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit proi
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <table className="w-2/3">
              <thead className="bg-secondary">
                <tr className="border-b-[1px] border-primary">
                  <th className="text-left p-5">Date</th>
                  <th className="text-left">Heure</th>
                  <th className="text-left">Durée</th>
                  <th className="text-left">Lien</th>
                </tr>
              </thead>
              <tbody className="bg-white text-black">
                <tr className="border-b-[1px] border-primary">
                  <td className="p-5">10/10/2021</td>
                  <td>10:00</td>
                  <td>2h</td>
                  <td>
                    <a
                      href="https://meet.google.com/"
                      className="text-secondary hover:text-secondary/60 transition duration-300 ease-in-out"
                    >
                      https://meet.google.com/
                    </a>
                  </td>
                </tr>
                <tr className="border-b-[1px] border-primary">
                  <td className="p-5">10/10/2021</td>
                  <td>10:00</td>
                  <td>2h</td>
                  <td>
                    <p className=" ">Presentiel</p>
                  </td>
                </tr>
                <tr className="border-b-[1px] border-primary">
                  <td className="p-5">10/10/2021</td>
                  <td>10:00</td>
                  <td>2h</td>
                  <td>
                    <a
                      href="https://meet.google.com/"
                      className="text-secondary hover:text-secondary/60 transition duration-300 ease-in-out"
                    >
                      https://meet.google.com/
                    </a>
                  </td>
                </tr>
                <tr className="border-b-[1px] border-primary">
                  <td className="p-5">10/10/2021</td>
                  <td>10:00</td>
                  <td>2h</td>
                  <td>
                    <a
                      href="https://meet.google.com/"
                      target="_blanc"
                      className="text-secondary hover:text-secondary/60 transition duration-300 ease-in-out"
                    >
                      https://meet.google.com/
                    </a>
                  </td>
                </tr>
                <tr className="border-b-[1px] border-primary">
                  <td className="p-5">10/10/2021</td>
                  <td>10:00</td>
                  <td>2h</td>
                  <td>
                    <a
                      href="https://meet.google.com/"
                      className="text-secondary hover:text-secondary/60 transition duration-300 ease-in-out"
                    >
                      https://meet.google.com/
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mb-[8rem] my-4">
            <button className="bg-gradient-to-b w-fit from-secondary to-secondary/20 py-2 px-5 flex justify-center items-center gap-5">
              <h2 className="text-xl font-bold">Pass my Quiz</h2>
              <img src="icons/medal.svg" alt="medal icon" className="w-10" />
            </button>
          </div>

          <div className="flex justify-around items-center my-[8rem]">
            <div className=" bg-gradient-to-b from-secondary/20 to-secondary/10 rounded-[3rem] p-8 w-1/3">
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
            <div>
              <img
                src="images/leader.png"
                alt="leader illustration"
                className="w-2/3"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center my-[8rem]">
            <h2 className="text-3xl font-bold mb-5">
              Posez des questions à notre chatbot
            </h2>

            <div className="bg-primary flex flex-col rounded-xl px-8 py-5 w-2/3 border-2 border-secondary">
              <div className="flex flex-col gap-5 mb-5">
                <div className="flex gap-2 items-center">
                  <img
                    src="images/chat.png"
                    alt="chatbot image"
                    className="w-16"
                  />
                  <p className=" bg-secondary/80 rounded-xl p-3">
                    Hello Sarah 👋 How can i help you ?
                  </p>
                </div>
              </div>

              <div className="flex bg-white rounded-xl mt-10 p-2">
                <input
                  type="text"
                  className="w-full bg-transparent rounded-xl focus:outline-none text-black"
                  placeholder="Posez votre question"
                />
                <button className="bg-secondary/80 rounded-xl p-2">
                  <img
                    src="icons/send.svg"
                    alt="send icon"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center my-20">
            <h2 className="text-3xl font-bold mb-5">
              Chattez avec vos profs et d'autres étudiants
            </h2>
            <img
              src="images/sign_in_img.png"
              alt="chat illustration"
              className="w-1/3"
            />
            <button className="bg-gradient-to-b px-10 w-fit from-secondary to-secondary/20 py-2 flex justify-center items-center gap-5 mt-10 rounded-full hover:bg-secondary/80 transition duration-300 ease-in-out">
              <h2 className="text-xl font-bold">Chat now</h2>
              <img src="icons/chat.svg" alt="chat icon" className="w-10" />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Course;
