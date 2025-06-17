import React, { useState } from 'react';
import { ArrowUpRight, X, ExternalLink, Calendar, Users } from 'lucide-react';

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Savage Nation",
      subtitle: "Digital Collectible",
      image: "/api/placeholder/600/400",
      className: "col-span-2 row-span-2",
      bgGradient: "from-red-500 via-pink-500 to-purple-600",
      description: "A revolutionary NFT platform that connects digital artists with collectors worldwide. Built with cutting-edge blockchain technology to ensure secure and transparent transactions.",
      technologies: ["React", "Solidity", "Web3.js", "IPFS", "Ethereum"],
      duration: "6 months",
      team: "5 developers",
      features: [
        "Smart contract integration",
        "Decentralized storage",
        "Real-time marketplace",
        "Artist royalty system"
      ],
      liveUrl: "https://savagenation.com",
      challenges: "Implementing gas-efficient smart contracts and creating an intuitive user experience for both crypto-native and newcomer users."
    },
    {
      id: 2,
      title: "Gooky Crunch",
      subtitle: "Ecommerce",
      image: "/api/placeholder/400/300",
      className: "col-span-1 row-span-1",
      bgGradient: "from-purple-600 via-blue-600 to-indigo-700",
      description: "A modern e-commerce platform specializing in artisanal snacks and gourmet treats. Features advanced inventory management and personalized recommendations.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "AWS"],
      duration: "4 months",
      team: "3 developers",
      features: [
        "Real-time inventory tracking",
        "AI-powered recommendations",
        "Multi-currency support",
        "Advanced analytics dashboard"
      ],
      liveUrl: "https://gookycrunch.com",
      challenges: "Scaling the recommendation engine to handle thousands of products while maintaining fast response times."
    },
    {
      id: 3,
      title: "Kaison Talent",
      subtitle: "Marketing Agency",
      image: "/api/placeholder/400/300",
      className: "col-span-1 row-span-1",
      bgGradient: "from-gray-300 via-gray-400 to-gray-500",
      description: "A comprehensive digital marketing platform that helps businesses manage campaigns, track performance, and optimize their marketing strategies across multiple channels.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Docker", "Google Analytics API"],
      duration: "8 months",
      team: "7 developers",
      features: [
        "Campaign management",
        "Multi-channel tracking",
        "Performance analytics",
        "Client reporting automation"
      ],
      liveUrl: "https://kaisontalent.com",
      challenges: "Integrating with multiple third-party APIs while maintaining data consistency and real-time synchronization."
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
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
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Header with gradient */}
            <div className={`h-64 bg-gradient-to-br ${selectedProject.bgGradient} relative overflow-hidden rounded-t-2xl`}>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-4xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-xl opacity-90">{selectedProject.subtitle}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 text-white">
              {/* Project info grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="font-medium">{selectedProject.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-sm text-gray-400">Team Size</p>
                    <p className="font-medium">{selectedProject.team}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Live Site</p>
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
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">About the Project</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{selectedProject.description}</p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
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

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Technical Challenges</h3>
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