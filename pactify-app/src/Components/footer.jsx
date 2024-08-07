import React from "react";

function Footer() {
    return (
        <footer className=" shadow bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-2">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl  whitespace-nowrap text-red-500 font-black">Pactify</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
                        <li>
                            <a href="" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-4 sm:mx-auto border-gray-700 lg:my-4" />
                <span className="block text-sm sm:text-center text-gray-400">© 2024 <a href="/" className="hover:underline">Pactify™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;