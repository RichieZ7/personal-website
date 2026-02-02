'use client'

import { useState } from 'react'

interface Experience {
  title: string
  company: string
  location: string
  duration: string
  description?: string
  link?: string
}

const experiences: Experience[] = [
  {
    title: 'Quantitative Trading Intern',
    company: 'IMC Trading',
    location: 'Chicago, IL',
    duration: 'Jun 2025 - Aug 2025',
    description: 'Equity Options Market Making',
  },
  {
    title: 'Teaching Assistant',
    company: 'University of Pennsylvania',
    location: 'Philadelphia, PA',
    duration: 'Aug 2023 - May 2025',
    description: 'CIS 1600: Discrete Math',
  },
  {
    title: 'Machine Learning Research Intern',
    company: 'Shen Lab',
    location: 'Philadelphia, PA',
    duration: 'May 2023 - Aug 2023',
    description: 'NSF REU: Interpretable Deep Learning for Alzheimer\'s',
    link: 'https://doi.org/10.1016/j.media.2024.103231',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Anytime AI',
    location: 'New York, NY',
    duration: 'Jun 2024 - Aug 2024',
    description: 'Full Stack',
  },
  {
    title: 'Project Lead',
    company: 'Wharton Global Research and Consulting',
    location: 'Philadelphia, PA',
    duration: 'Sep 2022 - May 2024',
    description: 'Social Impact Consulting for NGOs and F500 Companies',
  },
  {
    title: 'Participant',
    company: 'Hampshire College Summer Studies in Mathematics',
    location: 'Amherst, Massachusetts, United States',
    duration: 'Jun 2021 - Aug 2021',
    description: 'One of 50/500+ selected to study college and research math',
  },
]

export default function Experience() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-xl md:text-2xl text-gray-300 font-light hover:text-white transition-colors mb-4"
      >
        <span>Previous</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="space-y-6 animate-fade-in">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="border-l-2 border-white pl-4 transition-colors duration-300 hover:border-orange-500 cursor-default"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 mb-1">
                <h3 className="text-lg font-light text-white">{exp.title}</h3>
                <span className="text-gray-400 text-sm">@ {exp.company}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 text-sm text-gray-400 mb-1">
                <span>{exp.location}</span>
                <span className="hidden sm:inline">•</span>
                <span>{exp.duration}</span>
              </div>
              {exp.description && (
                <p className="text-sm text-gray-300 mt-1">
                  {exp.description}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-white hover:underline"
                    >
                      →
                    </a>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
