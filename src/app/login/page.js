"use client";
import CustomButton from "../[component]/button";
import Image from "next/image";
import { Checkbox, FormControl } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import PasswordField from "../[component]/password-filed";

const Login = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div
      style={{
        backgroundImage: 'url("/images/auth/bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" flex justify-center items-center h-[100vh] w-full "
    >
      <div className="  flex justify-between items-center  w-[95%] h-[95%] @sm:h-full">
        <div className="w-[50%] h-full @sm:hidden">
          <img
            src="/images/auth/left.png"
            className="w-full h-full"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-[50%] @sm:w-full h-[50%] @sm:h-full @sm:mt-5 flex flex-col justify-center @sm:justify-start items-center">
          <img
            className="w-[40%] @sm:w-[80%]"
            src="/images/auth/white_bgLogo.png"
          />
          <div className="w-[75%] @sm:w-full mt-10   border-2 bg-white rounded-[29.709px] @sm:border-0 flex flex-col justify-center items-center px-10">
            <div className="text-center my-5">
              <h2 className="font-bold  ">Login</h2>
              <p className="fs-18 text-[#6D6E71] my-3">
                Please enter your name and password:
              </p>
            </div>
            <div className="my-0">
              <FormControl required>
                <label className="fs-18">Email</label>
                <div className="border-2 border-[#DFE1E3] rounded-md mt-3 w-[25vw] @sm:w-80">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-3 rounded-md fs-18 bg-white focus-visible:outline-none border-0"
                  />
                </div>
                <div className="my-5">
                  <label className="fs-18">Password</label>

                  <PasswordField />
                </div>
              </FormControl>
            </div>
            <div className="flex items-start justify-start mb-3 w-[27vw] @sm:w-80">
              <Checkbox
                className="mr-2"
                checked={checked}
                onChange={handleChange}
                style={{
                  color: checked ? "#FF8F2F" : "#DFE1E3",
                }}
              />
              <div className="fs-18   @sm:w-80 mt-2 leading-normal">
                By continuing, you agree to Aakash Life’s{" "}
                <span className="text-[#FF8F2F]"> Terms of Use </span>and
                <span className="text-[#FF8F2F]"> Privacy Policy.</span>
              </div>
            </div>
            <div className="my-5 w-[25vw] @sm:w-80">
              <CustomButton ButtonName={"Send OTP"} />
            </div>

            <div className="mb-3 fs-16">
              Don’t have an account?
              <span className="text-[#FF8F2F] cursor-pointer">
                <Link href={"/"}> Signup Here</Link>
              </span>
            </div>
            <div className="mb-5 fs-16 text-[#697586]">
              <Link href={"/"}> Forgot your password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
