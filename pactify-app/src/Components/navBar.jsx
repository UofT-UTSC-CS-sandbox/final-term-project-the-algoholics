import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState} from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

function NavBar(){
    const navigate = useNavigate();
    const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

    const openLogOutModal = () => {
        setIsLogOutModalOpen(true);
    }

    const closeLogOutModal = () => {
        setIsLogOutModalOpen(false);
    }

    function handleLogout() {
        // clear cookies
        const cookies = new Cookies();
        cookies.set('jwt', '', { path: "/", expires: new Date(0) });
        navigate("/");
    }

    return (
        <nav className="bg-violet-950 fixed w-full z-50 top-0 left-0">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <a href='home' className="text-red-500 text-2xl font-black">
                    Pactify
                </a>
                <div className="flex items-center space-x-4 -translate-x-10">
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    className="flex items-center -translate-x-10"
                    title={<div className="relative w-10 h-10 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-700 flex items-center translate-y-3 translate-x-12">
                                <a>
                                    <svg className="absolute w-12 h-12 transform -translate-y-5 -translate-x-1 text-amber-50 -left-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                    </svg>
                                </a> 
                            </div>}
                    menuVariant="dark"
                >
                    <NavDropdown.Item href="/accountInfo">
                        Account Info
                    </NavDropdown.Item>
                    <NavDropdown.Item href="settings">
                        Settings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={openLogOutModal}>
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>


                </div>

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

            </div>
        </nav>
        

       
      );
}

export default NavBar;