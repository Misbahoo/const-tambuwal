import { Link } from "react-router-dom";

const Header = () => {


    return (
        <>
            <div className="bg-gray-600 p-3 mb-10 flex">

                <div className="flex w-2/4 ml-8 justify-start">
                <img
                    className="w-20 rounded-md"
                    src="images/constLogo.png"
                    alt="constambuwal"
                />
                </div>

                <div className="flex w-2/4 justify-end mr-10">
                <Link to="/" className="bg-red-500 p-2 rounded-md text-white my-5">Log Out</Link>
                </div>

            </div>
        </>
    )
}

export default Header;