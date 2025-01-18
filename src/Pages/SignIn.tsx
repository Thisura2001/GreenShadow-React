import { Link } from "react-router";

export default function SignIn() {
    return (
        <>
            <section id="signin" className="min-h-screen flex items-center justify-center bg-gray-100">
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
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <i className="fa-solid fa-lock absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Link
                                to="/Dashboard"
                                id="btnlogin"
                                className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300 flex items-center justify-center"
                            >
                                Sign In
                            </Link>

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
