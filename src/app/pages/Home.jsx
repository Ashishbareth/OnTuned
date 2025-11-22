"use client";
import React, { useEffect, useState } from "react";
// Assuming these components exist in the directory structure
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  const chips = [
    { label: "LiFe💙", link: "https://youtu.be/K-Ts-NFR62o?si=Nt4-Kpopwe30UO-2" },
    { label: "DeStiny", link: "https://youtu.be/Iqu_W5W4YO4?si=nnkI5TIs-jFeqRnc" },
    { label: "PoSessIve", link: "https://youtu.be/l5sgIqzlPXc?si=conPaHMBnAmE08NK" },
    { label: "MoVe-On", link: "https://youtu.be/9a4izd3Rvdw?si=2sXxjmqXLDcyVcTS" },
    { label: "Silly❤️", link: "https://youtu.be/2ibPLYwVM38?si=vP2ZOYOZX8BvhNvC" },
    { label: "DeAtaChmenT", link: "https://youtu.be/sjeR_uVP_y0?si=Xvf8ztjLD32n8aqr" },
    { label: "GuiLt", link: "https://youtu.be/Jis04VOZyEU?si=oHnmZc4vuKXQ_K0w" },
    { label: "AdmIrEr✨", link: "https://youtu.be/eSuuEmAUbz8?si=dIO7YARuCWUvHkXG" },
    { label: "SeCrEt⚰️", link: "https://youtu.be/Dp6lbdoprZ0?si=ah-Xz53FX3QVGbQl" },
    { label: "ReaLiZatIoN🌸", link: "https://youtu.be/iwdPbQwZujY?si=tbaymQYRA8U4FKdG" },
    { label: "WhImsIcal", link: "https://youtu.be/CgQn3gsrIRc?si=oUxVIFnQeGnL1Hh9" },
    { label: "HeVeNly💫", link: "https://youtu.be/cmMiyZaSELo?si=P2zo1py_CiFUJgcZ" },
  ];

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    // Updated background and font for a modern look
<div className="bg-gray-950 min-h-screen text-white font-['cursive'] flex flex-col">
      
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content Area */}
<main className="container mx-auto px-4 py-8 flex-grow">
        
        {/* Header/Hero Section with Gradient Text */}
        <header className="py-12 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text 
                     bg-linear-to-r from-cyan-400 to-pink-500 tracking-tight leading-tight">
            Explore The Cosmic Tags
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            A curated collection of moods and insights.
          </p>
        </header>

        {/* Chips - Rebuilt with a Responsive Grid */}
        <div className="max-w-6xl mx-auto px-2 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {chips.map((chip) => (
              <a
                key={chip.label}
                href={chip.link}
                target="_blank"
                rel="noopener noreferrer"
                // New stylized classes for a "Cosmic Tag" feel
                className="
                  flex items-center justify-center text-center
                  p-5 rounded-xl border-2 border-gray-700 bg-gray-800/60
                  text-lg font-bold tracking-wide shadow-lg
                  text-cyan-300
                  transition-all duration-300 transform 
                  
                  // Hover Effects
                  hover:scale-[1.05] 
                  hover:bg-gray-700/80 
                  hover:border-pink-500 
                  hover:text-pink-400
                  // Subtle glow on hover
                  hover:shadow-pink-500/30
                "
              >
                {chip.label}
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}