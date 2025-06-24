import { useState } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaChevronDown } from "react-icons/fa";
import ScrollCircle from './ScrollCircle';


function Header() {
    const [isBioOpen, setIsBioOpen] = useState(false);

    return (
        <section className="py-20 md:py-28 m-10 bg-radial from-purple-600/30  to-black max-w-7xl">
            <h1 className="text-4xl text-white sm:text-5xl md:text-6xl mb-6 font-light tracking-wider">
                BALTAZAR MOLTENI
            </h1>
            <h1 className="text-2xl text-neutral-300 sm:text-3xl md:text-4xl mb-6 font-light tracking-wider">
                Analista de Sistemas | Desarrollador Full Stack
            </h1>
            <div
            onClick={() => setIsBioOpen(!isBioOpen)}
            className="md:hidden flex justify-between items-center cursor-pointer border-b border-neutral-700 pb-3 mb-4"
            >
            <h2 className="text-xl font-semibold text-neutral-200">
                Acerca de mí
            </h2>
            <FaChevronDown
                className={`text-neutral-300 transition-transform duration-300 ${isBioOpen ? 'rotate-180' : ''}`}
            />
            </div>
            <p
            className={`text-lg sm:text-xl font-extralight text-neutral-400 transition-all duration-300 
                ${isBioOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'} 
                md:max-h-screen md:opacity-100 md:mt-0 overflow-hidden`}
            >
            Analista de Sistemas y estudiante avanzado de Ingeniería en Sistemas en la UTN FRLP. Cuento con experiencia en desarrollo Full-stack, especializado en la creación de soluciones web con Python, Django y React. Mi enfoque principal es el análisis y diseño de sistemas para resolver problemas complejos, con experiencia destacada en el desarrollo de software accesible.
            </p>
            <div className="flex items-center gap-4 mt-5">
                <a href="https://github.com/BaltaMolteni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <SiGithub className="h-6 w-6 hover:-translate-y-1 hover:transition-transform" color='white' />
                </a>
                <a href="https://www.linkedin.com/in/baltazar-molteni-975087250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <SiLinkedin className="h-6 w-6 hover:-translate-y-1 hover:transition-transform transition-colors" color='white'/>
                </a>
            </div>
            <div className="mt-10 flex justify-center items-center">
                <ScrollCircle/>
            </div>
        </section>
    );
}

export default Header;
