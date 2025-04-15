import React, { useEffect, useState } from 'react';

const IntroOverlay = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500); // Duration of animation
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center transition-all duration-700">
      <h1 className="text-white text-4xl md:text-6xl font-bold animate-fade-move">Wonder Of You</h1>
    </div>
  );
};

export default IntroOverlay;
