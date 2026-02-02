'use client'

import TypingText from './TypingText'

export default function Current() {
  return (
    <div className="mb-8">
      <p className="text-xl md:text-2xl text-gray-300 font-light min-h-[2rem]">
        <TypingText text="Studying CS @ Penn." speed={60} />
      </p>
    </div>
  )
}
