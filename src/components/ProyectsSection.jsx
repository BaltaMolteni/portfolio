import React, { useState } from 'react';
import { ArrowUpRight, X, ExternalLink, Calendar, Users } from 'lucide-react';

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "Turnero Clínica Odontológica",
      subtitle: "Sistema de gestión de turnos",
      image: "images/maycenter-home.png", 
      className: "col-span-2 row-span-2",
      bgGradient: "from-blue-500 via-cyan-500 to-teal-600",
      description: "Aplicación web desarrollada para la gestión de turnos de una clínica odontológica. Incluye autenticación, vista para administradores, y panel administrativo.",
      technologies: ["Django", "React", "PostgreSQL", "Tailwind CSS", "Nginx"],
      duration: "2 meses",
      team: "1 desarrollador (individual)",
      features: [
        "Registro y autenticación de usuarios",
        "Asignación de turnos por profesional",
        "Panel de control administrativo",
        "Integración con base de datos PostgreSQL"
      ],
      challenges: "Optimizar consultas a la base de datos en tiempo real y lograr una interfaz clara."
    },
    {
      id: 2,
      title: "Accesibilidad para ArSens",
      subtitle: "Software para personas no videntes",
      image: "images/arsens.png", 
      className: "col-span-1 row-span-1",
      bgGradient: "from-gray-800 via-gray-600 to-zinc-700",
      description: "Módulo de accesibilidad para el software científico ArSens. Implementa navegación con teclado y lector de pantalla para usuarios con discapacidad visual.",
      technologies: ["Python", "Tkinter", "TTS", "Playwright"],
      duration: "Un año (proyecto de seminario)",
      team: "Grupo de investigación (IEC - UTN)",
      features: [
        "Soporte para navegación con teclado",
        "Integración con lectores de pantalla",
        "Feedback sonoro en la UI",
        "Testeo automatizado con Playwright"
      ],
      challenges: "Garantizar usabilidad sin mouse y compatibilidad con lectores de pantalla en entornos científicos complejos."
    },
    {
      id: 3,
      title: "Gestor para Centro de Kinesiología",
      subtitle: "Plataforma clínica universitaria",
      image: "images/kine-consultas.png",
      className: "col-span-1 row-span-1",
      bgGradient: "from-green-600 via-emerald-500 to-lime-400",
      description: "Aplicación web para la gestión de historiales clínicos y turnos en un centro de kinesiología. Integra distintos roles y funcionalidades específicas.",
      technologies: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
      duration: "4 meses (estimado)",
      team: "4 desarrolladores (UTN)",
      features: [
        "Carga y consulta de historiales clínicos",
        "Asignación de citas médicas",
        "Paneles personalizados por rol",
        "Exportación de datos"
      ],
      challenges: "Diseñar una arquitectura escalable para múltiples tipos de usuario e integrar la información clínica de forma segura."
    }
  ];


  return (
    <section id="proyectos" className="w-full mx-auto px-4 py-16 md:px-12">
      {/* Header */}
      <div className=" mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-light tracking-wider">
          MIS TRABAJOS
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 gap-4 h-[600px]">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`${project.className} relative group cursor-pointer overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02]`}
          >
            {/* Background*/}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              {/* Arrow icon */}
              <div className="flex justify-end">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              {/* Project info */}
              <div className="space-y-2">
                <h3 className="text-xl font-medium">
                  <span className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-1 inline-block">
                    {project.title}
                  </span>
                </h3>
                <p className="text-sm">
                  <span className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-1 inline-block">
                    {project.subtitle}
                  </span>
                </p>
              </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div
              className="h-64 relative overflow-hidden rounded-t-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${selectedProject.image})` }}
            >

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-4xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-xl opacity-90">{selectedProject.subtitle}</p>
              </div>
            </div>

            <div className="p-8 text-white bg-black">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Duración</p>
                    <p className="font-medium">{selectedProject.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-sm text-gray-400">Tamaño de Equipo</p>
                    <p className="font-medium">{selectedProject.team}</p>
                  </div>
                </div>
                {selectedProject.liveUrl && (
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Sitio</p>
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                )
                }
                
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Acerca del Proyecto</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{selectedProject.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Tecnologías Utilizadas</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Características Principales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Desafíos Técnicos</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject.challenges}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;