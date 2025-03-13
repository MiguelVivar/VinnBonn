'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ProjectsPage = () => {
  const proyectos = [
    {
      titulo: 'Portafolio Personal',
      descripcion: 'Sitio web personal desarrollado para mostrar mi trabajo y experiencia en el desarrollo web, con un diseño moderno y responsive.',
      imagen: '/portafolio.png',
      link: '#',
      tecnologias: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex-1 p-6 bg-gray-50 overflow-hidden"
    >
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-violet-700 mb-6">Proyectos</h2>
        <div className="space-y-6 h-[calc(100%-4rem)] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="grid grid-cols-1 gap-6">
            {proyectos.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="relative h-64"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.imagen}
                    alt={project.titulo}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.titulo}</h3>
                  <p className="text-gray-600 mb-4">{project.descripcion}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tecnologias.map((tech, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a 
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-violet-700 hover:bg-violet-800 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                  >
                    Ver Proyecto
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default ProjectsPage
