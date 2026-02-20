// app/school/page.tsx
"use client"; 

import Navbar from "@/components/Navbar";
import { MenuItem } from "@/types/menu";
import Image from 'next/image';
import { highYieldTopics } from "./lib/highYieldTopics";
import HighYieldTopicsTable from "./components/HighYieldTopicsTable";
import react from "react";
import Link from "next/link";

const schoolMenu: MenuItem[] = [
  { label: "Mock-Test", href: "/act/Practice-Questions#full-length-mock-test" },
  { label: "Study-Resources", href: "/act" },
  { label: "Practice-Questions", href: "/act/Practice-Questions" },
  { label: "Courses", href: "/act/courses" },
  { label: "Roadmap", href: "/act" },
  { label: "Account", href: "/act" },
];

const subjects = [
    {
      title: "English",
      time: "35 min",
      items: [
        { label: "Production of Writing", pct: 40, desc: "Topic development, organization, cohesion" },
        { label: "Conventions of Standard English", pct: 40, desc: "Grammar, punctuation, sentence structure" },
        { label: "Knowledge of Language", pct: 20, desc: "Word choice, tone, concision" },
      ],
    },
    {
      title: "Mathematics",
      time: "50 min",
      items: [
        { label: "Core Categories", pct: 80, desc: "Algebra, Functions, Geometry, Number & Quantity, Statistics" },
        { label: "Integrating Essential Skills", pct: 20, desc: "Multi‑concept application" },
      ],
    },
    {
      title: "Reading",
      time: "40 min",
      items: [
        { label: "Key Ideas & Details", pct: 48, desc: "Central ideas, inferences, evidence" },
        { label: "Craft & Structure", pct: 30, desc: "Tone, author purpose, structure" },
        { label: "Integration", pct: 22, desc: "Arguments, graphics, multiple texts" },
      ],
    },
    {
      title: "Science",
      time: "40 min",
      items: [
        { label: "Interpretation of Data", pct: 44, desc: "Graphs, trends, tables and experiments" },
        { label: "Scientific Investigation", pct: 25, desc: "Design, variables" },
        { label: "Evaluation of Arguments", pct: 31, desc: "Models, evidence" },
      ],
    },
  ];


