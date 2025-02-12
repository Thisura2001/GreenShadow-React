import {Link} from "react-router";

export default function WelcomePage(){
    return (
        <div
            className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex flex-col items-center justify-center relative">
            <div className="absolute top-4 right-4">
               <Link
                to={"/SignIn"}
                className="bg-white text-green-700 px-6 py-2 rounded-full shadow-lg hover:bg-green-50 transition duration-300 ease-in-out"
               >
                   Sign In
               </Link>
            </div>
            <div className="text-center animate-fade-in">
                <h1 className="text-6xl font-bold text-white mb-4">Green Shadow 🎍</h1>
                <p className="text-2xl text-white mb-8">Crop Monitoring System</p>
                <p className="text-lg text-white font-bold max-w-2xl mx-auto">
                    Empowering farmers with real-time crop monitoring and analytics to
                    maximize yield and minimize risks ✅.
                </p>
            </div>
            <div className="mt-12 animate-fade-in">
                <img
                    src="../../assets/farmer.jpg"
                    alt="Crop Field"
                    className=" shadow-2xl rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
                />
            </div>
            <footer className="absolute bottom-4 text-white text-sm">
                &copy; 2024 Thisura Liyanage. All rights reserved.
            </footer>
        </div>
    )
}