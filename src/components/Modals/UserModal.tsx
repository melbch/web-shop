import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalWrapper from "./ModalWrapper";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserModal = ({ onClose }: { onClose: () => void }) => {
    const [view, setView] = useState<"initial" | "login">("initial");
    const navigate = useNavigate();
    
    return (
        <ModalWrapper onClose={onClose}>
            <div className={`transition-opacity duration-500 ${view === "initial" ? "opacity-100" : "opacity-0 absolute"}`}>
                {view === "initial" && (
                    <div className="text-center mt-10 mb-10">
                        <AccountCircleIcon style={{ fontSize: 48, color: "#2563eb" }} className="mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
                        <p className="text-gray-500 mt-2 max-w-sm mx-auto">
                            Log in to access your personalized library and keep track of your favorite books.
                        </p>

                        <hr className="my-6 border-gray-300 w-[200px] mx-auto" />

                        <button 
                            onClick={() => setView("login")}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-md text-white px-6 py-2 rounded max-w-md mx-auto hover:from-blue-700 hover:to-blue-800 transition duration-300 ease-in-out mt-7 mb-2"
                        >
                            Login
                        </button>

                        <p className="text-gray-500">or</p>

                        <button
                            onClick={() => {
                                onClose();
                                navigate("/signup");
                            }}
                            className="bg-gradient-to-r from-gray-300 to-gray-400 shadow-inner text-gray-800 px-6 py-2 rounded max-w-md mx-auto hover:from-gray-600 hover:to-gray-700 transition duration-300 ease-in-out mt-2 mb-7"
                        >
                            Sign Up
                        </button>
                    </div>
                )}
            </div>

            <div className={`transition-opacity duration-500 ${view === "login" ? "opacity-100" : "opacity-0 absolute"}`}>
                {view === "login" && (
                    <form className="text-left mt-7">
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-7">Login</h2>

                            <label className="flex flex-col mb-4 items-center w-[300px] mx-auto mb-4">
                                <span className="text-gray-700 mb-1 self-start">Email</span>
                                <input 
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border rounded bg-gray-50 focus:outline-none focus:ring focus:ring-blue-50"
                                    required
                                />
                            </label>
                            <label className="flex flex-col mb-4 items-center w-[300px] mx-auto mb-4">
                                <span className="text-gray-700 mb-1 self-start">Password</span>
                                <input 
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-3 py-2 border rounded bg-gray-50 focus:outline-none focus:ring focus:ring-blue-50"
                                    required
                                />
                            </label>

                            <button
                                type="submit"
                                className="w-[100px] mx-auto block bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-8"
                            >
                                Login
                            </button>

                            <button 
                                type="button"
                                onClick={() => setView("initial")}
                                className="block w-full text-center text-sm text-blue-500 underline mt-4"
                            >
                                ← Back
                            </button>
                    </form>
                )}
            </div>
        </ModalWrapper>
    );
};

export default UserModal;