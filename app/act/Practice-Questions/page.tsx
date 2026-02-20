// app/act/Practice-Questions/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { MenuItem } from "@/types/menu";
import { sections } from "../lib/actSections"; // import shared data

const schoolMenu: MenuItem[] = [
  { label: "Mock-Test", href: "/act" },
  { label: "Study-Resources", href: "/act" },
  { label: "Practice-Questions", href: "/act/Practice-Questions" },
  { label: "Courses", href: "/act" },
  { label: "Roadmap", href: "/act" },
  { label: "Account", href: "/act" },
];

// Helper to slugify a string (for URL)
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export default function PracticeQuestionsPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<{
    section: string;
    option: (typeof sections)[number]["options"][number];
  } | null>(null);

  const practicePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedOption && practicePanelRef.current) {
      practicePanelRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedOption]);

  // Helper to get color classes
  const getLevelColor = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-100 text-green-700";
      case "yellow":
        return "bg-yellow-100 text-yellow-700";
      case "red":
        return "bg-red-100 text-red-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  const handleStartPractice = (levelTitle: string) => {
    const slug = slugify(levelTitle);
    router.push(`/act/${slug}`);
  };

  const handleStartFullLength = (setNumber: number) => {
    router.push(`/act/full-length/set-${setNumber}`);
  };

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Navbar items={schoolMenu} logo="OwlenForge" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-4 md:pt-2 lg:pt-2 ">
        {/* Hero / Title */}
        <div className="w-full py-6 text-left ">
          <h1 className="text-3xl font-semibold font-sans">
            Topic‑wise Practice
          </h1>
          <p className="text-gray-600 font-times text-[17px] max-w-2xl mt-2">
            Select a topic below to access three levels of practice questions.
            Build confidence step by step.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          {sections.map((section) => (
            <div
              key={section.name}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold font-sans mb-4">
                {section.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {section.options.map((option) => {
                  const isActive =
                    selectedOption?.section === section.name &&
                    selectedOption?.option.name === option.name;
                  return (
                    <button
                      key={option.name}
                      onClick={() =>
                        setSelectedOption({ section: section.name, option })
                      }
                      className={`
                        px-3 py-1.5 rounded-full text-sm font-medium border transition
                        ${
                          isActive
                            ? "bg-blue-50 border-blue-500 text-blue-700"
                            : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                        }
                      `}
                    >
                      {option.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Practice Levels Panel (shown only when an option is selected) */}
        {selectedOption && (
          <div ref={practicePanelRef} className="mt-0 mb-16">
            <div className="w-full pt-8">
              <h2 className="text-2xl font-semibold font-sans text-center">
                Practice Levels for{" "}
                <span className="text-blue-600">
                  {selectedOption.option.name}
                </span>
              </h2>
              <p className="text-center text-gray-600 font-times text-[17px] mt-1">
                {selectedOption.section} • Choose your difficulty
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {selectedOption.option.practiceLevels.map((level) => (
                  <div
                    key={level.level}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 ${getLevelColor(
                        level.color
                      )}`}
                    >
                      {level.level}
                    </div>
                    <h3 className="text-lg font-semibold">{level.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      {level.description}
                    </p>
                    <button
                      onClick={() => handleStartPractice(level.title)}
                      className="mt-auto px-4 py-2 border border-black rounded-md bg-white hover:bg-gray-100 transition text-sm font-medium w-full"
                    >
                      Start Practice
                    </button>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 text-center mt-6">
                Each practice set contains 10–15 questions. Full explanations
                provided after submission.
              </p>
            </div>
          </div>
        )}

        {/* If no option selected, show a friendly prompt */}
        {!selectedOption && (
          <div className="w-full py-0 text-center">
        
          </div>
        )}

        {/* Full Length Mock Test Section (always at the bottom) */}
        <div id="full-length-mock-test" className="w-full mt-12">
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-3xl font-semibold font-sans">
              Full Length Mock Test
            </h2>
            <p className="text-gray-600 font-times text-[17px] max-w-2xl mt-2">
              Simulate real exam conditions with our complete tests
            </p>

          </div>
        </div>

       
      </div>
    </div>
  );
}