import React from "react";
import Footer from "./footer";
import NavBar from "./navBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NameChangeForm() {
    const navigate = useNavigate();

    function validateEmail(email) {
        // Regular expression to validate the email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function goBack() {
        navigate("/accountInfo");
    }

    function verifyEmail() {
        var email1 = document.getElementById("email").value;
        var email2 = document.getElementById("reenterEmail").value;

        //Checks if emails are empty
        if (email1 === "" || email2 === "") {
            document.getElementById("error").innerHTML =
                "Please fill in all entries.";
            return false;
        }

        //Checks if emails match
        if (email1 !== email2) {
            document.getElementById("error").innerHTML =
                "Emails do not match.";
            return false;
        }

        if (!validateEmail(email1)) {
            document.getElementById("error").innerHTML =
                "Please Enter a valid email address.";
            return false;
        } else {
            //removes previous error message during successful name change
            document.getElementById("error").innerHTML = "";
            axios({
                method: "patch",
                url: "http://localhost:5050/api/user/updateUserEmail",
                withCredentials: true,
                data: {
                    email: email1
                },
            })
                .then((res) => {
                    navigate("/accountInfo");
                })
                .catch(function (error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                        document.getElementById("error").innerHTML = "Something went wrong. Please try again later.";
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
    }

    return (
        <div className="min-h-screen flex flex-col justify-between bg-slate-100">
            <NavBar />
            <div className="flex items-between justify-center flex-grow">
                <div className="bg-slate-100 rounded-3xl p-8 w-full max-w-md m-16">
                    <button onClick={goBack} className="mb-4 w-min mt-4 inline-block bg-red-500 text-white py-2 px-2 rounded-full font-black hover:bg-red-700 transition duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <h2 className="text-3xl font-bold mb-2">
                        Change Your Email
                    </h2>
                    <p className="mb-6">
                        Enter your information in the fields below
                    </p>
                    <div className="space-y-4">
                        <input
                            type="text"
                            id="email"
                            placeholder="Enter New Email"
                            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-500"
                        />
                        <input
                            type="text"
                            id="reenterEmail"
                            placeholder="Re-enter New Email"
                            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-500"
                        />
                    </div>
                    <p id="error" className="text-center mt-4 text-red-600">
                        {" "}
                    </p>
                    <button
                        type="submit"
                        className="mt-6 w-full px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 hover:scale-105"
                        onClick={verifyEmail}
                    >
                        Done
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NameChangeForm;