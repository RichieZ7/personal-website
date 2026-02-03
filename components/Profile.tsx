'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import TypingText from './TypingText'
import Experience from './Experience'
import Current from './Current'
import RandomWalkBackground from './RandomWalkBackground'

export default function Profile() {
  const [imageError, setImageError] = useState(false)
  const [showEducation, setShowEducation] = useState(false)
  const [showExperience, setShowExperience] = useState(false)

  useEffect(() => {
    if (showEducation) {
      const timer = setTimeout(() => {
        setShowExperience(true)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [showEducation])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative">
      <RandomWalkBackground start={showExperience} />
      <div className="max-w-4xl mx-auto px-6 py-12 w-full relative z-10">
        <div className="text-center lg:text-left">
          {/* Profile Picture */}
          <div className="mb-12 flex justify-center lg:justify-start animate-fade-in">
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden bg-white border-2 border-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                {!imageError ? (
                  <Image
                    src="/profile2.jpeg"
                    alt="Richard Zhang"
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl md:text-6xl font-light text-black">
                    RZ
                  </div>
                )}
              </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            <TypingText
              text="Hi, I'm Richard."
              speed={80}
              onComplete={() => {
                setTimeout(() => setShowEducation(true), 500)
              }}
            />
          </h1>

          {/* Current */}
          {showEducation && (
            <div className="mb-8 animate-fade-in">
              <Current />
            </div>
          )}

          {/* Experience */}
          {showExperience && (
            <div className="mb-12 animate-fade-in">
              <Experience />
            </div>
          )}

          {/* Contact Icons */}
          {showExperience && (
            <div className="flex items-center justify-center lg:justify-start gap-8 animate-fade-in mt-8">
              {/* Email Icon */}
              <a
                href="mailto:richard7.zhang@gmail.com"
                className="group relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Email"
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-black group-hover:text-gray-800 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://linkedin.com/in/richardzhang2004"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-black group-hover:text-gray-800 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Google Scholar Icon */}
              <a
                href="https://scholar.google.com/citations?user=BCgZ0VEAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Google Scholar"
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-black group-hover:text-gray-800 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0L0 9.5l5.242 4.269C6.452 11.249 9.022 9.5 12 9.5s5.548 1.748 6.758 4.269L24 9.5 12 0zm0 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
