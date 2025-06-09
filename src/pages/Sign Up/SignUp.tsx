import React, { useState } from "react";
import UserModal from "../../components/Modals/UserModal";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const SignUp: React.FC = () => {
    const [isUserModalOpen, setUserModalOpen] = useState(false);
    const [view, setView] = useState<"register" | "socialLogin">("register");

    const openUserModal = () => setUserModalOpen(true);
    const closeUserModal = () => setUserModalOpen(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 px-4">
            
            <h1 className="text-4xl font-bold mb-2 text-center">Welcome to BookNook!</h1>
            <p className="text-gray-500 mb-8 text-center max-w-md">
                Your next chapter begins with an account
            </p>

            <div className="flex space-x-4 mb-8">
                <button
                    onClick={openUserModal}
                    className="text-white bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded font-semibold transition"
                >
                    Login
                </button>
                <button
                    onClick={() => setView("register")}
                    className={`px-6 py-2 rounded font-semibold transition text-white
                                ${view === "register" ? "bg-blue-800 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-600"}`}
                >
                    Register
                </button>
            </div>

            {view === "register" && (
                <form className="bg-gray-50 p-6 rounded shadow-md w-full max-w-md">
                    <label className="block mb-4">
                        <span className="text-gray-700">Email</span>
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 
                                        focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                            required
                        />
                    </label>
                    <label className="block mb-6">
                        <span className="text-gray-700">Password</span>
                        <input 
                            type="password"
                            placeholder="Enter your password"
                            className="mt-1 block w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 
                                        focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-800 hover:bg-blue-900 py-2 rounded font-bold transition"
                    >
                        Sign Up
                    </button>

                    <div className="mt-6 text-center text-gray-700">
                        or <button type="button" className="text-blue-500 underline" onClick={() => setView("socialLogin")}>Login</button>
                    </div>
                </form>
            )}

            {view === "socialLogin" && (
                <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md flex flex-col items-center space-y-4">
                    <p className="mb-4 text-gray-300 font-semibold">Login with other services</p>
                    <div className="flex space-x-6">
                        <button
                            aria-label="Login with Facebook"
                            className="bg-blue-700 p-3 rounded-full hover:bg-blue-600 transition"
                        >
                            <FacebookIcon style={{ color: "white" }} />
                        </button>
                        <button
                            aria-label="Login with Twitter"
                            className="bg-blue-700 p-3 rounded-full hover:bg-blue-600 transition"
                        >
                            <TwitterIcon style={{ color: "white" }} />
                        </button>
                        <button
                            aria-label="Login with Google"
                            className="bg-blue-700 p-3 rounded-full hover:bg-blue-600 transition"
                        >
                            <GoogleIcon style={{ color: "white" }} />
                        </button>
                    </div>
                    <button
                        className="mt-6 text-blue-500 underline"
                        onClick={() => setView("register")}
                    >
                        Back to Register
                    </button>
                </div>
            )}

            {isUserModalOpen && <UserModal onClose={closeUserModal} />}
        </div>
    );
};

export default SignUp;