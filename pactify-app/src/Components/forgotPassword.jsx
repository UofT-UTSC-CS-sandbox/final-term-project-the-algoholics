import React from 'react';
import Footer from './footer';

function ForgotPasswordPage(){
    return (
        <div className="min-h-screen flex flex-col justify-between bg-violet-950">
            <div className="flex items-center justify-center flex-grow">
                <div className="bg-slate-100 rounded-3xl shadow-lg p-8 w-full max-w-md m-16">
                    <h2 className="text-3xl font-bold text-center mb-2">Change your password</h2>
                    <p className="text-center mb-6">Enter your information in the fields below</p>
                    <div className="space-y-4">
                        <input 
                            type="text" 
                            id = "email"
                            placeholder="Email" 
                            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-500"
                        />
                        <input 
                            type="password" 
                            id = "password1"
                            placeholder="New Password" 
                            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-500"
                        />
                        <input 
                            type="password" 
                            id = "password2"
                            placeholder="Re-enter New Password" 
                            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-500"
                        />
                    </div>
                    <p id="error" className="text-center mt-4 text-red-600"> </p>
                    <button 
                        type="submit" 
                        className="mt-6 w-full px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 hover:scale-105"
                        onClick={verifyPassword}
                    >
                        Change Password
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ForgotPasswordPage;

function verifyPassword(){
    var pw1 = document.getElementById("password1").value;
    var pw2 = document.getElementById("password2").value;
    var email = document.getElementById("email").value;

    if (pw1==="" || pw2==="" || email===""){
        document.getElementById("error").innerHTML = "Please fill in all entries.";
        return false;
    }

    if (pw1 !== pw2){
        document.getElementById("error").innerHTML = "Re-entered password does not match."
        return false;
    }

    else {  //removes previous error message during successful sign-up
        document.getElementById("error").innerHTML = ""
    }
}