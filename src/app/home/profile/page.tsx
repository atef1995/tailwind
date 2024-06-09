"use client";

import BlurredElements from "@/components/ui/BlurredElements";
import Spinner from "@/components/ui/Spinner";
import loginMock from "@/utils/loginMock";
import { useState } from "react";

const ProfilePage = () => {
  const [responseError, setResponseError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password) {
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
    }
    if (!email) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }

    if (!password || !email) {
      return;
    }

    setLoading(true);

    const res = (await loginMock(email, password)) as string;
    if (res === "Login success") {
      setResponseError("");
      setSuccessResponse(res);
    } else {
      setResponseError(res);
      setSuccessResponse("");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full font-mono bg-gradient-to-tl from-blue-700/10 via-blue-800/5 to-blue-900/10">
      <BlurredElements />
      <form
        onSubmit={handleSubmit}
        className="absolute  w-72 sm:w-80 h-96 p-10 space-y-2 bg-blue-900/25 rounded backdrop-blur-2xl shadow-2xl"
      >
        {successResponse ? (
          <div className="flex flex-col justify-center items-center space-y-5 w-full">
            <Spinner />
            <div className="px-2 py-2  text-green-200 rounded text-sm">
              {successResponse + " redirecting..."}
            </div>
          </div>
        ) : (
          <>
            <h1 className="w-full text-2xl text-center text-white my-5">
              Login
            </h1>
            {responseError && (
              <div className="w-full bg-red-500/25 border border-red-500/30 text-red-700 backdrop-blur-3xl shadow-2xl px-4 py-2 mb-2 rounded text-sm">
                {responseError}
              </div>
            )}
            <label htmlFor="email" className={``}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              aria-label="email"
              placeholder={`${
                isEmailError ? "This field is required" : "Enter your email"
              }`}
              className={`w-full p-2 border rounded bg-transparent focus:shadow-md focus:shadow-gray-500/50 focus:outline-none shadow-lg border-gray-600/50 transition-shadow duration-200 ease-in-out ${
                isEmailError
                  ? "border-red-500/50 placeholder-red-500 animate-pulse"
                  : ""
              }`}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className={``}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={`w-full p-2 border rounded bg-transparent focus:shadow-md focus:shadow-gray-500/50 focus:outline-none shadow-lg border-gray-600/50 transition-shadow duration-200 ease-in-out ${
                isEmailError
                  ? "border-red-500/50 placeholder-red-500 animate-pulse"
                  : ""
              }`}
              aria-label="Password"
              placeholder={`${
                isPasswordError
                  ? "This field is required"
                  : "Enter your password"
              }`}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="remember"
              className="block text-sm mt-1 text-white cursor-pointer"
            >
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="mr-1 cursor-pointer w-3 h-3 text-blue-600 accent-blue-500 bg-gray-100 border-gray-300 rounded-lg  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              Remember me
            </label>
            <div className="flex justify-end items-end w-full">
              <button
                type="submit"
                className={`flex place-content-center w-20 p-2 rounded bg-gradient-to-tr from-blue-700/30 via-blue-800/20 to-blue-900/20 hover:from-blue-800 hover:via-blue-800/80 hover:to-blue-950 hover:shadow-md  hover:shadow-blue-900/50 active:scale-95 transition-all ease-in-out duration-300 `}
              >
                {loading ? <Spinner /> : "Login"}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;
