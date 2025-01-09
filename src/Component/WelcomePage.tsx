
export default function WelcomePage() {
    return (
        <>
            <section id="welcomePage" className="h-screen bg-black flex flex-col">
                <header className="flex items-center w-full p-4 bg-gray-800 shadow-md z-10">
                    <div className="flex items-center">
                        <img
                            src="assests/logo.webp"
                            alt="Crop Monitoring System - Green Shadow Logo"
                            className="w-16 mr-4"
                        />
                        <span className="text-white font-bold text-lg leading-tight">
                            Crop Monitoring System <br /> Green Shadow (Pvt) Ltd.
                        </span>
                    </div>
                    <button
                        className="ml-auto bg-green-600 text-white px-6 py-2 rounded-lg font-semibold uppercase hover:bg-green-700 transition"
                        id="btnSignin"
                    >
                        Sign In <i className="fa-solid fa-user"></i>
                    </button>
                </header>

                <main className="flex items-center justify-between w-11/12 max-w-7xl mt-6 mx-auto">
                    <div className="fixed top-0 left-0 w-1/4 h-full bg-green-700"></div>

                    <div className="relative z-20">
                        <div className="w-72 h-72 bg-white/10 border-4 border-white rounded-full overflow-hidden flex items-center justify-center">
                            <img
                                src="assests/farmer.jpg"
                                alt="Background Circle"
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>
                    </div>

                    <div className="mt-20 max-w-2xl ml-12 text-white text-4xl font-light">
                        <p id="swiping-text" className="leading-snug">
                            Welcome to the Crop Management System!{' '}
                            <span
                                id="next-arrow"
                                className="ml-5 text-green-500 cursor-pointer text-6xl hover:scale-110 transition-transform"
                            >
                                ›
                            </span>
                        </p>
                    </div>

                    <div className="w-1/2 max-w-lg flex justify-end pr-5 transform translate-x-20">
                        <img
                            src="assests/home.png"
                            alt="Crop Management"
                            className="rounded-xl hover:scale-105 transition-transform"
                        />
                    </div>
                </main>
            </section>
        </>
    );
}
