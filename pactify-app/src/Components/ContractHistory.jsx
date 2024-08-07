import { Modal, Table, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { set } from 'mongoose';
import ContractCard from './ContractCard.jsx';
import { UserContext } from '../UserContext.js';
import React, { useContext } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

export default function ContractHistory() {

  // 
  const [userContracts, setUserContracts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);


  function loadUserContracts() {
    axios({
      method: "get",
      url: "http://localhost:5050/api/user/getUserContracts",
      withCredentials: true,
    })
      .then(function (res) {
        setUserContracts(res.data.contracts);
      })


  }



  useEffect(() => {
    loadUserContracts();
  }, []);

  return (
    <div className="flex">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {userContracts.length > 0 ? (
          userContracts.map((contract) => (
            <ContractCard
              contract={contract} />
          ))
        ) : (
          <p className='flex self-start'>You have no posts yet!</p>
        )}
      </div>
    </div>
  );
}