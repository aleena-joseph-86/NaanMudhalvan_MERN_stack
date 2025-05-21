import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth';

function Profile() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:3000/profile', {
          headers: { Authorization: `Bearer ${getToken()}` }
        });
        setMessage(res.data.message);
      } catch (err) {
        setMessage('Access denied or token expired');
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>{message}</p>
    </div>
  );
}

export default Profile;
