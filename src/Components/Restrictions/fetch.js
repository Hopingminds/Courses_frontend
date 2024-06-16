// src/components/PDFReader.js
import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';

// Set workerSrc to the default worker build.
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

const PDFReader = () => {
  const [pdfData, setPdfData] = useState(null);
  const [error, setError] = useState(null);

  const onFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileReader = new FileReader();

      fileReader.onload = async function() {
        const typedArray = new Uint8Array(this.result);
        try {
          const pdfDocument = await pdfjsLib.getDocument(typedArray).promise;
          const numPages = pdfDocument.numPages;
          let pdfText = '';
          
          for (let i = 1; i <= numPages; i++) {
            const page = await pdfDocument.getPage(i);
            const textContent = await page.getTextContent();
            textContent.items.forEach(item => {
              pdfText += item.str + ' ';
            });
          }
          setPdfData(pdfText);
        } catch (e) {
          setError('Error reading PDF file');
        }
      };

      fileReader.readAsArrayBuffer(file);
    } else {
      setError('Please select a valid PDF file');
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      {error && <div style={{color: 'red'}}>{error}</div>}
      {pdfData && <textarea rows="10" cols="50" value={pdfData} readOnly />}
    </div>
  );
};

export default PDFReader;
