import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/Users";
import { adminUsers } from "../data/adminUsers";

const LogIn = () => {
  const navigate = useNavigate();

  const [authentication, setAuthentication] = useState(false);
  const [errorUser, setErrorUser] = useState("");
  const [userInput, setUserInput] = useState("");

  const handleClick = (e: any) => {
    e.preventDefault();

    if (userInput) {
      const user = users.find((user) => user.userId === userInput);

      const adminUser = adminUsers.find(
        (adminUser) => adminUser.adminId === userInput
      );

      if (user?.userId === userInput) {
        navigate(`/examSection/${user.userId}`);
      } else if (adminUser?.adminId === userInput) {
        navigate(`/admin/${adminUser.adminId}`);
      } else {
        setErrorUser("User Not Found");
      }
    }
  };

  return (
    <div className="w-full bg-bgImageLogin bg-no-repeat fixed bg-center  pt-20">
      <div className="flex flex-col w-3/4 mx-auto gap-2 pb-16 shadow-md shadow-gray-600 bg-gray-700/10 mb-24">
        <img
          src="images/editedConst.png"
          alt=""
          className="w-1/6 mx-auto mt-20"
        />
        <div className="mt-10">
          <h1 className="text-center">COLLEGE OF NURSING SCIENCE TAMBUWAL</h1>
        </div>
        <input
          className="w-3/4 border border-gray-300 rounded-lg p-2 outline-none mx-auto"
          onChange={(e) => setUserInput(e.target.value.trim())}
          type="text"
          placeholder="Enter Your Application Number"
        />
        <p className="text-red-500 text-left">{errorUser}</p>
        <button
          type="submit"
          className="bg-green-600 w-2/4 text-white rounded-lg p-2 outline-none hover:bg-green-400 mx-auto"
          onClick={handleClick}
        >
          Login
        </button>
      </div>

      <div className="">
        <p className="text-center">All rights reserved</p>
      </div>
    </div>
  );
};

export default LogIn;
