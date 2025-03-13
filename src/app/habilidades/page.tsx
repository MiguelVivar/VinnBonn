'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { nombre: 'HTML', porcentaje: 90 },
    { nombre: 'CSS', porcentaje: 85 },
    { nombre: 'JavaScript', porcentaje: 85 },
    { nombre: 'TypeScript', porcentaje: 80 },
    { nombre: 'React', porcentaje: 85 },
    { nombre: 'Next.js', porcentaje: 80 },
    { nombre: 'Node.js', porcentaje: 75 },
    { nombre: 'Python', porcentaje: 70 },
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
      className="flex-1 p-6 bg-gray-50 h-screen overflow-hidden"
    >
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-violet-700 mb-6">Habilidades Técnicas</h2>
        
        <div className="space-y-4 h-[calc(100%-4rem)] overflow-auto pr-2">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.nombre} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-4 rounded-xl"
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">{skill.nombre}</span>
                <span className="text-violet-700">{skill.porcentaje}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-violet-700 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.porcentaje}%` }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  )
}

export default Skills
