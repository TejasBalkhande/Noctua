"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Navbar from "@/components/Navbar";
import { MenuItem } from "@/types/menu";
import { PracticeLevel, Section } from "../lib/actSections";
import renderMathInElement from "katex/contrib/auto-render";
import "katex/dist/katex.min.css";

const schoolMenu: MenuItem[] = [
  { label: "Mock-Test", href: "/act" },
  { label: "Study-Resources", href: "/act" },
  { label: "Practice-Questions", href: "/act/Practice-Questions" },
  { label: "Courses", href: "/act" },
  { label: "Roadmap", href: "/act" },
  { label: "Account", href: "/act" },
];

interface QuestionData {
  passages: {
    passageId: string;
    passageHtml: string;
  }[];
  questions: {
    questionId: string;
    passageId: string;
    passageHighlight: string;
    questionHtml: string;
    options: Record<string, string>;
    correctOption: string;
    explanationHtml: string;
  }[];
}

interface PracticeSessionClientProps {
  initialData: QuestionData | null; // allow null
  levelInfo: {
    section: Section;
    level: PracticeLevel;
  };
  imageBasePath: string;
}

export default function PracticeSessionClient({
  initialData,
  levelInfo,
  imageBasePath,
}: PracticeSessionClientProps) {
  const [data] = useState(initialData);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const passageRef = useRef<HTMLDivElement>(null);

  // Transform HTML: replace image src and handle highlight tags
  const transformHtml = useCallback(
    (html: string, highlight?: string): string => {
      if (!html) return "";

      // Replace image src
      let transformed = html.replace(
        /src="images\/([^"]+)"/g,
        (match, fileName) => `src="${imageBasePath}images/${fileName}"`
      );

      // Handle highlight tags
      const highlightRegex = /\[highlight-(\d+)\]([\s\S]*?)\[\/highlight-\1\]/g;
      transformed = transformed.replace(highlightRegex, (match, num, innerContent) => {
        if (highlight && num === highlight) {
          // Emphasize this highlight
          return `<span class="bg-yellow-200">${innerContent}</span>`;
        } else {
          // Remove the tags, keep the inner content
          return innerContent;
        }
      });

      return transformed;
    },
    [imageBasePath]
  );

  // Run KaTeX after every render
  useEffect(() => {
    if (contentRef.current && data) {
      try {
        renderMathInElement(contentRef.current, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\[", right: "\\]", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
          ],
          throwOnError: false,
        });
      } catch (e) {
        console.error("KaTeX rendering error:", e);
      }
    }
  }, [data, selectedOptions, currentIndex]);

  // Scroll to the highlighted part of the passage when question changes
  useEffect(() => {
    if (passageRef.current) {
      const highlighted = passageRef.current.querySelector(".bg-yellow-200");
      if (highlighted) {
        highlighted.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [currentIndex, data]);

  const handleOptionSelect = (questionId: string, optionKey: string) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: optionKey }));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    if (data) {
      setCurrentIndex((prev) => Math.min(data.questions.length - 1, prev + 1));
    }
  };

  // Handle missing data
  if (!data || data.questions.length === 0) {
    return (
      <div className="bg-[#ffffff] min-h-screen">
        <Navbar items={schoolMenu} logo="OwlenForge" />
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-semibold mb-2">
            {levelInfo.level.title} Practice
          </h1>
          <p className="text-gray-600 mb-6">
            {levelInfo.section.name} • {levelInfo.level.description}
          </p>
          <div className="border rounded-lg p-12 bg-white shadow-sm">
            <p className="text-gray-500 text-lg">🚧 Questions are being prepared. Check back soon!</p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = data.questions[currentIndex];
  const currentPassage = data.passages.find((p) => p.passageId === currentQuestion.passageId);
  const hasPassage = !!currentPassage;
  const selected = selectedOptions[currentQuestion.questionId];
  const isCorrect = selected === currentQuestion.correctOption;

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Navbar items={schoolMenu} logo="OwlenForge" />

      <div className="max-w-7xl mx-auto px-0 md:px-0 lg:px-0 py-8" ref={contentRef}>
        <h1 className="text-3xl font-semibold mb-2">
          {levelInfo.level.title} Practice
        </h1>
        <p className="text-gray-600 mb-6">
          {levelInfo.section.name} • {levelInfo.level.description}
        </p>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <div className={`grid ${hasPassage ? "md:grid-cols-2" : "md:grid-cols-1"} gap-6`}>
            {/* LEFT COLUMN - Passage (scrollable on medium+) */}
            {hasPassage && (
              <div
                ref={passageRef}
                className="md:max-h-[calc(100vh-12rem)] md:overflow-y-auto md:sticky md:top-24"
              >
                <h3 className="font-semibold text-lg mb-2 text-blue-800">Passage</h3>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: transformHtml(currentPassage.passageHtml, currentQuestion.passageHighlight),
                  }}
                />
              </div>
            )}

            {/* RIGHT COLUMN - Question & Options */}
            <div>
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2 text-green-800">
                  Question {currentIndex + 1} of {data.questions.length}
                </h3>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: transformHtml(currentQuestion.questionHtml) }}
                />
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Options</h4>
                {Object.entries(currentQuestion.options).map(([key, value]) => {
                  let optionClass = "p-3 border rounded cursor-pointer transition-colors ";
                  if (selected) {
                    if (key === currentQuestion.correctOption) {
                      optionClass += "bg-green-100 border-green-500 ";
                    } else if (key === selected && key !== currentQuestion.correctOption) {
                      optionClass += "bg-red-100 border-red-500 ";
                    } else {
                      optionClass += "bg-white ";
                    }
                  } else {
                    optionClass += "hover:bg-gray-50 ";
                  }

                  return (
                    <div
                      key={key}
                      className={optionClass}
                      onClick={() => !selected && handleOptionSelect(currentQuestion.questionId, key)}
                    >
                      <span className="font-bold mr-2">{key}.</span>
                      <span dangerouslySetInnerHTML={{ __html: transformHtml(value) }} />
                    </div>
                  );
                })}
              </div>

              {selected && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">Explanation</h4>
                  <div
                    className="prose max-w-none text-sm"
                    dangerouslySetInnerHTML={{ __html: transformHtml(currentQuestion.explanationHtml) }}
                  />
                  <p className="mt-2 text-sm">
                    {isCorrect ? (
                      <span className="text-green-600 font-medium">✓ Correct</span>
                    ) : (
                      <span className="text-red-600 font-medium">
                        ✗ Incorrect (correct answer: {currentQuestion.correctOption})
                      </span>
                    )}
                  </p>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="mt-6 flex justify-between">
                <button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition"
                >
                  Previous
                </button>
                <button
                  onClick={goToNext}
                  disabled={currentIndex === data.questions.length - 1}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: add some global styles for responsive images */}
      <style jsx>{`
        .responsive-img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}