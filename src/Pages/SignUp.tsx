import {FaBackward} from "react-icons/fa";
import {Link} from "react-router";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/Store.ts";
import {useState} from "react";
import {User} from "../Model/User.ts";
import {registerUser} from "../Reducer/UserSlice.ts";
import Swal from "sweetalert2";
import * as React from "react";

export function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const dispatch = useDispatch<AppDispatch>();

    function handleRegister(e:React.FormEvent) {
        e.preventDefault();

        if (!email|| !password|| !role){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'All fields are required. Please fill in all the fields before saving.',
                confirmButtonColor: '#3085d6',
            });
            return;
        }
        const user:User ={email:email, password:password, role:role};
        dispatch(registerUser(user)).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'User Registered !',
                text: 'The User has been successfully Registered.',
                confirmButtonColor: '#3085d6',
            });
        }).catch((error) => {
            console.error('Error adding User: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Register Failed',
                text: 'An error occurred while saving the User. Please try again.',
            });
        });
    }

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
                                       onChange={(e) => setEmail(e.target.value)}
                                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"/>
                            </div>
                            <div>
                                <label htmlFor="password1" className="block font-medium mb-1">Password</label>
                                <input type="password" id="password1" placeholder="Enter password" required
                                       onChange={(e) => setPassword(e.target.value)}
                                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"/>
                            </div>
                            <div>
                                <label htmlFor="roleDropdown" className="block font-medium mb-1">Role</label>
                                <select id="roleDropdown" required
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
                                    <option selected disabled value="">Choose Your Role</option>
                                    <option value="ADMIN">ADMIN</option>
                                    <option value="MANAGER">MANAGER</option>
                                    <option value="SCIENTIST">SCIENTIST</option>
                                </select>
                            </div>

                            <button type="submit" id="btnSignUp"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300"
                                    onClick={handleRegister}
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
