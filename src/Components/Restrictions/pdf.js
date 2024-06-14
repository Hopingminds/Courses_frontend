import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  let pdfUrl='/davinder.pdf'
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);  // Reset to first page when a new document is loaded
  }

  function goToPreviousPage() {
    setPageNumber(pageNumber - 1);
  }

  function goToNextPage() {
    setPageNumber(pageNumber + 1);
  }

  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={goToPreviousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
