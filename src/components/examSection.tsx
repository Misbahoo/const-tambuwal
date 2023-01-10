import { Outlet, NavLink, useParams } from "react-router-dom";
import { useState } from "react";

import Header from "./header";
import { users } from "../data/Users";

const ExamSection = () => {
  const englishAnswers = JSON.parse(localStorage.getItem("englishAswers")!);
  const englishSubmitted = JSON.parse(
    localStorage.getItem("englishSubmitted")!
  );

  const { userId } = useParams();

  const foundUser = users.find((user) => user.userId === userId);

  type ActiveType = {
    isActive: boolean;
  };

  const navLink = ({ isActive }: ActiveType) => {
    return {
      background: isActive ? "#555" : "",
      fontSize: isActive ? "16px" : "",
      outline: "none",
      boxShadow: isActive ? "5px 5px 5px #222" : "",
      left: isActive ? "20px" : "",
    };
  };
  return (
    <>
      <Header />
      <div className="mx-auto">
        <p className="text-center text-green-500 uppercase text-4xl">
          College of Nursing Science, Tambuwal
        </p>
        <p className="text-center uppercase text-gray-700 text-3xl font-bold">
          Entrance Examination Exercise 2022/2023 Session{" "}
        </p>
        <div className="flex w-3/4 mx-auto mt-3 p-2 bg-gray-300 rounded-md shadow-sm shadow-gray-500">
          <p className="w-2/4 text-2xl capitalize font-serif">
            <span className="font-bold">Name:</span> {foundUser?.firstName}{" "}
            {foundUser?.secondName}
          </p>
          <p className="w-2/4 text-2xl capitalize font-serif">
            <span className="font-bold font-serif">Reg. No.:</span>{" "}
            {foundUser?.userId}
          </p>
        </div>
        <div className="flex w-3/4 mx-auto mt-3 p-2 bg-gray-300 rounded-md shadow-sm shadow-gray-500">
          <p className="w-2/4 text-2xl capitalize font-serif">
            <span className="font-bold">State:</span> {foundUser?.state}
          </p>
          <p className="w-2/4 text-2xl capitalize font-serif">
            <span className="font-bold font-serif">LGA:</span>{" "}
            {foundUser?.localGovt}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center ml-8 fixed">
        {!englishSubmitted ? (
          <NavLink
            to="english"
            className="bg-blue-500 text-white p-2 shadow-md shadow-gray-600 hover:shadow-gray-600 rounded-md relative hover:bg-gray-600"
            style={navLink}
          >
            English
          </NavLink>
        ) : (
          <button className="bg-gray-400 p-2 text-white relative rounded-md">
            English
          </button>
        )}

        <NavLink
          to="maths"
          className="bg-blue-500 text-white p-2 shadow-md shadow-gray-600 rounded-md relative hover:bg-gray-600"
          style={navLink}
        >
          Maths
        </NavLink>

        <NavLink
          to="chemistry"
          className="bg-blue-500 text-white p-2 shadow-md shadow-gray-600 rounded-md relative hover:bg-gray-600"
          style={navLink}
        >
          Chemistry
        </NavLink>

        <NavLink
          to="biology"
          className="bg-blue-500 text-white p-2 shadow-md shadow-gray-600 rounded-md relative hover:bg-gray-600"
          style={navLink}
        >
          Biology
        </NavLink>

        <NavLink
          to="physics"
          className="bg-blue-500 text-white p-2 shadow-md shadow-gray-600 rounded-md relative hover:bg-gray-600"
          style={navLink}
        >
          Physics
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default ExamSection;
