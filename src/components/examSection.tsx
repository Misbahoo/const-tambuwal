import { Outlet, NavLink, useParams } from "react-router-dom";

import Header from "./header";
import {users} from "../data/Users";


const ExamSection = () => {


    const {userId} = useParams();

    const foundUser = users.find(user => user.userId === userId);

    type ActiveType = {
        isActive: boolean;
      };

    const navLink = ({ isActive }: ActiveType) => {
        return {
          background: isActive ? "#555" : "",
          fontSize: isActive ? "16px" : "",
          outline: isActive ? "none" : "none",
          left: isActive ? "20px" : "",
        };
      };
    return (
        <>

            <Header />
            <div className="mx-auto">
                <p className="text-center text-green-500 uppercase text-4xl">College of Nursing Science Tambuwal</p>
                <p className="text-center uppercase text-gray-700 text-3xl font-bold">Entry Exermination Exercise 2022/2023 Session </p>
                <div className="flex w-3/4 mx-auto mt-3 p-2 bg-gray-300 rounded-md shadow-sm shadow-gray-500">
                    <p className="w-2/4 text-2xl capitalize font-serif"><span className="font-bold">Name:</span> {foundUser?.firstName} {foundUser?.secondName}</p>
                    <p className="w-2/4 text-2xl capitalize font-serif"><span className="font-bold font-serif">Reg. No.:</span> {foundUser?.userId}</p>
                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center ml-8 fixed">
                <NavLink
                to="english" 
                className="bg-blue-500 text-white p-2 shadow-md shadow-blue-500 hover:shadow-gray-600 rounded-md relative hover:bg-gray-600"
                style={navLink}>
                    English
                </NavLink>
                <NavLink
                to="maths"
                className="bg-blue-500 text-white p-2 shadow-md shadow-blue-500 rounded-md relative hover:bg-gray-600"
                style={navLink}>
                    Maths
                </NavLink>
                <NavLink
                to="chemistry"
                className="bg-blue-500 text-white p-2 shadow-md shadow-blue-500 rounded-md relative hover:bg-gray-600"
                style={navLink}>
                    Chemistry
                </NavLink>
                <NavLink
                to="biology"
                className="bg-blue-500 text-white p-2 shadow-md shadow-blue-500 rounded-md relative hover:bg-gray-600"
                style={navLink}>
                    Biology
                </NavLink>
                <NavLink
                to="physics"
                className="bg-blue-500 text-white p-2 shadow-md shadow-blue-500 rounded-md relative hover:bg-gray-600"
                style={navLink}>
                    Physics
                </NavLink>
            </div>
            <Outlet />
        </>
    )
}


export default ExamSection;