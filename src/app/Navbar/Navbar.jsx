"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons
import { usePathname } from 'next/navigation'; // Hook to check active path (assuming next 13/14)

// Define the navigation items
const navItems = [
  { name: "Home", href: "/" },
  { name: "Create", href: "/Create" },
  { name: "About", href: "/About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // Get the current path for active state

  // Function to determine the link classes, including active state
  const linkClasses = (href) => {
    // Check if the current path matches the link's href
    const isActive = pathname === href;
    
    return `relative text-lg transition duration-300 ease-in-out py-2 px-1 
            ${isActive 
              ? 'text-blue-500 font-semibold after:scale-x-100' // Active state
              : 'text-gray-200 hover:text-blue-400 after:scale-x-0' // Inactive state
            } 
            after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-500 after:transition-transform after:duration-300 after:origin-left
            hover:after:scale-x-100`;
  };

  return (
    <nav className="bg-gray-900 text-white px-4 md:px-8 py-3 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      
      {/* Logo */}
      <Link href="/" className="text-3xl font-extrabold text-white tracking-wider">
        <span className="text-blue-500">On</span>Tuned
      </Link>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 lg:space-x-10">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className={linkClasses(item.href)}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white p-2 rounded-md hover:bg-gray-800 transition duration-300"
        onClick={() => setOpen(!open)}
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={26} className="text-blue-400" /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <div 
        id="mobile-menu"
        // Use a conditional class for smooth slide-down transition
        className={`absolute top-full left-0 w-full bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden md:hidden shadow-xl
          ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block w-full text-center py-2 text-lg hover:bg-gray-800 transition duration-300 
                ${pathname === item.href ? 'text-blue-400 font-semibold' : 'text-gray-200'}`}
              onClick={() => setOpen(false)} // Close menu on link click
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}