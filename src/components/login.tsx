import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/Users";

const LogIn = () => {
    
    const navigate = useNavigate();

    const [authentication, setAuthentication] = useState(false);
    const [errorUser, setErrorUser] = useState("");
    const [regNumber, setRegNumber] = useState("");

    const handleClick = (e:any) => {
        e.preventDefault();
        // if (authentication) {
        //     setAuthentication(true);
        // } else {
        //     redirect("/login");
        // }
        const user = users.find(user => user.userId === regNumber);
        if(user) {
            const firstName = user.firstName;
            navigate(`/examSection/${user.userId}`);
        }else{
            setErrorUser("User Not Found");
        }

    }


    return(
    <div className="flex flex-col gap-2 w-2/4 mx-auto my-40 p-3">
        <div>
            <h1 className="text-center">CONST TAMBUWAL</h1>
        </div>
            <input className="w-full border border-gray-300 rounded-lg p-2 outline-none mx-auto"
            onChange={e => setRegNumber(e.target.value.trim())}
            type="text" />
            <p className="text-red-500 text-left">{errorUser}</p>
            <button type="submit" className="bg-green-600 w-2/4 text-white rounded-lg p-2 outline-none hover:bg-green-400 mx-auto" 
            onClick={handleClick}>Login</button>
    </div>
    )

}

export default LogIn;