interface AnimatedPenProps {
  isWriting: boolean;
}

export const AnimatedPen = ({ isWriting }: AnimatedPenProps) => {
  return (
    <div 
      className={`inline-block ml-1 transition-all duration-300 ${
        isWriting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{
        transform: isWriting ? 'rotate(-15deg) translateY(-0.2rem)' : 'rotate(-45deg) translateY(-1rem)',
        transformOrigin: 'bottom left'
      }}
    >
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]"
      >
        {/* Hand outline suggestion */}
        <path 
          d="M2 20C2 20 3 19 4 18" 
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.3"
        />
        
        {/* Ink pen body - white/silver */}
        <path 
          d="M5 17L8 14L18 4L20 2L22 4L20 6L10 16L7 19L5 17Z" 
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        
        {/* Pen details - metallic look */}
        <path 
          d="M18 4L20 6" 
          stroke="#D1D5DB"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Pen tip - black nib */}
        <path 
          d="M5 17L7 19L6 20L4 18L5 17Z" 
          fill="#1F2937"
        />
        
        {/* Ink flow animation */}
        <path 
          d="M5.5 18L3 20.5" 
          stroke="#1F2937"
          strokeWidth="2"
          strokeLinecap="round"
          className={isWriting ? 'opacity-100' : 'opacity-0'}
          style={{
            animation: isWriting ? 'inkFlow 0.5s ease-in-out infinite' : 'none'
          }}
        />
        
        {/* Pen grip rings */}
        <line x1="14" y1="8" x2="15" y2="7" stroke="#9CA3AF" strokeWidth="1" />
        <line x1="16" y1="6" x2="17" y2="5" stroke="#9CA3AF" strokeWidth="1" />
      </svg>
      
      <style>{`
        @keyframes inkFlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
