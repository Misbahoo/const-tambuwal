import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { adminUsers } from "../../data/adminUsers";

const Admin = () => {
  const { adminId } = useParams();
  const navigate = useNavigate();

  // const [results, setResults] = useState(false);
  // const [studentEnglishResults, setStudentEnglishResults] = useState<{
  //   [key: string]: string;
  // }>({});
  // const [englishResults, setEnglishResults] = useState<string[]>([]);

  let studentEnglishResults: { [key: string]: string } = {};
  let englishResults: string[] = [];

  if (localStorage.length > 0) {
    // setResults(true);

    studentEnglishResults = JSON.parse(
      localStorage.getItem("englishAnswers") as string
    );
    englishResults = Object.keys(studentEnglishResults);

    // setStudentEnglishResults(

    // );
    // setEnglishResults();
  } else {
    // setResults(false);
  }

  const adminUser = adminUsers.find(
    (adminUser) => adminUser.adminId === adminId
  );

  useEffect(() => {
    if (adminUser?.adminId !== adminId) {
      navigate("/");
    }
  }, []);

  const clearResult = () => {
    localStorage.clear();
  };

  const backToLogin = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-gray-400 mx-auto w-3/4 p-3 mt-5">
        <p className="capitalize font-serif">
          <span className="font-bold">Admin</span>
        </p>
      </div>
      <div className="my-10 flex justify-center gap-3 text-white">
        <button
          type="button"
          className="btn bg-green-500"
          onClick={clearResult}
        >
          Generate Results
        </button>

        <button type="button" className="btn bg-red-600" onClick={clearResult}>
          Clear Results
        </button>

        <button type="button" className="btn bg-blue-500" onClick={backToLogin}>
          Login
        </button>
      </div>

      <div className="shadow-md shadow-gray-500 w-2/4 mx-auto p-5">
        <p className="text-2xl text-gray-500">
          Answers Selected by the Student
        </p>
        <table className="table-auto border-collapse border w-full">
          <thead>
            <tr>
              <th className="text-left">Question</th>
              <th className="text-left">Answer</th>
            </tr>
          </thead>
          <tbody>
            {englishResults.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="">{item}</td>
                  <td>{studentEnglishResults[item]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
