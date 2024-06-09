import React, { useCallback, useEffect, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const maxWidth = 600;

type PDFFile = string | File | null;

export default function Sample() {
  const [file, setFile] = useState<PDFFile>('cv.pdf');
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const updateContainerWidth = useCallback(() => {
    if (containerRef) {
      setContainerWidth(containerRef.clientWidth);
    }
  }, [containerRef]);

  useEffect(() => {
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, [updateContainerWidth]);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  const goToNextPage = () => {
    if (pageNumber < numPages!) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="row d-flex align-items-center justify-content-center pt-5">
    <div className="col-12 col-md-4 pt-5">
      <div className="Example">
        <header>
        </header>
        <div className="Example__container">
          <div className="Example__container__document" ref={setContainerRef}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="m-2" style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', textAlign: 'center', display: 'inline-block' }}>
                <a href='cv.pdf' download="cv.pdf" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
                  Download CV
                </a>
              </div>
            </div>

            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
              <Page
                pageNumber={pageNumber}
                width={containerWidth}
              />
            </Document>
            {numPages && (
              <div className="p-2">
                {pageNumber > 1 && (
                  <button onClick={goToPreviousPage}>
                    Previous
                  </button>
                )}
                {pageNumber < numPages && (
                  <button onClick={goToNextPage}>
                    Next
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
