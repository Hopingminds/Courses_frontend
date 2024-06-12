// import React, { useEffect, useRef } from 'react';
// import * as pdfjsLib from 'pdfjs-dist';
// import 'pdfjs-dist/build/pdf.worker.entry';
// import './pdf.css';

// const PdfViewer = () => {
//   const containerRef = useRef(null);
//   let url='https://hoping-minds-courses.s3.ap-south-1.amazonaws.com/assets/1712060733811-react%20full%20stack%20pdf.pdf'

//   useEffect(() => {
//     const container = containerRef.current;

//     pdfjsLib.getDocument(url).promise.then(pdf => {
//       for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
//         pdf.getPage(pageNumber).then(page => {
//           const viewport = page.getViewport({ scale: 1 });
//           const canvas = document.createElement('canvas');
//           canvas.className = 'pdf-page';
//           const context = canvas.getContext('2d');
//           canvas.height = viewport.height;
//           canvas.width = viewport.width;
          
//           const renderContext = {
//             canvasContext: context,
//             viewport: viewport
//           };
//           page.render(renderContext).promise.then(() => {
//             container.appendChild(canvas);
//           });
//         });
//       }
//     });
//   }, [url]);

//   return <div id="pdf-container" ref={containerRef}></div>;
// };

// export default PdfViewer;
