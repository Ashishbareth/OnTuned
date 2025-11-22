"use client";

import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

export default function AboutPage() {
  return (
    <div className="bg-gray-950 min-h-screen text-white font-['cursive'] flex-1 flex flex-col ">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <div className="max-w-3xl mx-auto px-6 py-12 text-center space-y-6 ">
        <h1 className="text-4xl font-extrabold tracking-wide">
          Hey, I'm <span className="text-pink-400">Ashish 💫</span>
        </h1>

        <p className="text-lg leading-relaxed text-gray-300">
          This lil’ space on the internet is basically my vibe collection 🎧✨  
          Every chip you see is connected to a feeling, a moment, or a phase  
          that shaped me. I wanted to make something simple, aesthetic,  
          and kinda personal — something that feels like scrolling through  
          my own moods.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
       The idea came from a simple thought: all the memories I’ve tied to music needed a place to live — a small personal space where I could keep them together. So I figured… why not build a website for it?
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          You can also create your own chips here — your moods, your moments,  
  your soundtrack.  
  A simple space to keep the feelings that matter, in your own way.

          
        </p>

        {/* Encouragement Section */}
        <p className="text-lg leading-relaxed text-blue-300 font-semibold">
         Still building this space… adding more feels, fixing things,  
          making it smoother. So yeah, it’s a work in progress 👨‍💻🌙  
          but it’s growing — just like me.
        </p>

        <p className="text-xl font-bold text-pink-300">
          Thanks for visiting 🤍 stay a bit, vibe a bit.
        </p>
      </div>
     <div className="mt-100">

      <Footer />
     </div>
    </div>
  );
}
