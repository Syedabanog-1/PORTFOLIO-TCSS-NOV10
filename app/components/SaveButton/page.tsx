"use client"
import React, { useState, useEffect } from 'react';

const SaveButton = () => {
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('inputData');
    if (savedData) {
      setInputData(savedData);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('inputData', inputData); 
    console.log('Saved:', inputData);
    alert('Data saved successfully!');
  };

  return (
    <div className="p-4">
      <input 
        type="text" 
        value={inputData} 
        onChange={(e) => setInputData(e.target.value)} 
        className="border p-2"
      />
      <button onClick={handleSave} className="bg-blue-500 text-white p-2 ml-4">
        Save
      </button>
    </div>
  );
};

export default SaveButton;

