"use client"
import React from 'react';
import GeneratePDF from './components/GeneratePDF/page';
import UploadCV from './components/UploadCV/page';
import SaveButton from './components/SaveButton/page';
import "./globals.css";


const Page = () => {
  return (
   
    
    <div>
      <h1 className="bg-green-300 text-2xl  text-green-900 font-bold mb-4">My PORTFOLIO</h1>
      
      {/* Generate PDF */}
      <GeneratePDF />

      {/* CV Upload/Download */}
      <UploadCV />

      {/* Save Button */}
      <SaveButton />
      
    </div>
  
  );
};

export default Page;

