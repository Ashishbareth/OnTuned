"use client";
import React from "react";
import { Mail, Phone, Linkedin, User } from "lucide-react"; // Importing icons for a clean look

export default function Footer() {
  // Removed 'fixed bottom-0 left-0 w-full z-50' for better general responsiveness.
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-800 shadow-2xl mt-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main content row: Stacks vertically on mobile, switches to horizontal on 'sm' and up */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
          
          {/* LEFT SIDE: Branding and Copyright */}
          {/* Stacks logo/name above contact links on extra-small screens */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4 text-center">
            
            {/* Logo/Name */}
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-wider">
                <span className="text-blue-500">On</span>Tuned
              </h2>
              <p className="text-xs text-gray-500">Mood management platform</p>
            </div>
            
            {/* Copyright integrated - Always visible */}
            <p className="text-xs text-gray-600 border-t pt-2 mt-2 sm:border-l sm:pt-0 sm:mt-0 sm:pl-4 border-gray-800">
                © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* RIGHT SIDE: Contact Details - Horizontal and compact, centers on mobile */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-5 mt-4 sm:mt-0">
            
            {/* Email */}
            <a
              href="mailto:ashishbareth@gmail.com"
              className="flex items-center space-x-1 text-gray-300 hover:text-pink-300 text-sm transition duration-200 group"
              title="Email Ashish Bareth"
            >
              <Mail className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
              <span className="hidden lg:inline">ashishbareth@gmail.com</span>
            </a>

            {/* Phone (Icon only on md, full number on xl) */}
            <div className="flex items-center space-x-1 text-gray-400">
              <Phone className="w-5 h-5 text-pink-400" />
              <span className="text-sm hidden xl:inline">
                
              </span>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ashishbareth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-300 hover:text-pink-300 text-sm transition duration-200 group"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
              <span className="hidden lg:inline">LinkedIn</span>
            </a>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
}