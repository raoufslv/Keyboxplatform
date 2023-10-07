import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:5001/api/auth/signin",
          values
        );
        console.log(response.data); // Handle successful response here
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("fullname", response.data.fullname);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("roles", response.data.roles);
        window.location.href = "/";
      } catch (error) {
        console.error(error); // Handle error here
      }
    },
  });

  return (
    <div className="bg-gradient-to-br from-primary/80 to-primary h-screen w-screen flex">
      <div className=" flex flex-col items-center w-2/3">
        <img
          src="logos/logo_keybox_white.png"
          alt="logo_keybox"
          className="w-[7rem] object-cover object-center cursor-pointer"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <div className=" bg-white rounded-xl px-5 py-5 w-[22rem]">
          <h2 className="text-3xl font-bold mb-5 text-center">Sign in</h2>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="email">Email</label>
              <div className=" relative">
                <img
                  src="icons/Letter.svg"
                  alt="icon_email"
                  className="object-cover rounded object-center absolute bg-secondary p-1  right-0 top-0 h-9 w-9"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className=" bg-gray-100 rounded h-9 w-full"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <div className=" relative">
                <img
                  src="icons/Lock.svg"
                  alt="icon_email"
                  className="object-cover rounded object-center absolute bg-secondary p-1 right-0 top-0 h-9 w-9"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className=" bg-gray-100 rounded h-9 w-full"
                />
                <a
                  href="/"
                  className=" text-xs absolute right-0 bottom-[-1rem] underline"
                >
                  Forgot password ?
                </a>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>

            <button
              type="submit"
              className="bg-secondary text-white font-bold mt-5 p-3 rounded hover:bg-secondary/80 transition duration-300 ease-in-out"
            >
              Sign in
            </button>
          </form>
          <div>
            <div className="flex justify-center items-center gap-5 mt-5">
              <hr className="w-1/3 h-[2px] bg-secondary/40 border-none" />
              or
              <hr className="w-1/3 h-[2px] bg-secondary/40 border-none" />
            </div>

            <button
              onClick={() => {
                window.location.href = "/signup";
              }}
              className="font-bold bg-white border border-secondary mt-5 p-3 rounded hover:bg-secondary transition duration-300 ease-in-out w-full"
            >
              Sign up
            </button>
          </div>
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

export default Signin;
