import { File } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import ScrollCircle from './ScrollCircle';


function Header() {
    return (
        <section className="py-20 md:py-28 m-10 bg-radial from-purple-600/30  to-black max-w-7xl">
            <h1 className="text-4xl text-white sm:text-5xl md:text-6xl mb-6 font-light tracking-wider">
                BALTAZAR MOLTENI
            </h1>
             <h1 className="text-2xl text-neutral-300 sm:text-3xl md:text-4xl mb-6 font-light tracking-wider">
                Analista de Sistemas | Desarrollador Full Stack
            </h1>
            <p className="text-xl font-extralight text-neutral-400">Analista de Sistemas y estudiante avanzado de Ingeniería en Sistemas en la UTN FRLP. Cuento con experiencia en desarrollo Full-stack, especializado en la creación de soluciones web con Python, Django y React. Mi enfoque principal es el análisis y diseño de sistemas para resolver problemas complejos, con experiencia destacada en el desarrollo de software accesible.</p>
            <div className="flex items-center gap-4 mt-5">
                <a href="https://github.com/BaltaMolteni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <SiGithub className="h-6 w-6 hover:-translate-y-1 hover:transition-transform" color='white' />
                </a>
                <a href="https://www.linkedin.com/in/baltazar-molteni-975087250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <SiLinkedin className="h-6 w-6 hover:-translate-y-1 hover:transition-transform transition-colors" color='white'/>
                </a>
            </div>
            {/* MODIFICAR EL LINK */}
           {/* <div className="px-4 py-2 mt-5 w-fit text-white bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-105">
                <a
                    href="/CV-Baltazar-Molteni.pdf"
                    download
                    rel="noopener noreferrer"
                    className="flex flex-row justify-center items-center"
                >
                    <File className="mr-2" /> Descarga mi CV
                </a>
            </div> */}

            <div className="mt-10 flex justify-center items-center">
                <ScrollCircle/>
            </div>
        </section>
    );
}

export default Header;
