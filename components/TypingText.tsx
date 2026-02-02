'use client'

import { useState, useEffect, useRef } from 'react'

interface TypingTextProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export default function TypingText({ text, speed = 50, className = '', onComplete }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const cursorIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)
      return () => clearTimeout(timer)
    } else if (!isComplete) {
      setIsComplete(true)
      // Hide cursor immediately when complete
      setShowCursor(false)
      // Clear cursor interval if it exists
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current)
        cursorIntervalRef.current = null
      }
      if (onComplete) {
        onComplete()
      }
    }
  }, [displayedText, text, speed, isComplete, onComplete])

  // Cursor blink effect while typing
  useEffect(() => {
    if (!isComplete) {
      cursorIntervalRef.current = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 530)
      return () => {
        if (cursorIntervalRef.current) {
          clearInterval(cursorIntervalRef.current)
          cursorIntervalRef.current = null
        }
      }
    }
  }, [isComplete])

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && showCursor && (
        <span className="inline-block ml-1">|</span>
      )}
    </span>
  )
}
