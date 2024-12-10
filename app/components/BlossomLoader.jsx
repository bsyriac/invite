// components/CherryBlossomLoader.js
import { useEffect, useState } from 'react';

const generateBlossoms = () => {
  const blossoms = [];
  for (let i = 0; i < 30; i++) {
    const randomX = Math.random() * 100;
    const randomDelay = Math.random() * 10;
    blossoms.push(
      <div
        key={i}
        className="blossom"
        style={{
          left: `${randomX}%`,
          animationDelay: `${randomDelay}s`,
        }}
      >
        <img src="/invite/cherry-blossom.png" alt="blossom" />
      </div>
    );
  }
  return blossoms;
};

const CherryBlossomLoader = ({ onLoaded }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoaded(); // Notify parent when loading is complete
    }, 5000); // Set the time for how long the loading screen lasts (5 seconds here)
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loader-wrapper">
      <div className="loader">Loading...</div>
      <div className="falling-blossoms">{generateBlossoms()}</div>
    </div>
  ) : null;
};

export default CherryBlossomLoader;
