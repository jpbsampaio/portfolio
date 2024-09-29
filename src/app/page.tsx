"use client";

import React, { useState, useEffect } from "react";
import NetworkGraph from "./components/NetworkGraph";

const Home: React.FC = () => {
  const [showWrapper, setShowWrapper] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      setShowWrapper(true);
    } else {
      setShowWrapper(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-5xl md:text-7xl font-bold transition-opacity duration-1000">
          Olá, sou João Paulo
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-black h-3/4 w-3/4 rounded">
          <NetworkGraph />
        </div>
      </div>
    </div>
  );
};

export default Home;
