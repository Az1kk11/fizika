import React, { useEffect, useRef } from 'react'
import CloudPdfViewer from "@cloudpdf/viewer";

export const AmeliyTekst7:React.FC = () => {
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
    <div className="viewer" ref={viewer}></div>
  )
}