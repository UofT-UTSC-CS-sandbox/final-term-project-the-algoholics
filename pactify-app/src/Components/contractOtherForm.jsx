import React, { useState } from "react";
import Footer from "./footer";
import NavBar from "./navBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import RichEditor from "./richTextEditor";
import "react-datepicker/dist/react-datepicker.css";
import Saveform from "./Save";
import { handleOpenSave, handleCloseSave, handleSubmit } from "../uploadUtils";

function ContractOtherForm() {
    const navigate = useNavigate();
    const [isResponseVisible, setIsResponseVisible] = useState(false);
    const [response, setResponse] = useState('');
    const [isloading, setLoading] = useState(false);
    const [date, setDate] = useState('');
    const [isSaveOpen, setIsSaveOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');



    function generateContract() {
        let style = document.getElementById("style").value;
        let instructions = document.getElementById("instructions").value;
        let agreementDate = document.getElementById("date-of-agreement").value; //Date of agreement


        //If style or instructions are empty, display error message
        if (style === "" || instructions === "" || agreementDate === "") {
            document.getElementById("error").innerHTML = "Please fill in all entries.";
            return false;
        }
        else {
            let styleString = "";
            if (style === "Formal") {
                styleString = "This is a formal contract. It should be written in a professional manner. It should be used for business purposes. \
                                Legal language and formatting should be used. There should be a clear section for signatures at the bottom. Be sure to include other regular boilerplate clauses/sections such \
                                that are necessary for a formal contract of the specified type.";
            } else if (style === "Informal") {
                styleString = "This is an informal contract, meaning that it should be written in a casual manner. It should be used for personal purposes.";
            }
            //removes previous error message during successful contract generation
            document.getElementById("error").innerHTML = "";
            setLoading(true);
            axios({
                method: "post",
                url: "http://localhost:5050/api/chatGPT",
                withCredentials: true,
                data:
                {
                    "context": `You are an AI contract generator. You are tasked with generating a contract based on the user's instructions. ${styleString}. \
                                IMPORTANT: Use <br> for line breaks between paragraphs. Before and after every header, use <br>. Use HTML formatting for the contract.\
                                Use <h1> for headings, <h2> for subheadings, <p> for paragraphs, <ul> for lists, <li> for list items, <b> for bold text, <i> for italic text, <u> for underlined text.`,
                    "message": `Date of Agreement (MM/DD/YYYY): ${agreementDate}.
                                Instructions: ${instructions}`,
                },
            }) //
                .then((res) => {
                    let contract = res.data.message[1].content;
                    contract = contract.replace("```html", ""); //Strip ```html from the beginning of the contract
                    contract = contract.replace("```", ""); //Strip ``` from the end of the contract
                    setResponse(contract);
                    console.log("Contract Generated!");
                    setLoading(false);
                    setIsResponseVisible(true);
                })

                .catch(function (error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                        console.log(error.response);
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
                }
                );
        }
    }

    return (
        <div>
            <NavBar />
            <div className="min-h-screen flex flex-col justify-between place-items-center bg-slate-100 p-8">
                <div className="flex flex-col w-7/12 p-8 rounded-lg mt-10">
                    <button onClick={() => navigate(-1)} className="mb-4 w-min mt-4 inline-block bg-red-500 text-white py-2 px-2 rounded-full font-black hover:bg-red-700 transition duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <h1 className="text-5xl font-bold mb-2">Custom Contract</h1>
                    <h2 className="text-3xl font-bold mb-6">Enter Information</h2>
                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="style">
                            Style
                        </label>
                        <div className="flex items-center">
                            <select
                                id="style"
                                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-red-500"
                            >
                                <option className=" text-gray-500" value="">Select an option</option>
                                <option value="Formal">Formal</option>
                                <option value="Informal">Informal</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4" >
                        <label className="block text-base font-medium text-gray-700 mb-2">
                            Date of Agreement (MM/DD/YYYY):
                        </label>
                        <DatePicker
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-red-500"
                            id="date-of-agreement"
                            selected={date} onChange={(date) => setDate(date)}
                            label="Select Date">
                        </DatePicker>
                    </div>
                    <div className="mb-4">
                        <label className="block text-base font-medium text-gray-700">
                            Contract Details:
                        </label>
                        <div className="font-small text-slate-600 mb-2">
                            Please enter the specific instructions for the contract you would like to generate using natural language, e.g. the names of the parties involved, the terms of the agreement, etc.
                        </div>
                        <div className="flex items-center">
                            <textarea
                                id="instructions"
                                type="text"
                                rows={4}
                                placeholder="Enter instructions here"
                                className="w-full p-2 border border-gray-300 rounded-md shadow-sm overflow-y-auto resize-y focus:outline-none focus:ring-4 focus:ring-red-500"
                            ></textarea>
                        </div>
                    </div>
                    <p id="error" className="text-center my-4 text-red-600"></p>
                    <button
                        type="submit"
                        className=" mb-4 w-1/2 self-center px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 hover:scale-105"
                        onClick={generateContract}
                    >
                        Generate
                    </button>

                    {isloading && (<div className="border-gray-300 mb-4 h-14 w-14 animate-spin rounded-full border-8 border-t-red-500 self-center" />)}
                    {isResponseVisible && (
                        <div className="mb-4 flex flex-col">
                            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="style">
                                Edit Contract Below
                            </label>
                            <RichEditor initialValue={response} onValueChange={setResponse} />
                            <button
                                onClick={() => handleOpenSave(setIsSaveOpen)}
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Save
                            </button>
                            {isSaveOpen && (
                                <Saveform
                                    handleClose={() => handleCloseSave(setIsSaveOpen, setErrorMessage)}
                                    handleSubmit={(name) => handleSubmit(name, response, setIsSaveOpen, navigate, setErrorMessage)}
                                    errorMessage={errorMessage}
                                    setErrorMessage={setErrorMessage}
                                />
                            )}
                        </div>
                    )}

                    <hr className="my-4 sm:mx-auto border-black lg:my-4" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContractOtherForm;