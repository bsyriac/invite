'use client';
import Image from "next/image";
import { useState } from 'react';
import CherryBlossomLoader from './components/BlossomLoader';



export default function Home() {

  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <div>
   {!loadingComplete && <CherryBlossomLoader onLoaded={handleLoadingComplete} />}
      {loadingComplete && (
        <div className="content">
          <h1>Welcome to the Actual Page!</h1>
          <p>Enjoy your content now that the cherry blossoms have finished falling.</p>
        </div>
      )}
    </div>
  );
}
