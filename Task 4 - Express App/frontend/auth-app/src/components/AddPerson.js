import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth';

function AddPerson() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');

  const handleAdd = async () => {
    try {
      const res = await axios.post('http://localhost:3000/add-person',
        { name, text },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (err) {
      setResponse('Access denied or error occurred.');
    }
  };

  return (
    <div>
      <h2>Add Person (Admin Only)</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <pre>{response}</pre>
    </div>
  );
}

export default AddPerson;
