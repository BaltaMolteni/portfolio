import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProyectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Savage Nation",
      subtitle: "Digital Collectible",
      image: "/api/placeholder/600/400",
      className: "col-span-2 row-span-2",
      bgGradient: "from-red-500 via-pink-500 to-purple-600"
    },
    {
      id: 2,
      title: "Gooky Crunch",
      subtitle: "Ecommerce",
      image: "/api/placeholder/400/300",
      className: "col-span-1 row-span-1",
      bgGradient: "from-purple-600 via-blue-600 to-indigo-700"
    },
    {
      id: 3,
      title: "Kaison Talent",
      subtitle: "Marketing Agency",
      image: "/api/placeholder/400/300",
      className: "col-span-1 row-span-1",
      bgGradient: "from-gray-300 via-gray-400 to-gray-500"
    }
  ];

  return (
    <section className="w-full mx-auto px-6 md:px-12 py-16">
      <div className="text-left mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-light tracking-wider">
          MIS TRABAJOS
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[600px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${project.className} relative group cursor-pointer overflow-hidden rounded-2xl`}
          >
            {/* Background with gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-80`} />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              {/* Arrow icon */}
              <div className="flex justify-end">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              {/* Project info */}
              <div className="space-y-1">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-sm opacity-80">{project.subtitle}</p>
              </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProyectsSection;