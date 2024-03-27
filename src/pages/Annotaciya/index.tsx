import React, { useEffect, useRef } from 'react'
import './style.css'
import CloudPdfViewer from "@cloudpdf/viewer";

export const Annotaciya = () => {

  const viewer = useRef<any>(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "7aae45f7-fef6-42bc-af54-d25a2ab0c922",
        darkMode: false
      },
      viewer.current
    ).then((instance) => { });
  }, []);

  return (
    // <div>Annotaciya</div>
    // <iframe src="https://cloudpdf.io/view/CJwaGsoGU" className='docc'></iframe>
    <div className="viewer" ref={viewer}></div>
  )
}