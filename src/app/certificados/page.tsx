'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGraduationCap, FaExternalLinkAlt, FaCalendarAlt, FaBuilding, FaAward } from 'react-icons/fa'
import Image from 'next/image'

export default function Certificados() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const certificates = [
    {
      titulo: "Desarrollo Web Frontend",
      institucion: "Platzi",
      fecha: "2023",
      descripcion: "Especialización en tecnologías modernas de desarrollo web incluyendo HTML5, CSS3, JavaScript y frameworks modernos como React.",
      enlace: "https://platzi.com/certificado/123456",
      imagen: "/certificado1.jpg",
      skills: ["HTML5", "CSS3", "JavaScript", "React"]
    },
    {
      titulo: "React y Next.js",
      institucion: "Udemy",
      fecha: "2023",
      descripcion: "Desarrollo de aplicaciones web con React y Next.js, implementando SSR, SSG y optimización de rendimiento para aplicaciones modernas.",
      enlace: "https://udemy.com/certificate/123456",
      imagen: "/certificado2.jpg",
      skills: ["React", "Next.js", "SSR", "Hooks"]
    },
    {
      titulo: "TypeScript Avanzado",
      institucion: "Coursera",
      fecha: "2024",
      descripcion: "Programación orientada a objetos con TypeScript, tipos genéricos, interfaces avanzadas y patrones de diseño para aplicaciones escalables.",
      enlace: "https://coursera.org/verify/123456",
      imagen: "/certificado3.jpg",
      skills: ["TypeScript", "OOP", "Design Patterns", "Generics"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 15px 30px rgba(124, 58, 237, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3
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
      <section className="max-w-4xl mx-auto">
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
            <FaGraduationCap className="text-2xl md:text-3xl" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-purple-500"
          >
            Mis Certificados
          </motion.h2>
        </motion.div>
        
        <div className="space-y-6">
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 gap-6"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-purple-100 cursor-pointer"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-600 opacity-90 flex items-center justify-center">
                      <FaAward className="text-white text-6xl opacity-30" />
                    </div>
                    {cert.imagen && (
                      <div className="absolute inset-0 opacity-20">
                        <Image
                          src={cert.imagen}
                          alt={cert.titulo}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full mb-3"
                      >
                        <FaGraduationCap className="text-3xl" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-center">{cert.institucion}</h3>
                      <div className="flex items-center mt-2">
                        <FaCalendarAlt className="mr-1" />
                        <span>{cert.fecha}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 md:p-6 md:w-2/3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{cert.titulo}</h3>
                      <motion.a
                        href={cert.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-600 hover:text-violet-800 transition-colors duration-300 ml-2"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <FaBuilding className="mr-2" />
                      <span>{cert.institucion}</span>
                      <span className="mx-2">•</span>
                      <FaCalendarAlt className="mr-1" />
                      <span>{cert.fecha}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{cert.descripcion}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          variants={skillVariants}
                          className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                    
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-200"
                        >
                          <motion.div 
                            className="flex justify-end"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <motion.a
                              href={cert.enlace}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300 flex items-center space-x-2"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Ver Certificado</span>
                              <FaExternalLinkAlt className="ml-2" />
                            </motion.a>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {certificates.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-center shadow-md border border-purple-100"
            >
              <h3 className="text-xl font-medium text-gray-700 mb-2">¡Próximamente más certificados!</h3>
              <p className="text-gray-600">Estoy en constante aprendizaje y pronto añadiré nuevos certificados.</p>
            </motion.div>
          )}
        </div>
      </section>
    </motion.main>
  )
}
