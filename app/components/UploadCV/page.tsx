"use client"

import React, { useState } from 'react';

const CVUploader = () => {
  const [file, setFile] = useState<File | null>(null); 

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]); 
    }
  };

  const handleDownload = () => {
    if (file) {
      const url = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      a.click();
      URL.revokeObjectURL(url); 
    }
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleUpload} className="mb-4" />
      {file && (
        <button onClick={handleDownload} className="bg-green-500 text-white p-2">
          Download {file.name}
        </button>
      )}
    </div>
  );
};

export default CVUploader;