export default function ActPage() {
  const [showAll, setShowAll] = react.useState(false);

   const cards = [
    {
      title: 'Scoring',
      text: 'Sections scored 1–36. Composite = average of English, Math, Reading, Science. Writing (essay) scored 2–12 separately. Many colleges accept superscores.',
    },
    {
      title: 'Timing',
      text: 'Total time usually ~2h20–2h55 depending on sections. With Writing, expect ~3h40. Practice with section timers to build pacing.',
    },
    {
      title: 'Question Types',
      text: 'Mostly multiple-choice (4 options). Writing requires an analytical essay comparing perspectives — practice planning and timing.',
    },
    {
      title: 'Resources',
      text: 'Combine official ACT materials with targeted practice (reading speed drills, timed math sets, and science reasoning passages).',
    },
    {
      title: 'Strategy',
      text: 'Work high-confidence items first, skip & mark for review, and watch pacing. No penalty for guessing — answer every question.',
    },
    {
      title: 'Practice',
      text: 'Use official practice tests, simulate test-day conditions, and review mistakes thoroughly to improve accuracy and speed.',
    },
    
  ];

  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
  
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Navbar items={schoolMenu} logo="OwlenForge" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-4 md:pt-2 lg:pt-2">
        <div className="w-full text-right font-times text-[17px]">
          <p className="text-gray-700">Terms & Conditions</p>
        </div>

        {/* Hero Section with Images */}
        <div className="w-full bg-white border border-gray-600 rounded-lg mb-0 px-9 md:px-9 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-shrink-0 w-40 md:w-48 lg:w-56 px-0 md:px-0 lg:px-0 pt-2">
            <Image
              src="/hero-left.png"
              alt="Hero Left"
              width={200}
              height={200}
              className="object-contain w-full h-auto"
            />
          </div>

          <div className="flex flex-col items-center space-y-2 w-full max-w-lg pb-3">
            {/* Search Bar */}
            <div className="flex items-center border border-gray-400 rounded-xl px-3 py-2 w-full bg-[#eef1f7] text-sm ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for books, notes, Question Banks"
                className="ml-2 w-full outline-none"
              />
            </div>

            <h1 className="text-2xl font-semibold text-center font-sans">ACT FULL PREPARATION</h1>
            <h2 className="text-gray-600 text-center font-times text-[17px]">
              Comprehensive ACT Exam Guide: Strategies, Practice, and Resources to Maximize Your Score
            </h2>
          </div>

          <div className="hidden md:block flex-shrink-0 w-32 md:w-40 lg:w-48">
            <Image
              src="/hero-right.png"
              alt="Hero Right"
              width={200}
              height={200}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

      {/* Section Navigation scroll to respective section*/} 
        <div className="w-full overflow-x-auto pt-3 font-times text-[17px] mb-6">
          <div className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-1 md:gap-y-0 text-gray-700 font-medium leading-tight">
            <div
              className="cursor-pointer underline hover:text-blue-600"
              onClick={() => scrollToSection('understanding-act')}
            >
              Understanding the ACT Exam
            </div>
            <div
              className="cursor-pointer underline hover:text-blue-600"
              onClick={() => scrollToSection('topic-weight')}
            >
              Topic/Section Weight
            </div>
            <div
              className="cursor-pointer underline hover:text-blue-600"
              onClick={() => scrollToSection('test-structure')}
            >
              Test Structure
            </div>
            <div
              className="cursor-pointer underline hover:text-blue-600"
              onClick={() => scrollToSection('high-yield')}
            >
              High-Yield
            </div>
          </div>
        </div>

    {/* Mocks and Questions */}
      <section>
        <div className="w-full py-12 flex flex-col-reverse md:flex-row items-center md:items-start gap-6 bg-gray-50 px-5">
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
            <h1 className="text-2xl font-semibold text-left font-sans">ACT Test Simulator</h1>
            <h2 className="text-gray-600 text-left font-times text-[17px] lg:w-150">
              detailed explanations, full-length mock exams, and topic-wise practice questions to strengthen concepts and improve your score.
            </h2>

            <div className="flex flex-col gap-3 pt-4 w-full md:w-auto font-medium">
              <Link
                href="/act/Practice-Questions#full-length-mock-test"
                className="w-full md:w-64 border border-black bg-white py-2 rounded-md hover:bg-gray-100 transition text-center block"
              >
                Full-Length Mock Tests
              </Link>
              <Link href="/act/Practice-Questions">
              <button
              className="w-full md:w-64 border border-black bg-white py-2 rounded-md hover:bg-gray-100 transition">
                Topic-wise Questions
              </button>
              </Link>
            </div>
          </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-5">
            <Image
              src="/LaptopMock.png"
              width={700}
              height={420}
              alt="Laptop mock"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain"
              style={{ userSelect: 'none' }}
            />
          </div>
        </div>
        </section>

      {/* Section Divider */}
      <div className="w-full flex justify-center mb-5 mt-10">
        <div className="w-full max-w-5xl h-px bg-gray-300"></div>
      </div>

      {/* video courses section */}
      <section>
        <div className="w-full py-10 flex flex-col md:flex-row md:items-right item center gap-6">
          {/* Left column - Video Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start pl-10">
            <Image
              src="/video-img-2.png"
              alt="Video lessons preview"
              width={300}
              height={200}
              className="object-contain w-full max-w-sm md:max-w-md"
            />
          </div>

          {/* Right column - Text, Buttons, and Extra Info */}
          <div className="w-full md:w-1/2 flex flex-col items-right space-y-4">
            <h1 className="text-2xl font-semibold font-sans md:text-right text-center">Free Video Tutorials</h1>
            <h2 className="text-gray-600 font-times text-[17px] md:text-right text-center">
              Free video lessons covering all ACT subjects, strategies, and practice
              problems to help you master the exam content and boost your confidence.
            </h2>

            {/* Two buttons */}
            <div className="flex flex-wrap gap-3 pt-2 md:items-right item-center md:justify-end justify-center">
              <button className="px-4 py-2 border border-black bg-white rounded-md hover:bg-gray-100 transition text-sm font-medium">
                VIDEO LECTURES
              </button>
              <button className="px-4 py-2 border border-black bg-white rounded-md hover:bg-gray-100 transition text-sm font-medium">
                CREATE ROADMAP
              </button>
            </div>
          </div>
        </div>
      </section>

{/* Section Divider */}
    <div className="w-full flex justify-center my-5">
      <div className="w-full max-w-5xl h-px bg-gray-300"></div>
    </div>

{/*Books & Notes Section*/}
<section className="w-full">
  {/* Heading / Intro (unchanged) */}
  <div className="w-full py-6">
    <div className="w-full flex flex-col items-center text-center space-y-2">
      <h1 className="text-2xl font-semibold font-sans">Books & Written Notes For ACT Prep</h1>
      <h2 className="text-gray-600 font-times text-[17px] lg:w-180 max-w-3xl">
        Books for ACT Exam Preparation: Comprehensive Guides, Practice Tests, and Subject-Specific Resources to Ace the ACT
      </h2>
    </div>
  {/* Main content: left = notes image + download, right = 2-column books grid */}
  <div className="w-full mt-6">
    <div className="flex flex-col md:flex-row items-stretch gap-6">
      <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-4">
        <div className="w-full max-w-md rounded-md overflow-hidden">
          <div className="relative w-full h-60 md:h-70">
            <Image
              src="/books.png"        
              alt="ACT books"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
        <a
          href="/notes-img.png"
          download="ACT-notes.png"
          className="inline-block mt-2 w-11/12 md:w-2/3 text-center px-4 py-2 border border-black rounded-md bg-white hover:bg-gray-100 transition text-sm font-medium"
          aria-label="Download ACT books image"
        >
          Download Book
        </a>
        {/* Optional short caption */}
        <p className="text-xs text-gray-500 mt-2 max-w-xs">
          Detailed book covers and descriptions — click Download to save the PDF/image.
        </p>
      </div>
    

      <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-4">
        <div className="w-full max-w-md rounded-md overflow-hidden">
          <div className="relative w-full h-60 md:h-70">
            <Image
              src="/notes-img.png"          // public/notes-img.png
              alt="ACT notes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
        <a
          href="/notes-img.png"
          download="ACT-notes.png"
          className="inline-block mt-2 w-11/12 md:w-2/3 text-center px-4 py-2 border border-black rounded-md bg-white hover:bg-gray-100 transition text-sm font-medium"
          aria-label="Download ACT notes image"
        >
          Download Notes
        </a>
        <p className="text-xs text-gray-500 mt-2 max-w-xs">
          High-resolution notes — click Download to save the PDF/image.
        </p>
      </div>
    </div>
    </div>
  </div>
</section>

   {/* Section Divider */}
    <div className="w-full flex justify-center my-10 mb-15">
      <div className="w-full max-w-5xl h-px bg-gray-300"></div>
    </div>


  {/* ===== Understanding the ACT Exam ===== */}
 <section id="understanding-act" className="w-full bg-gradient-to-b from-gray-50 via-white to-white py-5 md:px-10 px-0">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Text column */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-2xl font-semibold font-sans leading-tight tracking-tight text-gray-900 md:px-0 px-3">
              Understanding the ACT Exam
            </h1>
            <p className="mt-3 text-gray-600 font-times text-[17px] md:text-lg max-w-3xl mx-auto md:mx-0 md:px-0 px-3">
              ACT Overview — Format, sections, scoring, and essential strategies to guide your
              preparation and test-day performance.
            </p>

            {/* CTA / Badge */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-center md:justify-start md:px-0 px-3">
              <a
                href="act/Practice-Questions"
                className="inline-block px-5 py-3 rounded-lg bg-[#3166a1] text-white text-sm font-semibold shadow hover:bg-indigo-700 transition"
                aria-label="Get started with ACT preparation"
              >
                Start Preparing
              </a>
                <button
                  onClick={() => scrollToSection('topic-weight')}
                  className="inline-block mt-3 sm:mt-0 px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 font-medium hover:bg-gray-50 transition bg-white"
                >
                  See detailed breakdown
                </button>
            </div>
          </div>

          {/* Visual column */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="w-56 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center justify-center h-28">
                <div className="w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center text-[#376ca8] text-4xl font-bold">
                  ACT
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  Timed, multiple-choice sections + optional essay
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8"></div>

        {/* Info cards */}
        <div id="details" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            // Determine if this card should be hidden on mobile when not showing all
            const hideOnMobile = !showAll && index >= 3;
            return (
              <article
                key={index}
                className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition ${
                  hideOnMobile ? 'hidden sm:block' : ''
                }`}
              >
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.text}</p>
              </article>
            );
          })}
        </div>

        {/* Show more / less button (visible only on mobile) */}
        <div className="flex justify-center mt-6 sm:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition"
          >
            {showAll ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
    </section>


{/* ===== Test Structure ===== */}
<section id="test-structure" className="w-full bg-white py-8 md:px-6 px-0">
  <div className="max-w-6xl mx-auto md:px-4 px:2">
    {/* Header */}
    <div className="w-full py-4 text-center">
      <h1 className="text-2xl font-semibold font-sans text-gray-900">Test Structure</h1>
      <h2 className="text-gray-600 font-times text-[17px] max-w-3xl mx-auto mt-2">
        Test Structure: ACT exam format, section breakdown, and timing information to help you prepare effectively.
      </h2>
    </div>

    {/* Desktop table (md+) + Mobile stacked cards */}
    <div className="mt-6">
      {/* Table for md and up */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-300">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="px-6 py-3 text-sm font-semibold border-b sticky top-0 bg-gray-100">Section</th>
              <th className="px-6 py-3 text-sm font-semibold border-b sticky top-0 bg-gray-100">Time</th>
              <th className="px-6 py-3 text-sm font-semibold border-b sticky top-0 bg-gray-100">Questions</th>
              <th className="px-6 py-3 text-sm font-semibold border-b sticky top-0 bg-gray-100">Format</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <td className="px-6 py-4">English</td>
              <td className="px-6 py-4">35 minutes</td>
              <td className="px-6 py-4">50 (40 scored)</td>
              <td className="px-6 py-4">Multiple-choice, passage-based</td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <td className="px-6 py-4">Mathematics</td>
              <td className="px-6 py-4">50 minutes</td>
              <td className="px-6 py-4">45 (41 scored)</td>
              <td className="px-6 py-4">Multiple-choice, calculator allowed</td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <td className="px-6 py-4">Reading</td>
              <td className="px-6 py-4">40 minutes</td>
              <td className="px-6 py-4">36 (27 scored)</td>
              <td className="px-6 py-4">Multiple-choice, passage-based</td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <td className="px-6 py-4">Science (Optional)</td>
              <td className="px-6 py-4">40 minutes</td>
              <td className="px-6 py-4">40 (34 scored)</td>
              <td className="px-6 py-4">Data representation, research summaries, conflicting viewpoints</td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-6 py-4">Writing (Optional)</td>
              <td className="px-6 py-4">40 minutes</td>
              <td className="px-6 py-4">1 essay</td>
              <td className="px-6 py-4">Essay analyzing a complex issue & perspectives</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden space-y-3">
        <article className="border border-gray-300 rounded-lg p-4 bg-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">English</h3>
              <p className="text-sm text-gray-600 mt-1">Multiple-choice, passage-based</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">35 min</p>
              <p className="text-xs text-gray-500 mt-1">50 (40 scored)</p>
            </div>
          </div>
        </article>

        <article className="border border-gray-300 rounded-lg p-4 bg-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Mathematics</h3>
              <p className="text-sm text-gray-600 mt-1">Multiple-choice, calculator allowed</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">50 min</p>
              <p className="text-xs text-gray-500 mt-1">45 (41 scored)</p>
            </div>
          </div>
        </article>

        <article className="border border-gray-300 rounded-lg p-4 bg-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Reading</h3>
              <p className="text-sm text-gray-600 mt-1">Multiple-choice, passage-based</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">40 min</p>
              <p className="text-xs text-gray-500 mt-1">36 (27 scored)</p>
            </div>
          </div>
        </article>

        <article className="border border-gray-300 rounded-lg p-4 bg-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Science (Optional)</h3>
              <p className="text-sm text-gray-600 mt-1">Data representation, research summaries, conflicting viewpoints</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">40 min</p>
              <p className="text-xs text-gray-500 mt-1">40 (34 scored)</p>
            </div>
          </div>
        </article>

        <article className="border border-gray-300 rounded-lg p-4 bg-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Writing (Optional)</h3>
              <p className="text-sm text-gray-600 mt-1">Essay analyzing a complex issue & perspectives</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800 whitespace-nowrap">40 min</p> 
              <p className="text-xs text-gray-500 mt-1 whitespace-nowrap">1 essay</p>
            </div>
          </div>
        </article>
      </div>
      {/* Footnote */}
      <p className="text-sm text-gray-500 mt-3">* Scored questions only; some items are pretest/unscored.</p>
    </div>
  </div>
</section>

{/* Section Divider */}
    <div className="w-full flex justify-center my-10 mb-15">
      <div className="w-full max-w-5xl h-px bg-gray-300"></div>
    </div>

{/* ===== Topic/Section Weight ===== */}
<section id="topic-weight" className="w-full bg-gradient-to-b from-gray-50 via-white to-white py-12 py-5 md:px-10 px-0">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-10">
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h1 className="text-2xl font-semibold font-sans leading-tight tracking-tight text-gray-900 md:px-0 px-3">Topic / Section Weight</h1>
        <p className="mt-3 text-gray-600 font-times text-[17px] md:text-lg max-w-3xl mx-auto md:mx-0 md:px-0 px-3">
          ACT content distribution and high-yield areas to prioritise in your preparation. Use the quick bars to scan high-weight focuses and drill down to practice.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
          <Link href="/act/Practice-Questions" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#3166a1] text-white text-sm font-semibold shadow hover:scale-[1.01] transform transition">
            Explore Sections
          </Link>

          <a href="#high-yield" className="inline-block px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 font-medium hover:bg-gray-50 transition">
            High-Yield Topics
          </a>
        </div>
      </div>
    </div>

    {/* Cards grid */}
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      {subjects.map((s) => (
        <article
          key={s.title}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 flex flex-col h-full"
        >
          <header className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{s.time}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full font-medium">Summary</span>
            </div>
          </header>

          <div className="space-y-4">
            {s.items.map((it) => (
              <div key={it.label}>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{it.label}</p>
                  <p className="text-sm text-gray-500">{it.pct}%</p>
                </div>

                <div className="mt-2 h-2 w-full bg-gray-100 rounded-full overflow-hidden" aria-hidden>
                  <div
                    className="h-full rounded-full shadow-inner"
                    style={{ width: `${it.pct}%`, background: 'linear-gradient(90deg,#3166a1,#4f83c4)' }}
                  />
                </div>

                <p className="text-xs text-gray-500 mt-2">{it.desc}</p>
              </div>
            ))}
          </div>

          {/* footer pushed to bottom */}
          <div className="mt-auto flex items-center justify-between pt-6">
            <a href={`#${s.title.toLowerCase()}`} className="text-sm font-medium text-indigo-600 hover:underline">
              Practice →
            </a>
            <div className="text-xs text-gray-400">{s.items.length} focus areas</div>
          </div>
        </article>
      ))}

      {/* Writing: full width card on large screens */}
      <article className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col h-full">
        <header className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Writing (Optional)</h3>
          <span className="text-sm text-gray-400">Essay Rubric</span>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="font-medium text-gray-900">Ideas & Analysis</p>
            <p className="text-gray-500 text-sm mt-1">Engage multiple perspectives</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">Development & Support</p>
            <p className="text-gray-500 text-sm mt-1">Reasoning, examples, implications</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">Organization</p>
            <p className="text-gray-500 text-sm mt-1">Clear structure and flow</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">Language & Conventions</p>
            <p className="text-gray-500 text-sm mt-1">Grammar, tone, style</p>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6">Each domain contributes equally to the essay score (2–12).</p>

      </article>
    </div>
    </div>
</section>


{/* ===== High‑Yield Topics ===== */}
  <section id="high-yield" className="w-full py-6 md:px-6 px-0">
    <div className="w-full flex flex-col items-center text-center space-y-2 mb-6">
      <h1 className="text-2xl font-semibold font-sans">High-Yield Topics</h1>
      <h2 className="text-gray-600 font-times text-[17px] lg:w-180 max-w-3xl">
        Most frequently tested subjects and question types on the ACT exam, along with targeted study strategies to maximize your score.
      </h2>
    </div>

    <HighYieldTopicsTable title="English" data={highYieldTopics.english} />
    <HighYieldTopicsTable title="Mathematics" data={highYieldTopics.mathematics} />
    <HighYieldTopicsTable title="Reading" data={highYieldTopics.reading} />
    <HighYieldTopicsTable title="Science (Optional)" data={highYieldTopics.science} />

  </section>
  </div>
</div>
  );
}