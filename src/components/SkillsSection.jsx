import SkillCard from "./SkillCard";
import {
  SiDjango, SiGit, SiReact, SiDocker, SiJavascript, SiTypescript,
  SiHtml5, SiCss3, SiMysql, SiTailwindcss 
} from 'react-icons/si';

import PythonIcon from '../assets/svg/python-svgrepo-com.svg?react';
import PostgreSQLIcon from '../assets/svg/postgresql-icon.svg?react';
import PyTestIcon from '../assets/svg/pytest.svg?react';
import PlaywrightIcon from '../assets/svg/Playwright.svg?react';

const categories = {
  "Frontend": [
    {
      title: "React",
      icon: <SiReact className="h-10 w-10 transition-transform duration-300 hover:scale-110" color="#61DBFB" />,
      text: "Experiencia sólida en desarrollo de aplicaciones web completas con React.",
    },
    {
      title: "JavaScript",
      icon: <SiJavascript className="w-10 h-10 transition-transform duration-300 hover:scale-110" color="#f7df1e" />,
      text: "Uso diario para lógica frontend y manejo del DOM.",
    },
    {
      title: "TypeScript",
      icon: <SiTypescript className="w-10 h-10 transition-transform duration-300 hover:scale-110" color="#3178c6" />,
      text: "Experiencia moderada utilizando tipado en proyectos React.",
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss className="w-10 h-10 transition-transform duration-300 hover:scale-110" color="#38bdf8" />,
      text: "Uso fluido de utilidades para diseño responsivo y prototipado rápido.",
    },
    {
      title: "HTML5",
      icon: <SiHtml5 className="w-10 h-10 transition-transform duration-300 hover:scale-110" color="#e34c26" />,
      text: "Uso habitual para estructurar contenido en aplicaciones web.",
    },
    {
      title: "CSS3",
      icon: <SiCss3 className="w-10 h-10 transition-transform duration-300 hover:scale-110" color="#264de4" />,
      text: "Conocimientos sólidos en diseño responsivo y estilización avanzada.",
    },
  ],
  "Backend y Bases de datos": [
    {
      title: "Django",
      icon: <SiDjango className="w-10 h-10 transition-transform duration-300 hover:scale-110" color="#2aa976" />,
      text: "Backend principal en múltiples proyectos web con bases de datos integradas.",
    },
    {
      title: "Python",
      icon: <PythonIcon className="w-10 h-10 transition-transform duration-300 hover:scale-110" />,
      text: "Lenguaje principal para desarrollo backend y herramientas de accesibilidad.",
    },
    {
      title: "PostgreSQL",
      icon: <PostgreSQLIcon className="w-10 h-10 transition-transform duration-300 hover:scale-110" />,
      text: "Gestión y modelado de datos en entornos productivos con Django.",
    },
    {
      title: "MySQL",
      icon: <SiMysql className="w-10 h-10 transition-transform duration-300 hover:scale-110" color="#00758f" />,
      text: "Conocimientos prácticos en bases de datos relacionales.",
    },
  ],
  "DevOps y Herramientas": [
    {
      title: "Docker",
      icon: <SiDocker className="w-10 h-10 transition-transform duration-300 hover:scale-110" color="#0db7ed" />,
      text: "Experiencia práctica en contenerización de proyectos para desarrollo y producción.",
    },
    {
      title: "Git",
      icon: <SiGit className="w-10 h-10 transition-transform duration-300 hover:scale-110" color="#f14e32" />,
      text: "Uso constante para control de versiones y colaboración en proyectos grupales.",
    },
    {
      title: "Pytest",
      icon: <PyTestIcon className="w-10 h-10 transition-transform duration-300 hover:scale-110" />,
      text: "Uso para pruebas unitarias y automatización de tests en proyectos Python.",
    },
    {
        title: "Playwright",
        icon: <PlaywrightIcon className="w-10 h-10 transition-transform duration-300 hover:scale-110" />,
        text: "Automatización de pruebas end-to-end en entornos web con enfoque multiplataforma.",
    },
  ],
  "Metodologías": [
    {
      title: "Scrum",
      icon: (
        <span className="w-10 h-10 text-white text-xl font-bold select-none cursor-default transition-transform duration-300 hover:scale-110">
          ⚙
        </span>
      ),
      text: "Participación en equipos bajo metodologías ágiles en entornos académicos.",
    },
    {
      title: "Agile",
      icon: (
        <span className="w-10 h-10 text-white text-xl font-bold select-none cursor-default transition-transform duration-300 hover:scale-110">
          🚀
        </span>
      ),
      text: "Familiaridad con prácticas ágiles para la entrega iterativa de software.",
    },
  ],
};



function SkillsSection() {
  return (
    <div className="w-full mb-30 t-20 mx-auto px-6 md:px-12">
      <div className="mb-16">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-wider">
          SKILLS
        </h1>
      </div>
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="mb-12">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">{category}</h2>
            <div className="inline-grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                icon={skill.icon}
                text={skill.text}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsSection;
