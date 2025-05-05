const LogoSvg = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 40 40" 
      xmlns="http://www.w3.org/2000/svg"
    >
     
      <circle cx="20" cy="20" r="20" fill="#14b8a6" />
      
     
      <circle cx="20" cy="20" r="16" fill="currentColor" className="text-white dark:text-navy-900" />
      
     
      <text
        x="20"
        y="24"
        fontSize="16"
        fontWeight="bold"
        textAnchor="middle"
        fill="#14b8a6"
        className="text-portfolio-teal dark:text-portfolio-light-teal"
      >
        PG
      </text>
    </svg>
  );
};

export default LogoSvg;