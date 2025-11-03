import { useState, useEffect } from "react";
import { AnimatedPen } from "./AnimatedPen";

interface RotatingTextProps {
  texts: string[];
  className?: string;
}

const fontClasses = [
  'font-signature',
  'font-signature-alt',
  'font-signature-elegant',
  'font-signature-classic',
  'font-signature'
];

const colorClasses = [
  'text-yellow-300',
  'text-pink-300',
  'text-purple-300',
  'text-green-300',
  'text-orange-300'
];

export const RotatingText = ({ texts, className = "" }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isWriting, setIsWriting] = useState(true);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let charIndex = 0;
    
    if (isWriting && !isErasing) {
      // Typewriter effect - write character by character
      const writeInterval = setInterval(() => {
        if (charIndex <= currentText.length) {
          setDisplayText(currentText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(writeInterval);
          // Wait before erasing
          setTimeout(() => {
            setIsWriting(false);
            setIsErasing(true);
          }, 2000);
        }
      }, 100);

      return () => clearInterval(writeInterval);
    } else if (isErasing) {
      // Erase effect - remove character by character
      charIndex = displayText.length;
      const eraseInterval = setInterval(() => {
        if (charIndex >= 0) {
          setDisplayText(currentText.slice(0, charIndex));
          charIndex--;
        } else {
          clearInterval(eraseInterval);
          setIsErasing(false);
          setIsWriting(true);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, 50);

      return () => clearInterval(eraseInterval);
    }
  }, [currentIndex, texts, isWriting, isErasing]);

  const currentFont = fontClasses[currentIndex % fontClasses.length];
  const currentColor = colorClasses[currentIndex % colorClasses.length];

  return (
    <span className="inline-flex items-center justify-start min-w-[200px]">
      <span 
        className={`inline-block ${currentFont} ${currentColor} ${className}`}
        style={{
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
          minWidth: '20px'
        }}
      >
        {displayText}
      </span>
      <AnimatedPen isWriting={isWriting && !isErasing && displayText.length > 0} />
    </span>
  );
};
