"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
export default function CreatePage() {
  const [mounted, setMounted] = useState(false);

  // SECTION STATE
  const [sections, setSections] = useState([
    { id: 1, name: "Default Section", chips: [] }
  ]);
  const [selectedSection, setSelectedSection] = useState(1);

  // input STATES
  const [sectionName, setSectionName] = useState("");
  const [chipUrl, setChipUrl] = useState("");
  const [chipName, setChipName] = useState("");

  const [editingSection, setEditingSection] = useState(null); // section id being edited
  const [tempName, setTempName] = useState(""); // temp new name

  // ---------------------------
  // Load from localStorage
  // ---------------------------
  useEffect(() => {
    setMounted(true);
    const storedSections = localStorage.getItem("sections");
    if (storedSections) {
      const parsed = JSON.parse(storedSections);
      setSections(parsed);
      if (parsed.length > 0) setSelectedSection(parsed[0].id);
    }
  }, []);

  // ---------------------------
  // Save to localStorage whenever sections change
  // ---------------------------
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("sections", JSON.stringify(sections));
    }
  }, [sections, mounted]);

  if (!mounted) return null;

  // ---------------------------
  // SECTION HANDLING
  // ---------------------------

  // Add New Section
  const addSection = () => {
    if (!sectionName.trim()) return;

    const newId = Date.now();
    setSections((prev) => [...prev, { id: newId, name: sectionName, chips: [] }]);

    setSelectedSection(newId);
    setSectionName("");
  };

  // Delete Section
  const deleteSection = (id) => {
    setSections((prev) => prev.filter((sec) => sec.id !== id));

    // auto-select first section if available
    const remaining = sections.filter((s) => s.id !== id);
    if (remaining.length > 0) {
      setSelectedSection(remaining[0].id);
    }
  };

  // Save inline edited name
  const saveSectionName = (id) => {
    if (!tempName.trim()) {
      setEditingSection(null);
      return;
    }

    setSections((prev) =>
      prev.map((sec) =>
        sec.id === id ? { ...sec, name: tempName } : sec
      )
    );

    setEditingSection(null);
  };

  // ---------------------------
  // CHIP HANDLING
  // ---------------------------

  const addChip = () => {
    if (!chipName.trim() || !chipUrl.trim()) return;

    const newChip = { label: chipName, link: chipUrl };

    setSections((prev) =>
      prev.map((sec) =>
        sec.id === selectedSection
          ? { ...sec, chips: [...sec.chips, newChip] }
          : sec
      )
    );

    setChipName("");
    setChipUrl("");
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white font-['cursive']">
      <Navbar />

      {/* input BARS */}
      <div className="p-6 flex flex-col gap-4 max-w-4xl mx-auto">

        {/* input 1: Add Section */}
        <div className="flex gap-2 ">
          <input
            value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
            placeholder="Enter section name"
            className="w-full max-w-xl px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-white border border-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addSection}
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          >
            Add Section
          </button>
        </div>

        {/* input 2: URL */}
        <div>
          <input
            value={chipUrl}
            onChange={(e) => setChipUrl(e.target.value)}
            placeholder="Enter chip URL"
            className="w-full max-w-xl px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-white border border-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* input 3: Chip name */}
        <div className="flex gap-2">
          <input
            value={chipName}
            onChange={(e) => setChipName(e.target.value)}
            placeholder="Enter chip name"
            className="w-full max-w-xl px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-white border border-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addChip}
            className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-600"
          >
            Add Chip
          </button>
        </div>
      </div>

      {/* SECTION + CHIPS DISPLAY */}
      <div className="p-6 flex flex-col gap-8 ">

        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-gray-800 p-4 rounded shadow-lg border border-white"
          >
            {/* Section Title Row */}
            <div className="flex justify-between items-center">
              
              {/* If editing this section */}
              {editingSection === section.id ? (
                <input
                  autoFocus
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onBlur={() => saveSectionName(section.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveSectionName(section.id);
                  }}
                  className="w-full max-w-xl px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-white border border-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <h2
                  className={`text-xl font-bold cursor-pointer ${selectedSection === section.id ? "text-blue-400" : ""}`}
                  onClick={() => {
                    setSelectedSection(section.id);
                    setEditingSection(section.id);
                    setTempName(section.name);
                  }}
                >
                  {section.name}
                </h2>
              )}

              <button
                onClick={() => deleteSection(section.id)}
                className="text-red-400 hover:text-red-600 text-2xl"
              >
                ❌
              </button>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-3 mt-4">
              {section.chips.map((chip, index) => (
                <a
                  key={index}
                  href={chip.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-2 bg-blue-100 text-blue-800 
                    px-5 py-2 rounded-full text-md font-bold shadow-md hover:bg-pink-400 
                    hover:text-white transition-all duration-300"
                >
                  {chip.label}
                </a>
              ))}
            </div>
          </div>
        ))}

      </div >
      <div className="mt-100">
      <Footer />
      </div>
    </div>
  );
}
