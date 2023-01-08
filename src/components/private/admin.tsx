import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { adminUsers } from "../../data/adminUsers";

const Admin = () => {
  const { adminId } = useParams();
  const navigate = useNavigate();
  const [studentEnglishResult, setStudentEgnlishResult] = useState(
    JSON.parse(localStorage.getItem("englishAswers")!)
  );
  const [englishResult, setEnglishResult] = useState(
    Object.keys(studentEnglishResult)
  );

  const adminUser = adminUsers.find(
    (adminUser) => adminUser.adminId === adminId
  );

  useEffect(() => {
    if (adminUser?.adminId !== adminId) {
      navigate("/");
    }
  }, []);

  const generateStudentResult = () => {
    //generate student result
  };

  return (
    <>
      <div className="bg-gray-400 mx-auto w-3/4 p-3 mt-5">
        <p className="capitalize font-serif">
          <span className="font-bold">Admin</span>
        </p>
      </div>
      <div className="my-10 flex justify-center">
        <button type="button" className="btn" onClick={generateStudentResult}>
          Generate Result
        </button>
      </div>

      <div className="shadow-md shadow-gray-500 w-2/4 mx-auto p-5">
        <p className="text-2xl text-gray-500">
          Answers Selected by the Student
        </p>
        <table>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
          {englishResult.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item}</td>
                <td>{studentEnglishResult[item]}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Admin;
