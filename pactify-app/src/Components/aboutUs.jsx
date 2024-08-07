import React from "react";
import img from "../business_people.png";

function AboutUs () {
    return (
        <div className="flex flex-row justify-evenly bg-slate-100 p-8 mt-8">
            <div className="flex justify-center">
                    <img
                    src={img}
                    alt="About Us"
                    className="m-auto"
                    />
            </div>
            <div className="text-center rounded-lg">
                <h2 className="text-7xl font-bold mb-4">About Us</h2>
                <p className="text-gray-700 mb-6 text-3xl">
                    We are an independent group helping individuals and small businesses
                    simplify the contract creating process. As small business owners
                    ourselves, we understand the struggles that come with running a small
                    business, and so we developed this solution to help others draft
                    contracts affordably and conveniently.
                </p>                
            </div>
        </div>
  );
};

export default AboutUs;