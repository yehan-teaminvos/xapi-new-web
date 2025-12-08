"use client";

import { useState, useRef, useEffect } from "react";
import { Flag } from "lucide-react";
import Image from "next/image";

export default function CarRoadmapPath() {
  const [carPosition, setCarPosition] = useState(0); // Position based on clicks, not scroll
  const [clickedMilestones, setClickedMilestones] = useState<number[]>([]);
  const [autoPlayStarted, setAutoPlayStarted] = useState(false);
  const [currentAutoIndex, setCurrentAutoIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cardDisplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Intersection Observer for auto-play on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !autoPlayStarted) {
          // Start auto-play after 3 seconds
          autoPlayTimeoutRef.current = setTimeout(() => {
            setAutoPlayStarted(true);
            setCurrentAutoIndex(0);
          }, 3000);
        }
      });
    }, {});

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
      if (cardDisplayTimeoutRef.current) {
        clearTimeout(cardDisplayTimeoutRef.current);
      }
    };
  }, [autoPlayStarted]);

  // Auto-play animation sequence
  useEffect(() => {
    if (currentAutoIndex >= 0 && currentAutoIndex < milestones.length) {
      // Move car to current milestone
      setCarPosition(milestones[currentAutoIndex].position);

      // Show the card for this milestone
      setClickedMilestones([currentAutoIndex]);

      // After 3 seconds, move to next milestone
      cardDisplayTimeoutRef.current = setTimeout(() => {
        if (currentAutoIndex < milestones.length - 1) {
          setCurrentAutoIndex(currentAutoIndex + 1);
        } else {
          // Animation complete - close the last card and restart after 4 seconds
          setClickedMilestones([]);

          // Wait 4 seconds then restart the animation from the beginning
          cardDisplayTimeoutRef.current = setTimeout(() => {
            setCarPosition(0); // Reset car to start position
            // Wait a bit for car to move back, then start from first milestone
            setTimeout(() => {
              setCurrentAutoIndex(0);
            }, 800); // Match the car transition duration
          }, 4000);
        }
      }, 3000);
    }

    return () => {
      if (cardDisplayTimeoutRef.current) {
        clearTimeout(cardDisplayTimeoutRef.current);
      }
    };
  }, [currentAutoIndex]);

  const handleFlagClick = (index: number) => {
    // Clear existing timeouts
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
    if (cardDisplayTimeoutRef.current) {
      clearTimeout(cardDisplayTimeoutRef.current);
    }

    // Toggle the clicked card
    setClickedMilestones((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [index]; // Only one card open at a time
      }
    });

    // Move car to the flag's position
    const targetPosition = milestones[index].position;
    setCarPosition(targetPosition);

    // Resume auto-play from the next milestone after 3 seconds
    cardDisplayTimeoutRef.current = setTimeout(() => {
      if (index < milestones.length - 1) {
        setCurrentAutoIndex(index + 1);
      } else {
        // If it's the last milestone, close the card and restart after 4 seconds
        setClickedMilestones([]);

        cardDisplayTimeoutRef.current = setTimeout(() => {
          setCarPosition(0); // Reset car to start position
          setTimeout(() => {
            setCurrentAutoIndex(0); // Restart from first milestone
          }, 800);
        }, 4000);
      }
    }, 3000);
  };

  const handleCloseCard = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    // Remove from clicked milestones to close the card
    setClickedMilestones((prev) => prev.filter((i) => i !== index));
  };

  const pathData =
    "M121.025 999.401L215.736 931.576C270.568 892.309 346.323 901.495 390.182 952.728L460.588 1034.97C506.213 1088.27 586.038 1095.4 640.384 1051.03C695.701 1005.87 703.874 924.393 658.629 869.145L387.208 537.719C344.991 486.167 348.907 410.964 396.251 364.078C450.283 310.571 538.615 315.077 586.922 373.807L956.981 823.705C1003.9 880.743 1089.17 886.472 1143.29 836.222C1193.2 789.886 1198.19 712.623 1154.65 660.253L900.686 354.745C858.283 303.736 862.128 228.722 909.525 182.318L913.824 178.11C963.322 129.649 1043.24 132.262 1089.47 183.854C1133.52 233.019 1208.76 238.062 1258.97 195.214L1318.41 144.5";

  const milestones = [
    {
      year: "2022",
      title: "XAPI Founded",
      description:
        "XAPI was founded by a small team of industry professionals with a vision for reducing friction between innovation and compliance.",
      position: 0.05,
      x: 428, // Flag horizontal position on road
      y: 1030, // Flag vertical position on road

      // 2XL (HD) offsets
      cardOffsetX_2xl: "-162%",
      cardOffsetY_2xl: "calc(-100% - 347px)",
      // Desktop offsets
      cardOffsetX: "-150%",
      cardOffsetY: "calc(-100% - 200px)",
      // Tablet offsets
      cardOffsetX_tablet: "90%",
      cardOffsetY_tablet: "calc(-100% + 58px)",
      // Mobile offsets
      cardOffsetX_mobile: "-18%",
      cardOffsetY_mobile: "-90px",
    },
    {
      year: "2023",
      title: "API Governance Launch",
      description: "Launch of the API Governance product platform.",
      position: 0.15,
      x: 695,
      y: 1194,
      // 2XL (HD) offsets
      cardOffsetX_2xl: "-238%",
      cardOffsetY_2xl: "calc(-100% - 490px)",
      // Desktop offsets
      cardOffsetX: "-200%",
      cardOffsetY: "calc(-100% - 300px)",
      // Tablet offsets
      cardOffsetX_tablet: "27%",
      cardOffsetY_tablet: "calc(-100% - 90px)",
      // Mobile offsets
      cardOffsetX_mobile: "-46%",
      cardOffsetY_mobile: "calc(-100% - 50px)",
    },
    {
      year: "2024",
      title: "First Commercial Deployment",
      description:
        "First commercial deployment in production with an enhanced API Governance platform.",
      position: 0.34,
      x: 520,
      y: 650,
      // 2XL (HD) offsets
      cardOffsetX_2xl: "-188%",
      cardOffsetY_2xl: "calc(-100% - 10px)",

      // Desktop offsets
      cardOffsetX: "-180%",
      cardOffsetY: "calc(-100% - 100px)",
      // Tablet offsets
      cardOffsetX_tablet: "67%",
      cardOffsetY_tablet: "calc(187px)",
      // Mobile offsets
      cardOffsetX_mobile: "-28%",
      cardOffsetY_mobile: "122px",
    },
    {
      year: "2025 ",
      title: "Data Governance Launch",
      description: "Launch of the Data Governance product platform.",
      position: 0.53,
      x: 940,
      y: 750,

      // 2XL (HD) offsets
      cardOffsetX_2xl: "92%",
      cardOffsetY_2xl: "-17px",

      // Desktop offsets
      cardOffsetX: "50%",
      cardOffsetY: "100px",
      // Tablet offsets
      cardOffsetX_tablet: "-20%",
      cardOffsetY_tablet: "110px",
      // Mobile offsets
      cardOffsetX_mobile: "-73%",
      cardOffsetY_mobile: "70px",
    },
    {
      year: "2025 ",
      title: "Port Deployment",
      description:
        "Completion of the commercial deployment for one of the world's biggest ports.",
      position: 0.8,
      x: 1090,
      y: 520,

      // 2XL (HD) offsets
      cardOffsetX_2xl: "50%",
      cardOffsetY_2xl: "185px",

      // Desktop offsets
      cardOffsetX: "80%",
      cardOffsetY: "200px",
      // Tablet offsets
      cardOffsetX_tablet: "-50%",
      cardOffsetY_tablet: "290px",
      // Mobile offsets
      cardOffsetX_mobile: "-90%",
      cardOffsetY_mobile: "195px",
    },
    {
      year: "2026",
      title: "AI Governance Launch",
      description: "Planned launch of the AI Governance product platform.",
      position: 0.96,
      x: 1319,
      y: 344,

      // 2XL (HD) offsets
      cardOffsetX_2xl: "-17%",
      cardOffsetY_2xl: "357px",

      // Desktop offsets
      cardOffsetX: "120%",
      cardOffsetY: "300px",

      // Tablet offsets
      cardOffsetX_tablet: "-105%",
      cardOffsetY_tablet: "450px",
      // Mobile offsets
      cardOffsetX_mobile: "-115%",
      cardOffsetY_mobile: "290px",
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center ">
        <div className="w-full max-w-7xl px-4 h-screen flex items-center justify-center relative">
          <svg
            viewBox="0 0 1440 1220"
            className="w-full h-auto max-h-[80vh]"
            style={{
              filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.1))",
            }}
          >
            <defs>
              <linearGradient
                id="paint0_linear_1493_19106"
                x1={0.115961}
                y1={547.758}
                x2={1439.88}
                y2={548.08}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8022B9" />
                <stop offset={0.485577} stopColor="#00005B" />
                <stop offset={1} stopColor="#513DF4" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <radialGradient id="carGlow">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Road base shadow */}
            <path
              d={pathData}
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="64"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(2, 4)"
            />

            <path
              d={pathData}
              fill="none"
              stroke="url(#paint0_linear_1493_19106)"
              strokeWidth="120"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Center dashed line */}
            <path
              d={pathData}
              fill="none"
              stroke="white"
              strokeWidth="6"
              strokeDasharray="25 25"
              strokeLinecap="round"
              opacity="0.7"
            />

            {/* Milestone markers */}
            {milestones.map((milestone, index) => {
              // All flags are always visible
              const scale = 1.2;
              const opacity = 1;

              return (
                <g
                  key={index}
                  onClick={() => handleFlagClick(index)}
                  style={{
                    transform: `translate(${milestone.x}px, ${milestone.y}px) scale(${scale})`,
                    transformOrigin: "center",
                    opacity: opacity,
                    transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    cursor: "pointer",
                  }}
                >
                  {/* White circle background */}
                  <circle
                    cx="0"
                    cy="0"
                    r="22"
                    fill="white"
                    stroke="#6366f1"
                    strokeWidth="4"
                    filter="url(#glow)"
                  />
                  {/* Flag icon */}
                  <Flag
                    x="-12"
                    y="-12"
                    width={24}
                    height={24}
                    stroke="#6366f1"
                    fill="#6366f1"
                  />
                  {/* Year text */}
                  <text
                    x="0"
                    y="45"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="bold"
                    fill="white"
                  >
                    {milestone.year}
                  </text>
                </g>
              );
            })}

            <g
              style={{
                offsetPath: `path('${pathData}')`,
                offsetDistance: `${carPosition * 100}%`,
                transition: "offset-distance 0.8s ease-in-out",
              }}
            >
              <foreignObject x="-50" y="-50" width="125" height="100">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/media/3dbluerocket.avif"
                    alt="3D Blue Rocket"
                    width={1250}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </foreignObject>
            </g>
          </svg>

          {/* Milestone content cards - fixed position */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {milestones.map((milestone, index) => {
              // Card shows ONLY when clicked
              const isClicked = clickedMilestones.includes(index);
              const isActive = isClicked;

              // Calculate fixed positions based on the flag's position in the SVG viewport
              // This makes cards appear relative to the road regardless of screen size
              const getCardPosition = () => {
                // First 3 cards: position to upper left
                if (index < 3) {
                  return {
                    left: "5%",
                    top: "10%",
                  };
                }
                // Last 3 cards: position to bottom right
                return {
                  left: "auto",
                  right: "5%",
                  top: "auto",
                  bottom: "10%",
                };
              };

              const cardPosition = getCardPosition();

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ${
                    isActive
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                  style={{
                    ...cardPosition,
                    transitionDelay: isActive ? "0.2s" : "0s",
                    zIndex: isActive ? 30 : 20,
                  }}
                >
                  {/* Desktop card */}
                  <div
                    className={`hidden lg:block 2xl:hidden bg-white rounded-xl shadow-2xl p-5 border-2 border-gradient relative`}
                    style={{
                      width: index === 0 ? "256px" : "288px",
                    }}
                  >
                    {isActive && (
                      <button
                        type="button"
                        onClick={(e) => handleCloseCard(index, e)}
                        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                        style={{ pointerEvents: "auto" }}
                        aria-label="Close card"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}

                    <div className="flex items-center gap-3 mb-3 ">
                      <div className="bg-gradient-to-r from-tertiary via-secondary to-primary text-white font-bold text-lg px-4 py-2 rounded-lg shadow-lg">
                        {milestone.year}
                      </div>
                      <div className="h-1 flex-1 bg-gradient-to-r from-tertiary via-secondary to-primary/20 rounded-full" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* 2XL (HD) card - visible on very large screens (2xl) */}
                  <div
                    className={`hidden 2xl:block bg-white rounded-xl shadow-2xl p-6 border-2 border-gradient relative`}
                    style={{
                      width: "310px",
                      height: "240px",
                    }}
                  >
                    {isActive && (
                      <button
                        type="button"
                        onClick={(e) => handleCloseCard(index, e)}
                        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                        style={{ pointerEvents: "auto" }}
                        aria-label="Close card"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}

                    <div className="flex items-center gap-3 mb-3 ">
                      <div className="bg-gradient-to-r from-tertiary via-secondary to-primary text-white font-bold text-lg px-4 py-2 rounded-lg shadow-lg">
                        {milestone.year}
                      </div>
                      <div className="h-1 flex-1 bg-gradient-to-r from-tertiary via-secondary to-primary/20 rounded-full" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Tablet card */}
                  <div
                    className={`hidden md:block lg:hidden bg-white rounded-xl shadow-2xl p-4 border-2 border-gradient relative w-60`}
                  >
                    {isActive && (
                      <button
                        type="button"
                        onClick={(e) => handleCloseCard(index, e)}
                        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                        style={{ pointerEvents: "auto" }}
                        aria-label="Close card"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}

                    <div className="flex items-center gap-2 mb-2 ">
                      <div className="bg-gradient-to-r from-tertiary via-secondary to-primary text-white font-bold text-base px-3 py-1.5 rounded-lg shadow-lg">
                        {milestone.year}
                      </div>
                      <div className="h-1 flex-1 bg-gradient-to-r from-tertiary via-secondary to-primary/20 rounded-full" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1.5">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Mobile card */}
                  <div
                    className={`block md:hidden bg-white rounded-lg shadow-xl p-3 border-2 border-gradient relative w-60`}
                  >
                    {isActive && (
                      <button
                        type="button"
                        onClick={(e) => handleCloseCard(index, e)}
                        className="absolute top-1.5 right-1.5 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                        style={{ pointerEvents: "auto" }}
                        aria-label="Close card"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}

                    <div className="flex items-center gap-2 mb-2 ">
                      <div className="bg-gradient-to-r from-tertiary via-secondary to-primary text-white font-bold text-sm px-2 py-1 rounded-md shadow-lg">
                        {milestone.year}
                      </div>
                      <div className="h-0.5 flex-1 bg-gradient-to-r from-tertiary via-secondary to-primary/20 rounded-full" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xs mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spacer for scroll area */}
      <div className="h-screen" />
    </div>
  );
}
