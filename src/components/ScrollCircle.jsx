import { ChevronsDown } from "lucide-react";

const ScrollCircle = () => {
  return (
    <a href="#proyectos" className="cursor-pointer w-40 block mx-auto">
      <div className="relative h-40 flex items-center justify-center">
        <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
          <defs>
            <path
              id="circle"
              d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
            />
          </defs>
          <text fill="white" fontSize="9" fontFamily="sans-serif">
            <textPath xlinkHref="#circle" startOffset="0%">
              MIS TRABAJOS · PRESIONA PARA SCROLLEAR
            </textPath>
          </text>
        </svg>
        <ChevronsDown className="w-6 h-6 text-white z-10" />
          <style>{`
              .animate-spin-slow {
                  animation: spin 12s linear infinite;
              }

              @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
              }
          `}</style>

      </div>
    </a>

  );
};

export default ScrollCircle;
