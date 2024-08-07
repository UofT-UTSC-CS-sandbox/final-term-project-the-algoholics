import NavBar from "./navBar.jsx";
import Footer from "./footer.jsx";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "universal-cookie";

function AccountInfoPage() {
    const navigate = useNavigate();
    const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    const openLogOutModal = () => {
        setIsLogOutModalOpen(true);
    }

    const closeLogOutModal = () => {
        setIsLogOutModalOpen(false);
    }

    const openDeleteModal = () => {
        setDeleteModalOpen(true);
    }

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    }
    const goBack = () => {
        navigate("/home");
    }

    function loadUserData() {
        axios({
            method: "get",
            url: "http://localhost:5050/api/user/getUserData",
            withCredentials: true,
        })
            .then(function (res) {
                document.getElementById("name").value = `${res.data.firstName} ${res.data.lastName}`
                document.getElementById("email").value = res.data.email;
                document.getElementById("password").value = "placehold";
                console.log(res.data);
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // TODO: Add visual indicator
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    console.log(document.cookie);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
            });
    }

    function handleLogout() {
        // clear cookies
        const cookies = new Cookies();
        cookies.set('jwt', '', { path: "/", expires: new Date(0) });
        navigate("/");
    }

    function handleDelete() {
        axios({
            method: "delete",
            url: "http://localhost:5050/api/user/deleteUser",
            withCredentials: true,
        })
            .then(function (res) {
                handleLogout();
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // TODO: Add visual indicator
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    console.log(document.cookie);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
            });
    }

    useEffect(() => {
        loadUserData();
    });

    return (
        <div>
            <NavBar />
            <div className="min-h-screen flex flex-col justify-between place-items-center bg-orange-100 p-8">
                <div className="flex flex-col w-4/12 p-8 rounded-lg mt-10">
                    <button onClick={goBack} className="mb-4 w-min mt-4 inline-block bg-red-500 text-white py-2 px-2 rounded-full font-black hover:bg-red-700 transition duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <h2 className="text-3xl font-bold mb-6">My Account</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <div className="flex items-center">
                            <input
                                id="name"
                                type="text"
                                readOnly
                                className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            <button className="ml-2 text-red-500 hover:text-red-700 transition duration-300 hover:scale-125">
                                <a href="nameChange">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6 text-red-500 hover:text-red-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                        />
                                    </svg>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <div className="flex items-center">
                            <input
                                id="email"
                                type="email"
                                readOnly
                                className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            <button className="ml-2 text-red-500 hover:text-red-700 transition duration-300 hover:scale-125">
                                <a href="emailChange">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6 text-red-500 hover:text-red-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                        />
                                    </svg>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="flex items-center">
                            <input
                                id="password"
                                type="password"
                                readOnly
                                className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            <button className="ml-2 text-red-500 hover:text-red-700 transition duration-300 hover:scale-125">
                                <a href="passwordChange">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6 text-red-500 hover:text-red-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                        />
                                    </svg>
                                </a>
                            </button>
                        </div>
                    </div>
                    <hr className="my-4 sm:mx-auto border-black lg:my-4" />
                    <button className='w-4/12 bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-700 self-center text-center transition duration-300 hover:scale-105' onClick={openLogOutModal}>
                        Log Out
                    </button>
                    <button className="w-4/12 mt-4 bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-700 self-center text-center transition duration-300 hover:scale-105" onClick={openDeleteModal}>
                        Delete Account
                    </button>
                </div>
            </div>
            <Footer />
            {/* Log Out Modal */}
            {isLogOutModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-violet-950 rounded-lg shadow-lg w-1/4 ">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-semibold text-white">
                                Are you sure you want to log out?
                            </h2>
                            <button onClick={closeLogOutModal} className="text-gray-500 hover:text-gray-700 text-4xl font-black">
                                &times;
                            </button>
                        </div>
                        <div className="p-4">
                            {/* Modal content */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className=" bg-gray-400 text-white py-2 rounded-lg shadow-md hover:bg-gray-700 self-center text-center transition duration-300 hover:scale-105" onClick={closeLogOutModal}>
                                    Cancel</button>
                                <button className=" bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-700 self-center text-center transition duration-300 hover:scale-105" onClick={handleLogout}>
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Delete Account Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-violet-950 rounded-lg shadow-lg w-1/4 ">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-semibold text-white">
                                Are you sure you want to delete your account?
                            </h2>
                            <button onClick={closeDeleteModal} className="text-gray-500 hover:text-gray-700 text-4xl font-black">
                                &times;
                            </button>
                        </div>
                        <div className="p-4">
                            {/* Modal content */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className=" bg-gray-400 text-white py-2 rounded-lg shadow-md hover:bg-gray-700 self-center text-center transition duration-300 hover:scale-105" onClick={closeDeleteModal}>
                                    Cancel</button>
                                <button className=" bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-700 self-center text-center transition duration-300 hover:scale-105" onClick={handleDelete}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AccountInfoPage;
