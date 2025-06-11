import { SiGithub, SiLinkedin } from 'react-icons/si';

// cambiar class de iconos

function Header() {
    return (
        <section className="py-20 md:py-28 m-10 bg-radial from-gray-700  to-black max-w-7xl">
            <h1 className="text-4xl  tracking-tight sm:text-5xl md:text-6xl mb-6 stoked">
                baltazar molteni
            </h1>
            <p className="text-xl font-extralight text-neutral-400">Soy un analista de sistemas de 20 años con sólidos conocimientos en desarrollo de software y diseño de soluciones tecnológicas. Me especializo en analizar, modelar y optimizar sistemas para resolver problemas del mundo real. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades en la creación de soluciones eficientes y funcionales.</p>
            <div className="flex items-center gap-4 mt-5">
                <a href="https://github.com/BaltaMolteni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <SiGithub className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/baltazar-molteni-975087250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <SiLinkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
            </div>
        </section>
    );
}

export default Header;
