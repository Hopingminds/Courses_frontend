// src/components/PdfAudio.js
import React, { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

const Pdfaudio = () => {
  const [pdfText, setPdfText] = useState('');

  const fetchPDFAndExtractText = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      extractTextFromPDF(blob);
    } catch (error) {
      console.error('Failed to fetch the PDF file:', error);
    }
  };

  const extractTextFromPDF = async (file) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const typedarray = new Uint8Array(e.target.result);
      const pdf = await pdfjsLib.getDocument(typedarray).promise;
      let extractedText = '';

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        textContent.items.forEach(item => {
          extractedText += item.str + ' ';
        });
      }

      console.log(extractedText);
      setPdfText(extractedText);
      textToAudio(extractedText);
    };

    reader.readAsArrayBuffer(file);
  };

  const textToAudio = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    fetchPDFAndExtractText('https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/assets/1712060733811-react%20full%20stack%20pdf.pdf');
  }, []);

  return (
    <div>
      <h1>PDF to Audio</h1>
      <textarea value={pdfText} readOnly rows="10" cols="50"></textarea>
    </div>
  );
};

export default Pdfaudio;
