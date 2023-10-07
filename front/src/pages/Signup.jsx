import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(""); // "formateur", "etudiant"
  const [type, setType] = useState(""); // "adult", "child" [only for etudiant
  const [parentName, setParentName] = useState(""); // Only for child users

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Fullname is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    dateofbirth: Yup.date().required("Date of birth is required"),
    address: Yup.string().required("Address is required"),
    feildofstudy: Yup.string().required("Field of study is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      dateofbirth: "",
      address: "",
      feildofstudy: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = {
        ...values,
        role: role,
      };

      if (role === "enfant") {
        data.parentName = parentName;
      }

      axios
        .post("http://localhost:5001/api/auth/signup", data)
        .then((response) => {
          console.log(response.data); // Handle successful response here
          localStorage.setItem("token", response.data.accessToken);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("fullname", response.data.fullname);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("roles", response.data.roles);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.response.data);
          console.error(error); // Handle error here
        });
    },
  });

  return (
    <div className="bg-gradient-to-br from-primary/80 to-primary h-screen w-screen flex">
      <div className=" flex flex-col items-center w-2/3">
        <img
          src="logos/logo_keybox_white.png"
          alt="logo_keybox"
          className="w-[7rem] object-cover object-center cursor-pointer mb-[-1.5rem]"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <div className=" bg-white rounded-xl px-5 py-5 w-[22rem]">
          {role === "" && type === "" && (
            <div className="flex flex-col gap-2 h-full">
              <h2 className="text-3xl font-bold text-center">Vous êtes ?</h2>
              <div className="flex flex-col gap-20 pt-16 pb-5 content-center items-center justify-center">
                <button
                  className="bg-secondary pb-3 w-2/3 h-full rounded hover:bg-secondary/80 transition duration-300 ease-in-out"
                  onClick={() => {
                    setType("formateur");
                    setRole("formateur");
                  }}
                >
                  <div className=" flex flex-col items-center justify-center h-full">
                    <img
                      src="images/adult.png"
                      alt="formateur"
                      className=" w-[7rem] object-cover object-center mt-[-5rem]"
                    />

                    <h3 className="text-2xl text-center text-white">
                      Formateur
                    </h3>
                    <p className="text-primary font-medium">Enseignant</p>
                  </div>
                </button>
                <button
                  className="bg-secondary pb-3 w-2/3 h-full rounded hover:bg-secondary/80 transition duration-300 ease-in-out"
                  onClick={() => setType("etudiant")}
                >
                  <div className=" flex flex-col items-center justify-center h-full">
                    <img
                      src="images/enfant.png"
                      alt="etudiant"
                      className=" w-[7rem] object-cover object-center mt-[-5rem]"
                    />

                    <h3 className="text-2xl text-center text-white">
                      Etudiant
                    </h3>
                    <p className="text-primary font-medium">Apprenant</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {type === "etudiant" && role === "" && (
            <div className="flex flex-col gap-2 h-full">
              <h2 className="text-3xl font-bold text-center">Vous êtes ?</h2>
              <div className="flex flex-col gap-20 pt-16 pb-5 content-center items-center justify-center">
                <button
                  className="bg-secondary pb-3 w-2/3 h-full rounded hover:bg-secondary/80 transition duration-300 ease-in-out"
                  onClick={() => setRole("enfant")}
                >
                  <div className=" flex flex-col items-center justify-center h-full">
                    <img
                      src="images/enfant.png"
                      alt="enfant"
                      className=" w-[7rem] object-cover object-center mt-[-5rem]"
                    />

                    <h3 className="text-2xl text-center text-white">Enfant</h3>
                    <p className="text-primary font-medium">9 ans - 14 ans</p>
                  </div>
                </button>
                <button
                  className="bg-secondary pb-3 w-2/3 h-full rounded hover:bg-secondary/80 transition duration-300 ease-in-out"
                  onClick={() => setRole("adult")}
                >
                  <div className=" flex flex-col items-center justify-center h-full">
                    <img
                      src="images/adult.png"
                      alt="adulte"
                      className=" w-[7rem] object-cover object-center mt-[-5rem]"
                    />

                    <h3 className="text-2xl text-center text-white">Adulte</h3>
                    <p className="text-primary font-medium">15 ans et plus</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {role && (
            <div>
              <h2 className="text-3xl font-bold mb-5 text-center">Sign up</h2>
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-2"
              >
                <input
                  type="text"
                  placeholder="Fullname"
                  className="h-9 rounded bg-gray-100 p-2"
                  name="fullname"
                  id="fullname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullname}
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className="text-red-500">{formik.errors.fullname}</div>
                ) : null}

                {role === "enfant" && (
                  <input
                    type="text"
                    placeholder="Parent's Name"
                    className="h-9 rounded bg-gray-100 p-2"
                    name="parentName"
                    id="parentName"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                  />
                )}

                <input
                  type="email"
                  placeholder="Email"
                  className="h-9 rounded bg-gray-100 p-2"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />

                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}

                <input
                  type="text"
                  placeholder="Phone number"
                  className="h-9 rounded bg-gray-100 p-2"
                  name="phone"
                  id="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />

                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500">{formik.errors.phone}</div>
                ) : null}

                <input
                  type="date"
                  placeholder="date of birth"
                  className="h-9 rounded bg-gray-100 p-2"
                  name="dateofbirth"
                  id="dateofbirth"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateofbirth}
                />

                {formik.touched.dateofbirth && formik.errors.dateofbirth ? (
                  <div className="text-red-500">
                    {formik.errors.dateofbirth}
                  </div>
                ) : null}

                <input
                  type="text"
                  placeholder="Address"
                  className="h-9 rounded bg-gray-100 p-2"
                  name="address"
                  id="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />

                {formik.touched.address && formik.errors.address ? (
                  <div className="text-red-500">{formik.errors.address}</div>
                ) : null}

                <input
                  type="text"
                  placeholder="Feild of study"
                  className="h-9 rounded bg-gray-100 p-2"
                  name="feildofstudy"
                  id="feildofstudy"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.feildofstudy}
                />

                {formik.touched.feildofstudy && formik.errors.feildofstudy ? (
                  <div className="text-red-500">
                    {formik.errors.feildofstudy}
                  </div>
                ) : null}

                <input
                  type="password"
                  placeholder="Password"
                  className="h-9 rounded bg-gray-100 p-2"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />

                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}

                <button
                  type="submit"
                  className="bg-secondary mt-5 p-3 rounded hover:bg-secondary/80 transition duration-300 ease-in-out"
                >
                  Sign up
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="w-full bg-white flex justify-center items-center">
        <img
          src="images/sign_in_img.png"
          alt="img_illustartion_desk_pc"
          className=" w-2/3 object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Signup;
