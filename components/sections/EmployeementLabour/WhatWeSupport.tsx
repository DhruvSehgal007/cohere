'use client';

import { useState } from 'react';

const ITEMS = [
  {
    label: 'Workplace Policies',
    title: 'Workplace Policies',
    description:
      'Helping organisations strengthen workplace policies that encourage respectful behaviour, accountability, and compliance.',
  },
  {
    label: 'Internal Committee Advisory',
    title: 'Internal Committee Advisory',
    description:
      'Guidance on setting up and running internal committees so cases are handled fairly, consistently, and on time.',
  },
  {
    label: 'Workplace Investigations',
    title: 'Workplace Investigations',
    description:
      'Structured, impartial investigations into workplace complaints, carried out with sensitivity and due process.',
  },
  {
    label: 'Compliance Guidance',
    title: 'Compliance Guidance',
    description:
      'Practical advice to keep policies aligned with current labour law and regulatory requirements.',
  },
  {
    label: 'Learning & Awareness',
    title: 'Learning & Awareness',
    description:
      'Training programmes that build awareness of workplace conduct standards across every level of the organisation.',
  },
  {
    label: 'Reporting & Documentation',
    title: 'Reporting & Documentation',
    description:
      'Clear, defensible documentation and reporting workflows for every stage of a workplace case.',
  },
];

// Rotation angles for evenly spread fanning
const ANGLES = [-65, -39, -13, 13, 39, 65];

const PETAL_WIDTH = 200;
const PETAL_HEIGHT = 420;

function generatePetalPath() {
  // Symmetric rounded wedge tapering from wide top to curved pivot point
  return `
    M 24 24 
    Q 100 0 176 24 
    Q 196 30 186 52 
    L 122 340 
    Q 100 365 78 340 
    L 14 52 
    Q 4 30 24 24 
    Z
  `.replace(/\s+/g, ' ').trim();
}

export default function WhatWeSupport() {
  const [active, setActive] = useState(0);
  const activeItem = ITEMS[active];

  return (
    <section className="w-full bg-slate-50/50 py-16 px-4 md:px-8">
      <div className="mx-auto max-w-[1246px]">
        {/* Top Info Card */}
        <div className="mb-8 max-w-md transition-all duration-300">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/50 backdrop-blur">
            <h2 className="mb-2 text-xl font-bold tracking-tight text-[#1e4e4f]">
              {activeItem.title}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              {activeItem.description}
            </p>
          </div>
        </div>

        {/* Interactive Petal Fan Container */}
        <div
          className="relative mx-auto flex items-end justify-center overflow-visible"
          style={{ height: PETAL_HEIGHT + 40, maxWidth: 1246 }}
        >
          {ITEMS.map((item, i) => {
            const isActive = i === active;
            const angle = ANGLES[i];

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className="group absolute bottom-0 origin-bottom cursor-pointer outline-none transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[#1e4e4f]"
                style={{
                  width: PETAL_WIDTH,
                  height: PETAL_HEIGHT,
                  transformOrigin: '50% 100%',
                  transform: `translateX(-50%) rotate(${angle}deg) translateY(${
                    isActive ? -16 : 0
                  }px)`,
                  zIndex: isActive ? 30 : 10 + i,
                  filter: isActive
                    ? 'drop-shadow(0 20px 25px rgba(30, 78, 79, 0.22))'
                    : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.04))',
                }}
              >
                <svg
                  width={PETAL_WIDTH}
                  height={PETAL_HEIGHT}
                  viewBox={`0 0 ${PETAL_WIDTH} ${PETAL_HEIGHT}`}
                  className="block overflow-visible"
                >
                  <defs>
                    <linearGradient
                      id={`activeGradient-${i}`}
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#1e4e4f" />
                      <stop offset="100%" stopColor="#2e7475" />
                    </linearGradient>
                  </defs>

                  <path
                    d={generatePetalPath()}
                    fill={isActive ? `url(#activeGradient-${i})` : '#ffffff'}
                    stroke={isActive ? '#1e4e4f' : '#e2e8f0'}
                    strokeWidth={isActive ? 1.5 : 1}
                    className="transition-all duration-300 group-hover:stroke-[#1e4e4f]"
                  />
                </svg>

                {/* Vertical Label Text inside Petal */}
                <span
                  className={
                    'pointer-events-none absolute select-none whitespace-nowrap text-center text-sm font-semibold tracking-wide transition-colors duration-300 ' +
                    (isActive
                      ? 'text-white'
                      : 'text-slate-700 group-hover:text-[#1e4e4f]')
                  }
                  style={{
                    top: '46%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) rotate(-90deg)',
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}