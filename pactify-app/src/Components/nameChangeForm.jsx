import React from "react";
import Footer from "./footer";
import NavBar from "./navBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NameChangeForm() {
    const navigate = useNavigate();

    function goBack() {
        navigate("/accountInfo");
    }
    
    function verifyName() {
        var firstName = document.getElementById("fName").value;
        var lastName = document.getElementById("lName").value;

        if (firstName === "" || lastName === "") {
            document.getElementById("error").innerHTML =
                "Please fill in all entries.";
            return false;
        }

        if (firstName.length > 50 || lastName.length > 50) {
            document.getElementById("error").innerHTML = "Name is too long.";
            return false;
        }

        if (!/^[a-zA-Z\s]*$/.test(firstName) || !/^[a-zA-Z\s]*$/.test(lastName)) {
            document.getElementById("error").innerHTML =
                "Name can only contain letters and spaces.";
            return false;
        } else {
            //removes previous error message during successful name change
            document.getElementById("error").innerHTML = "";
            axios({
                method: "patch",
                url: "http://localhost:5050/api/user/updateUserName",
                withCredentials: true,
                data: {
                    firstName: firstName,
                    lastName: lastName,
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
                        Change Your Name
                    </h2>
                    <p className="mb-6">
                        Enter your information in the fields below
                    </p>
                    <div className="space-y-4">
                        <input
                            type="text"
                            id="fName"
                            placeholder="First Name"
                            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-500"
                        />
                        <input
                            type="text"
                            id="lName"
                            placeholder="Last Name"
                            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-500"
                        />
                    </div>
                    <p id="error" className="text-center mt-4 text-red-600">
                        {" "}
                    </p>
                    <button
                        type="submit"
                        className="mt-6 w-full px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 hover:scale-105"
                        onClick={verifyName}
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