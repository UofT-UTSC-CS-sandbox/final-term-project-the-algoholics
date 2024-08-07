// UserContext.js
import React, { createContext, useState , useEffect} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';



const cookies = new Cookies();

export const UserContext = createContext();
axios.defaults.withCredentials = true;
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const token = cookies.get('jwt');
      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5050/home', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
