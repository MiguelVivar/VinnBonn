'use client'
import { motion } from 'framer-motion'

export default function Certificados() {
  const certificates = [
    {
      titulo: "Desarrollo Web Frontend",
      institucion: "Platzi",
      fecha: "2023",
      descripcion: "Especialización en tecnologías modernas de desarrollo web",
      enlace: "https://platzi.com/certificado/123456"
    },
    {
      titulo: "React y Next.js",
      institucion: "Udemy",
      fecha: "2023",
      descripcion: "Desarrollo de aplicaciones web con React y Next.js",
      enlace: "https://udemy.com/certificate/123456"
    },
    {
      titulo: "TypeScript Avanzado",
      institucion: "Coursera",
      fecha: "2024",
      descripcion: "Programación orientada a objetos con TypeScript",
      enlace: "https://coursera.org/verify/123456"
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
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-violet-700 mb-6"
        >
          Certificados
        </motion.h2>
        
        <div className="space-y-6 h-[calc(100%-4rem)] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="grid grid-cols-1 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-semibold text-gray-800 mb-2"
                >
                  {cert.titulo}
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-violet-700 mb-3"
                >
                  <span className="font-medium">{cert.institucion}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{cert.fecha}</span>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mb-4"
                >
                  {cert.descripcion}
                </motion.p>
                <motion.a
                  href={cert.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-violet-700 text-white rounded-lg hover:bg-violet-800 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Certificado
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}
