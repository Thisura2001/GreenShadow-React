import {Link, useNavigate} from "react-router";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/Store.ts";
import {User} from "../Model/User.ts";
import {loginUser} from "../Reducer/UserSlice.ts";
import Swal from "sweetalert2";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    function handleLogIn(e:React.FormEvent) {
        e.preventDefault();
        const user:User ={email:email, password:password, role:role};
        dispatch(loginUser(user)).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Logging Success !',
                text: 'You are successfully logged in!',
                confirmButtonColor: '#3085d6',
            }).then(() => {
                navigate("/Dashboard");
            });
        }).catch((error) => {
            console.error('Error Logging: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Logging Failed',
                text: 'An error occurred while Logging. Please try again.',
            });
        });
    }

    return (
        <>
            <section id="signin" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-yellow-300">
                <div className="signin-wrapper grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white shadow-lg rounded-lg p-6 max-w-4xl">
                    <img
                        src="../../assets/loggingimg.jpg"
                        alt="Side Image"
                        className="hidden md:block w-full h-full object-cover rounded-lg"
                    />

                    <div className="signin-container flex flex-col items-center justify-center p-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Sign In <i className="fa-solid fa-user-large"></i>
                        </h2>

                        <form id="signinForm" className="w-full space-y-6">
                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-gray-600 mb-1">
                                    Your Email
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <i className="fa-solid fa-user absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                </div>
                            </div>

                            {/* Password Input */}
                            <div>
                                <label htmlFor="password" className="block text-gray-600 mb-1">
                                    Your Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Enter password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <i className="fa-solid fa-lock absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                </div>
                            </div>

                            <button
                                className={"w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300 flex items-center justify-center"}
                                onClick={handleLogIn}
                            >
                                Sign In
                            </button>

                        </form>

                        <p className="signup-link text-gray-600 mt-4">
                            Don't have an account?
                            <Link
                                to="/signUp"
                                id="text"
                                className="text-green-500 font-medium hover:underline"
                            >
                                Sign Up here...
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
