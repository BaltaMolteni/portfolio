import { File } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

// cambiar class de iconos

function Header() {
    return (
        <section className="py-20 md:py-28 m-10 bg-radial from-purple-600/30  to-black max-w-7xl">
            <h1 className="text-4xl text-white sm:text-5xl md:text-6xl mb-6 font-light tracking-wider">
                BALTAZAR MOLTENI
            </h1>
             <h1 className="text-2xl text-neutral-300 sm:text-3xl md:text-4xl mb-6 font-light tracking-wider">
                Analista de Sistemas | Desarrollador Full Stack
            </h1>
            <p className="text-xl font-extralight text-neutral-400">Soy un analista de sistemas de 20 años con sólidos conocimientos en desarrollo de software y diseño de soluciones tecnológicas. Me especializo en analizar, modelar y optimizar sistemas para resolver problemas del mundo real. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades en la creación de soluciones eficientes y funcionales.</p>
            <div className="flex items-center gap-4 mt-5">
                <a href="https://github.com/BaltaMolteni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <SiGithub className="h-6 w-6 hover:-translate-y-1 hover:transition-transform" color='white' />
                </a>
                <a href="https://www.linkedin.com/in/baltazar-molteni-975087250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <SiLinkedin className="h-6 w-6 hover:-translate-y-1 hover:transition-transform transition-colors" color='white'/>
                </a>
            </div>
            {/* MODIFICAR EL LINK */}
            {/* <a href='' rel="noopener noreferrer">
                <div className='flex flex-row mx-2 mt-4 w-fit border border-neutral-500 rounded-xl p-1 text-neutral-500 hover:border-neutral-600 hover:text-neutral-600'>
                    <File className='mr-2'/> Descargar mi CV
                </div>
            </a>  */}
            <div
                className="px-4 py-2 mt-4 w-fit  text-white bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm font-medium"
            > 
                <a href='' rel="noopener noreferrer">
                    Descarga mi CV
                </a>
            </div>
                
        </section>
    );
}

export default Header;
