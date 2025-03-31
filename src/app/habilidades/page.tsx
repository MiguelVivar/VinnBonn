'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaCode } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiDocker } from 'react-icons/si'
import { BsGearFill } from 'react-icons/bs'
import { MdBrush } from 'react-icons/md'
import { BiWrench } from 'react-icons/bi'

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  
  const skillCategories = [
    {
      category: "Frontend",
      icon: <MdBrush className="text-violet-600" />,
      skills: [
        { nombre: 'HTML', porcentaje: 90, color: "#E34F26", logo: <FaHtml5 className="text-[#E34F26]" /> },
        { nombre: 'CSS', porcentaje: 85, color: "#1572B6", logo: <FaCss3Alt className="text-[#1572B6]" /> },
        { nombre: 'JavaScript', porcentaje: 85, color: "#F7DF1E", logo: <FaJs className="text-[#F7DF1E]" /> },
        { nombre: 'TypeScript', porcentaje: 80, color: "#3178C6", logo: <SiTypescript className="text-[#3178C6]" /> },
        { nombre: 'React', porcentaje: 85, color: "#61DAFB", logo: <FaReact className="text-[#61DAFB]" /> },
        { nombre: 'Next.js', porcentaje: 80, color: "#000000", logo: <SiNextdotjs className="text-black" /> },
      ]
    },
    {
      category: "Backend",
      icon: <BsGearFill className="text-violet-600" />,
      skills: [
        { nombre: 'Node.js', porcentaje: 75, color: "#339933", logo: <FaNodeJs className="text-[#339933]" /> },
        { nombre: 'Express', porcentaje: 70, color: "#000000", logo: <SiExpress className="text-black" /> },
        { nombre: 'MongoDB', porcentaje: 65, color: "#47A248", logo: <SiMongodb className="text-[#47A248]" /> },
      ]
    },
    {
      category: "Otros",
      icon: <BiWrench className="text-violet-600" />,
      skills: [
        { nombre: 'Python', porcentaje: 70, color: "#3776AB", logo: <FaPython className="text-[#3776AB]" /> },
        { nombre: 'Git', porcentaje: 80, color: "#F05032", logo: <FaGitAlt className="text-[#F05032]" /> },
        { nombre: 'Docker', porcentaje: 60, color: "#2496ED", logo: <SiDocker className="text-[#2496ED]" /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(124, 58, 237, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
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
      <section className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 border border-purple-100">
        <motion.div
          className="flex items-center mb-6 gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaCode className="text-2xl md:text-3xl" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-purple-500"
          >
            Habilidades Técnicas
          </motion.h2>
        </motion.div>
        
        <div className="space-y-6 h-[calc(100%-5rem)] overflow-auto pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.category}
              variants={categoryVariants}
              className="mb-8"
            >
              <motion.h3 
                className="text-xl md:text-2xl font-semibold text-violet-700 mb-4 flex items-center border-b border-purple-100 pb-2 cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span 
                  className="inline-block mr-2 text-2xl bg-purple-50 p-2 rounded-lg cursor-pointer"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                  {category.icon}
                </motion.span>
                {category.category}
              </motion.h3>
              
              <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.nombre} 
                    variants={skillVariants}
                    whileHover="hover"
                    className={`bg-gray-50 p-4 rounded-xl border border-gray-100 transition-all duration-300 ${activeSkill === skill.nombre ? 'ring-2 ring-violet-300 bg-purple-50' : ''} h-full`}
                    onClick={() => setActiveSkill(activeSkill === skill.nombre ? null : skill.nombre)}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <motion.div 
                          className="text-3xl mr-3 p-2 bg-white rounded-lg shadow-sm"
                          whileHover={{ y: -3 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {skill.logo}
                        </motion.div>
                        <span className="text-gray-700 font-medium text-lg">{skill.nombre}</span>
                      </div>
                      <div className="flex items-center">
                        <motion.div 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold text-white mr-2 shadow-md"
                          style={{ backgroundColor: skill.color }}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {skill.porcentaje}
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.porcentaje}%` }}
                        transition={{ 
                          duration: 1.2, 
                          delay: catIndex * 0.2 + index * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                    
                    {activeSkill === skill.nombre && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-3 border-t border-gray-200"
                      >
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Principiante</span>
                          <span>Intermedio</span>
                          <span>Avanzado</span>
                          <span>Experto</span>
                        </div>
                        <div className="mb-3 flex justify-between relative">
                          <div className="absolute top-2 left-0 right-0 h-[1px] bg-gray-200"></div>
                          {[25, 50, 75, 100].map(mark => (
                            <motion.div 
                              key={mark}
                              className={`h-4 w-1 z-10 ${skill.porcentaje >= mark ? 'bg-violet-600' : 'bg-gray-300'}`}
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ delay: 0.2, duration: 0.4 }}
                            />
                          ))}
                        </div>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="mt-2 text-sm text-gray-600 bg-white/80 p-2 rounded-lg"
                        >
                          {getSkillDescription(skill.nombre)}
                        </motion.p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  )
}

// Función para obtener descripciones de habilidades
function getSkillDescription(skillName: string): string {
  const descriptions: {[key: string]: string} = {
    'HTML': 'Dominio avanzado de HTML5, semántica web y accesibilidad. Experiencia creando estructuras web complejas y optimizadas.',
    'CSS': 'Conocimiento profundo de CSS3, Flexbox, Grid, animaciones y diseño responsive. Experiencia con preprocesadores como SASS.',
    'JavaScript': 'Sólido manejo de ES6+, manipulación del DOM, asincronía, y patrones de diseño. Experiencia con APIs modernas.',
    'TypeScript': 'Implementación de tipado estático, interfaces, genéricos y otras características avanzadas para código más robusto.',
    'React': 'Desarrollo de aplicaciones SPA complejas, manejo de estado, hooks, context API y optimización de rendimiento.',
    'Next.js': 'Creación de aplicaciones con SSR, SSG, ISR y API routes. Experiencia con optimización de imágenes y rutas.',
    'Node.js': 'Desarrollo de APIs RESTful, manejo de streams, eventos y módulos nativos. Experiencia con Express y middlewares.',
    'Express': 'Creación de servidores web, APIs RESTful, middlewares personalizados y manejo de rutas.',
    'MongoDB': 'Diseño de esquemas, consultas complejas, agregaciones y optimización de bases de datos NoSQL.',
    'Python': 'Desarrollo de scripts, automatización y análisis de datos. Experiencia con bibliotecas como Pandas y NumPy.',
    'Git': 'Control de versiones, branching strategies, resolución de conflictos y flujos de trabajo colaborativos.',
    'Docker': 'Creación de contenedores, imágenes personalizadas, Docker Compose y despliegue de aplicaciones.',
  };
  
  return descriptions[skillName] || 'Habilidad técnica en desarrollo continuo.';
}

export default Skills
