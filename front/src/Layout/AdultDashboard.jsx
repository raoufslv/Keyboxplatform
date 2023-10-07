import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/footer";

const AdultDashboard = () => {
  const courses = [
    {
      title: "Java introduction",
      description:
        "Java is a class-based object-oriented simple programming language...",
      image: "images/java.png",
      tag: "programmation",
    },
    {
      title: "Developpement web",
      description:
        "web is a class-based object-oriented simple programming language...",
      image: "images/web.png",
      tag: "programmation",
    },
    {
      title: "IA introduction",
      description:
        "IA is a class-based object-oriented simple programming language...",
      image: "images/IA.png",
      tag: "programmation",
    },
    {
      title: "Arduino Advanced",
      description:
        "Arduino is a class-based object-oriented simple programming language...",
      image: "images/arduino.png",
      tag: "robotics",
    },
    {
      title: "Java introduction",
      description:
        "Java is a class-based object-oriented simple programming language...",
      image: "images/java.png",
      tag: "programmation",
    },
    {
      title: "Developpement web",
      description:
        "web is a class-based object-oriented simple programming language...",
      image: "images/web.png",
      tag: "programmation",
    },
    {
      title: "Arduino introduction",
      description:
        "Arduino is a class-based object-oriented simple programming language...",
      image: "images/arduino.png",
      tag: "robotics",
    },
    {
      title: "Arduino Advanced",
      description:
        "Arduino is a class-based object-oriented simple programming language...",
      image: "images/arduino.png",
      tag: "robotics",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-primary min-h-full">
      <div className="bg-gradient-to-r from-white/20 to-tertiary/20 min-h-full">
        <div className="px-16">
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

          {/* Mes cours */}
          <div className="mb-14" id="mescours">
            <h2 className="text-3xl font-bold my-5 text-white">Mes Cours</h2>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2 p-3 rounded bg-white w-[18rem]">
                <img
                  src="images/java.png"
                  alt="java img"
                  className="w-full rounded-lg object-cover object-center"
                />
                <p className="bg-secondary/30 rounded-lg w-fit px-2 py-1">
                  programmation
                </p>

                <h3 className="font-bold text-xl">Basics of JAVA</h3>
                <p className="text-gray-500">
                  Java is a class-based object-oriented simple programming
                  language. Though we can not consider it to be fully ...{" "}
                </p>
                <div className="bg-gray-300 rounded-full h-2 w-full flex items-center">
                  <div className="bg-secondary rounded-full h-2 w-2/3"></div>
                </div>

                <a
                  href="/course"
                  className=" text-sm text-end mt-2 hover:text-secondary transition duration-300 ease-in-out"
                >
                  More details
                  <img
                    src="icons/arrow_right.svg"
                    alt="arrow_right icon"
                    className="inline-block w-4 h-4 ml-2"
                  />
                </a>
              </div>

              <div className="flex flex-col gap-2 p-3 rounded bg-white w-[18rem]">
                <img
                  src="images/arduino.png"
                  alt="arduino img"
                  className="w-full rounded-lg object-cover object-center"
                />
                <p className="bg-secondary/30 rounded-lg w-fit px-2 py-1">
                  robotics
                </p>

                <h3 className="font-bold text-xl">Arduino introduction</h3>
                <p className="text-gray-500">
                  Arduino is a class-based object-oriented simple programming
                  language. Though we can not consider it to be fully ...{" "}
                </p>
                <div className="bg-gray-300 rounded-full h-2 w-full flex items-center">
                  <div className="bg-secondary rounded-full h-2 w-1/4"></div>
                </div>

                <a
                  href="/course"
                  className=" text-sm text-end mt-2 hover:text-secondary transition duration-300 ease-in-out"
                >
                  More details
                  <img
                    src="icons/arrow_right.svg"
                    alt="arrow_right icon"
                    className="inline-block w-4 h-4 ml-2"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Mes devoirs */}
          <div className="my-24">
            <h2 className="text-3xl font-bold my-5 text-white">
              Devoirs à remettre
            </h2>
            <div className="flex gap-36 items-center">
              <img
                src="images/Questions.png"
                alt="Questions illustration"
                className="w-1/3 object-cover object-center rounded-lg"
              />
              <div className="flex flex-col gap-2 rounded-3xl bg-white h-fit px-10 py-6">
                <h3 className="font-bold text-xl mb-2 text-secondary">
                  Devoir Arduino
                </h3>
                <p className="text-gray-500">
                  Description du devoir : Java is a class-based object-oriented
                  simple programming language. Though we can not consider it to
                  be fully ...
                </p>
                <button className=" text-secondary hover:text-white self-end font-bold py-3 px-7 hover:bg-secondary/80 transition duration-300 ease-in-out w-fit border-2 border-secondary rounded-3xl">
                  submit
                </button>
              </div>
            </div>
          </div>

          {/* cours recommandés */}
          <div className="pb-24">
            <h2 className="text-3xl font-bold my-5 text-white">
              Recommandés pour vous
            </h2>
            <div className="flex gap-10">
              <Card
                Title="Arduino introduction"
                Description="Arduino is a class-based object-oriented simple programming language. Though we can not consider it to be fully ..."
                Image="images/arduino.png"
                tag="robotics"
              />
              <Card
                Title="Arduino Advanced"
                Description="Arduino is a class-based object-oriented simple programming language. Though we can not consider it to be fully ..."
                Image="images/arduino.png"
                tag="robotics"
              />
            </div>
          </div>

          {/* toutes les cours disponibles */}
          {/* a caroussel of all the courses available */}
          <div className="pb-24">
            <h2 className="text-3xl font-bold my-5 text-white">
              Toutes les cours
            </h2>
            <Slider {...settings} className="pb-10">
              {courses.map((course, index) => (
                <div key={index}>
                  <Card
                    Title={course.title}
                    Description={course.description}
                    Image={course.image}
                    tag={course.tag}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AdultDashboard;
