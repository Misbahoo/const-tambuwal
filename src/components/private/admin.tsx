import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { adminUsers } from "../../data/adminUsers";
import { users } from "../../data/Users";

const Admin = () => {
  const { adminId } = useParams();
  const navigate = useNavigate();

  const [userId, setUserId] = useState<string>(() => {
    let uid: string = "";
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === "userId") {
          uid = localStorage.getItem("userId") as string;
        }
      }
      return JSON.parse(uid);
    }
  });
  const [results, setResults] = useState(false);
  const [studentEnglishResults, setStudentEnglishResults] = useState(() => {
    if (localStorage.length > 0) {
      let englishAnswers: { [key: string]: string } = {};
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === "englishAnswers") {
          englishAnswers = JSON.parse(
            localStorage.getItem("englishAnswers") as string
          );
        }
      }
      return englishAnswers;
    }
  });
  const [englishResults, setEnglishResults] = useState<string[]>([]);

  const adminUser = adminUsers.find(
    (adminUser) => adminUser.adminId === adminId
  );
  const [userFound, setUserFound] = useState(() => {
    return users.find((user) => user.userId === userId);
  });

  useEffect(() => {
    if (adminUser?.adminId !== adminId) {
      const cleanup = () => {
        navigate("/");
      };
      return cleanup;
    }
  }, [adminUser]);

  useEffect(() => {
    if (localStorage.length > 0) {
      setEnglishResults(Object.keys(studentEnglishResults!));
    }
  }, [localStorage]);

  const generateResult = () => {
    setResults(true);
  };

  const clearResult = () => {
    localStorage.clear();
    setResults(false);
  };

  const backToLogin = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-gray-400 mx-auto w-3/4 p-3 mt-5">
        <p className="capitalize font-serif text-center">
          <span className="font-bold uppercase text-white text-2xl">
            student result
          </span>
        </p>
      </div>
      <div className="my-10 flex justify-center gap-3 text-white">
        <button
          type="button"
          className="btn bg-green-500"
          onClick={generateResult}
        >
          Display Results
        </button>

        <button type="button" className="btn bg-blue-500" onClick={backToLogin}>
          Login
        </button>
      </div>
      {results ? (
        <div>
          <div className="shadow-md shadow-gray-500 w-2/4 mx-auto p-5">
            <p className="text-2xl text-gray-500">
              Answers selected by:{" "}
              <span className="capitalize font-serif font-bold">
                {userFound?.firstName} {userFound?.secondName}
              </span>
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
                      <td>{studentEnglishResults![item]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-2/4 mx-auto mt-50 p-5">
            <button
              type="button"
              className="btn bg-red-600 text-white"
              onClick={clearResult}
            >
              Clear Results
            </button>
          </div>
        </div>
      ) : (
        <div className="w-2/4 bg-gray-400 p-5 mx-auto rounded-md">
          <p className="text-4xl text-white text-center">
            Click the above Display button to view result
          </p>
        </div>
      )}
    </>
  );
};

export default Admin;
