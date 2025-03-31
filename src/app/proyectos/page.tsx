'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaProjectDiagram } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer } from 'react-icons/si'

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // Mapa de iconos para tecnologías
  const techIcons: { [key: string]: React.ReactElement } = {
    'React': <FaReact className="text-[#61DAFB]" />,
    'Next.js': <SiNextdotjs className="text-black" />,
    'TypeScript': <SiTypescript className="text-[#3178C6]" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#38B2AC]" />,
    'Framer Motion': <SiFramer className="text-[#0055FF]" />,
    'Node.js': <FaNodeJs className="text-[#339933]" />
  };

  const proyectos = [
    {
      titulo: 'Portafolio Personal',
      descripcion: 'Sitio web personal desarrollado para mostrar mi trabajo y experiencia en el desarrollo web, con un diseño moderno.',
      imagen: '/portafolio.png',
      link: 'https://vinn-bonn.vercel.app/',
      github: 'https://github.com/MiguelVivar/VinnBonn',
      tecnologias: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      detalles: 'Este portafolio fue diseñado con un enfoque en la experiencia de usuario, utilizando animaciones suaves y un diseño limpio. Implementé técnicas modernas de desarrollo web para asegurar un rendimiento óptimo y una experiencia visual atractiva.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  }

  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex-1 p-3 md:p-6 bg-gray-50 min-h-screen overflow-hidden"
    >
      <section className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center mb-8 gap-4"
        >
          <motion.div 
            className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaProjectDiagram/>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-purple-500"
          >
            Mis Proyectos
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {proyectos.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover="hover"
              className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-purple-100 cursor-pointer"
              onClick={() => setActiveProject(activeProject === index ? null : index)}
            >
              <div className="relative h-48 md:h-64 overflow-hidden group">
                <Image
                  src={project.imagen}
                  alt={project.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-3">
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full text-violet-800 hover:bg-white transition-colors duration-300"
                      whileHover={{ scale: 1.1, y: -3 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                    <motion.a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full text-violet-800 hover:bg-white transition-colors duration-300"
                      whileHover={{ scale: 1.1, y: -3 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{project.titulo}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.descripcion}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tecnologias.map((tech, techIndex) => (
                    <motion.div 
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium flex items-center space-x-1"
                    >
                      <span className="text-lg">{techIcons[tech]}</span>
                      <span>{tech}</span>
                    </motion.div>
                  ))}
                </div>
                
                <AnimatePresence>
                  {activeProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <p className="text-gray-600 text-sm md:text-base">{project.detalles}</p>
                      <motion.div 
                        className="mt-4 flex justify-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300 items-center space-x-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Ver Proyecto</span>
                          <FaExternalLinkAlt />
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {proyectos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-center shadow-md border border-purple-100"
          >
            <h3 className="text-xl font-medium text-gray-700 mb-2">¡Próximamente más proyectos!</h3>
            <p className="text-gray-600">Estoy trabajando en nuevos proyectos que pronto estarán disponibles aquí.</p>
          </motion.div>
        )}
      </section>
    </motion.main>
  )
}

export default ProjectsPage
