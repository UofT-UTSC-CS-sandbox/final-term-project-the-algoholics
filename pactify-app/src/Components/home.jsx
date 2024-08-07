import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext.js';
import Footer from './footer.jsx';
import NavBar from './navBar.jsx'
import ContractHistory from './ContractHistory.jsx';
import Cookies from 'universal-cookie';
import axios from "axios";

function HomePage() {

    const { user } = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const selectOther = () => {
        navigate("/otherContract");
    }

    const selectNDA = () => {
        navigate("/ndaContract");
    }

    const selectRental = () => {
        navigate("/rentalContract");
    }

    function loadUserData() {
        axios({
            method: "get",
            url: "http://localhost:5050/api/user/getUserData",
            withCredentials: true,
        })
            .then(function (res) {
                document.getElementById("welcome").innerText = `Hi ${res.data.firstName}...`
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

    useEffect(() => {
        loadUserData();
    });


    return (
        <div>
            <NavBar />
            <div className="min-h-screen flex flex-col justify-between place-items-center bg-orange-100 p-8">
                <div className="flex flex-col bg-beige-100 w-5/12 p-8 rounded-lg mt-20">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold" id="welcome"> </h1>
                        <button onClick={openModal} className=" w-5/12 mt-4 inline-block bg-red-500 text-white py-2 px-4 rounded-full font-bold hover:bg-red-700 transition duration-300 hover:scale-105">
                            CREATE NEW +
                        </button>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold">Recent Contracts</h2>
                    </div>
                    <ContractHistory />
                </div>
            </div>
            <Footer />
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-violet-950 rounded-lg shadow-lg w-1/3 ">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-3xl font-semibold text-white">
                                Select Contract Type
                            </h2>
                            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-4xl font-black">
                                &times;
                            </button>
                        </div>
                        <div className="p-4">
                            {/* Modal content */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className=" bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-700 self-center text-center transition duration-300 hover:scale-105" onClick={selectNDA}>
                                    Non-Disclosure Agreement
                                </button>
                                <button className=" bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-700 self-center text-center transition duration-300 hover:scale-105">Prenuptual Agreement</button>
                                <button className=" bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-700 self-center text-center transition duration-300 hover:scale-105" onClick={selectRental}>
                                    Rental Agreement
                                </button>
                                <button className=" bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-700 self-center text-center transition duration-300 hover:scale-105" onClick={selectOther}>
                                    Other
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default HomePage;