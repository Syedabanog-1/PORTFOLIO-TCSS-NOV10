'use client'
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const GeneratePDF = () => {
  // Function to handle PDF download
  const downloadPdf = async () => {
    const input = document.getElementById('content'); // Get the content div
    if (!input) return; // If no content found, do nothing

    // Convert the HTML content into a canvas using html2canvas
    const canvas = await html2canvas(input, { useCORS: true });
    const imgData = canvas.toDataURL('image/png'); // Convert the canvas to image data

    // Create a new instance of jsPDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4', // Set page format to A4
    });

    // Get the page width and height of the PDF
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Scale the image to fit A4 size
    const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
    const scaledWidth = imgWidth * ratio;
    const scaledHeight = imgHeight * ratio;

    // Add the image (converted HTML content) to the PDF
    pdf.addImage(imgData, 'PNG', 10, 10, scaledWidth, scaledHeight);

    // Save the generated PDF with the name 'download.pdf'
    pdf.save('download.pdf');
  };

  return (
    <div>
      {/* Content to be converted to PDF */}
      <div id="content" style={{ padding: '10px', border: '1px solid #ddd' }}>
        <h1>This is content that will be in the PDF</h1>
        <p>Hello World! This is Syeda Gulzar Bano</p>
        <p>Software Developer, Governor Initiative IT Program AI, Web 3.0, Metaverse, Karachi, Pakistan, 2024</p>

        {/* Escaped apostrophe for "Syeda Gulzar Bano's CV" */}
        <h2 className="text-blue-600 text-2xl font-bold mb-4">Syeda Gulzar Bano&apos;s CV</h2>
        
        <p><strong>Name:</strong> Syeda Gulzar Bano</p>
        <p><strong>Email:</strong> syedagulzarbano@gmail.com</p>
        <p><strong>Phone:</strong> +92 3363893198</p>
        <p><strong>Address:</strong> Karachi, Pakistan</p>

        {/* Education section */}
        <h3 className="text-blue-500 text-2xl font-bold mb-4">Education</h3>
        <p><strong>Higher Secondary School</strong> - Akhter Govt. School Malir Karachi, 1993-1995</p>
        <p><strong>Intermediate</strong> - Malir Cantt College Karachi, 1995-1997</p>
        <p><strong>Bachelor of Computer Science (BCS)</strong> - Florida Green University Karachi Campus, Pakistan, 1997-1999</p>
        <p><strong>Oracle Certified DBA & Developer</strong> - Karachi, Pakistan, 2022-2023</p>

        {/* Skills section */}
        <h3 className="text-blue-600 text-2xl font-bold mb-4">Skills</h3>
        <p>Good Reader, Listener, Speaker | Social Worker</p>
        <p>HTML5, CSS3, JavaScript, ReactJS, Oracle SQL, Git</p>

        {/* Work Experience section */}
        <h3 className="text-blue-600 text-2xl font-bold mb-4">Work Experience</h3>
        <p><strong>Software Developer</strong> - Oracle Corporation, 2000-2003</p>
        <p><strong>Oracle Developer</strong> - State Bank of Pakistan, 2003</p>
      </div>

      {/* Button to trigger PDF download */}
      <button onClick={downloadPdf} className="bg-blue-500 text-white p-2 mt-4">
        Download PDF
      </button>
    </div>
  );
};

export default GeneratePDF;
