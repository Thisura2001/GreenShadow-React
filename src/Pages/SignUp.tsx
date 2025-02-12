import {FaBackward} from "react-icons/fa";
import {Link} from "react-router";

export function Signup() {
    return(
        <>
            <section id="signup"
                     className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-600  to-blue-700 p-5">
                <button
                    id="backBtn"
                    className="absolute top-5 left-5 text-white bg-blue-800 p-2 rounded-full shadow hover:bg-blue-900"
                >
                    <Link
                        to="/SignIn"
                        id="text"
                        className="flex items-center space-x-2 text-white hover:underline"
                    >
                        <FaBackward/>
                    </Link>
                </button>


                <div className="flex w-[900px] shadow-lg rounded-lg overflow-hidden">
                    <img src="../../assets/signupimg.jpg" alt="Side Image" className="w-1/2 object-cover"/>

                    <div className="w-1/2 bg-blue-900 p-8 text-white flex flex-col items-center">
                        <h1 className="text-3xl font-bold mb-6">Signup <i className="fa-solid fa-user-plus"></i></h1>

                        <form id="signupForm" className="w-full space-y-4">
                            <div>
                                <label htmlFor="email1" className="block font-medium mb-1">Email</label>
                                <input type="email" id="email1" placeholder="Enter email" required
                                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"/>
                            </div>
                            <div>
                                <label htmlFor="password1" className="block font-medium mb-1">Password</label>
                                <input type="password" id="password1" placeholder="Enter password" required
                                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"/>
                            </div>
                            <div>
                                <label htmlFor="roleDropdown" className="block font-medium mb-1">Role</label>
                                <select id="roleDropdown" required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
                                    <option selected disabled value="">Choose Your Role</option>
                                    <option value="ADMIN">ADMIN</option>
                                    <option value="MANAGER">MANAGER</option>
                                    <option value="SCIENTIST">SCIENTIST</option>
                                </select>
                            </div>

                            <button type="submit" id="btnSignUp"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
