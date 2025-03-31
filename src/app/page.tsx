'use client'
import { motion } from "framer-motion"
import { useState } from "react"
import { FaTiktok, FaInstagram, FaGithub } from "react-icons/fa";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.3
      }
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  }

  const cardHoverVariants = {
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

  const highlightSection = (section: string) => {
    setActiveSection(section);
    setTimeout(() => setActiveSection(null), 1500);
  }

  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex-1 p-3 md:p-6 bg-gray-50 overflow-hidden"
    >
      <section className="max-w-4xl mx-auto bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border border-purple-100">
        <motion.div
          className="flex items-center mb-6 gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            VB
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-violet-700"
          >
            Sobre mí
          </motion.h2>
        </motion.div>

        <div className="space-y-4 md:space-y-6 h-[calc(100%-6rem)] overflow-auto pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <motion.div
            custom={0}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className={`transition-all duration-300 ${activeSection === 'intro' ? 'bg-purple-50 p-3 rounded-lg' : ''}`}
            onClick={() => highlightSection('intro')}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-base md:text-lg text-gray-700 leading-relaxed"
            >
              ¡Hola! Soy Angielina Soto, pero me pueden decir <motion.span 
                className="text-violet-700 font-semibold"
                initial={{ color: "#6D28D9" }}
                animate={{ color: ["#6D28D9", "#9333EA", "#6D28D9"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >Vinn</motion.span>. Una entusiasta estudiante universitaria de Perú con una pasión por la tecnología y el aprendizaje continuo.
            </motion.p>
          </motion.div>

          <motion.div
            custom={1}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className={`transition-all duration-300 ${activeSection === 'education' ? 'bg-purple-50 p-3 rounded-lg' : ''}`}
            onClick={() => highlightSection('education')}
          >
            <motion.h3 
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-xl md:text-2xl font-semibold text-violet-700 mb-2 md:mb-3 flex items-center"
            >
              <motion.span 
                className="inline-block mr-2"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              >
                🎓
              </motion.span>
              Educación
            </motion.h3>
            <motion.div 
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-100"
            >
              <h4 className="font-medium text-lg md:text-xl mb-1">Universidad Nacional San Luis Gonzaga</h4>
              <p className="text-gray-700 text-sm md:text-base">Ingeniería de Sistemas</p>
              <div className="flex items-center mt-1">
                <p className="text-gray-600 text-sm md:text-base">2023 - Presente</p>
                <motion.div 
                  className="ml-2 h-2 w-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            custom={2}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className={`transition-all duration-300 ${activeSection === 'hobbies' ? 'bg-purple-50 p-3 rounded-lg' : ''}`}
            onClick={() => highlightSection('hobbies')}
          >
            <motion.h3 
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-xl md:text-2xl font-semibold text-violet-700 mb-2 md:mb-3 flex items-center"
            >
              <motion.span 
                className="inline-block mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                ⭐
              </motion.span>
              Hobbies e Intereses
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
              <motion.div 
                variants={cardHoverVariants}
                whileHover="hover"
                className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-100"
              >
                <h4 className="font-medium text-base md:text-lg mb-2 text-violet-600 flex items-center">
                  <span className="mr-2">🎮</span>
                  Streams
                </h4>
                <p className="text-gray-700 text-sm md:text-base">
                  Disfruto creando contenido en TikTok, compartiendo momentos divertidos y conectando con mi comunidad a través de streams interactivos sobre gaming y vida universitaria.
                </p>
              </motion.div>
              <motion.div 
                variants={cardHoverVariants}
                whileHover="hover"
                className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-100"
              >
                <h4 className="font-medium text-base md:text-lg mb-2 text-violet-600 flex items-center">
                  <span className="mr-2">🏐</span>
                  Voleybol
                </h4>
                <p className="text-gray-700 text-sm md:text-base">
                  Me encanta jugar voleybol y disfruto de la competencia y el contacto con la naturaleza.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            custom={3}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className={`transition-all duration-300 ${activeSection === 'languages' ? 'bg-purple-50 p-3 rounded-lg' : ''}`}
            onClick={() => highlightSection('languages')}
          >
            <motion.h3 
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-xl md:text-2xl font-semibold text-violet-700 mb-2 md:mb-3 flex items-center"
            >
              <motion.span 
                className="inline-block mr-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🌎
              </motion.span>
              Idiomas
            </motion.h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 px-4 py-2 rounded-lg md:rounded-xl border border-gray-100 flex items-center"
              >
                <span className="font-medium text-sm md:text-base">Español</span>
                <div className="ml-2 flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div 
                      key={i}
                      className="h-2 w-2 bg-violet-600 rounded-full"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2 text-sm md:text-base">Nativo</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 px-4 py-2 rounded-lg md:rounded-xl border border-gray-100 flex items-center"
              >
                <span className="font-medium text-sm md:text-base">Inglés</span>
                <div className="ml-2 flex space-x-1">
                  {[1, 2].map((i) => (
                    <motion.div 
                      key={i}
                      className="h-2 w-2 bg-violet-600 rounded-full"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                    />
                  ))}
                  {[3, 4, 5].map((i) => (
                    <div key={i} className="h-2 w-2 bg-gray-300 rounded-full" />
                  ))}
                </div>
                <span className="text-gray-600 ml-2 text-sm md:text-base">Básico</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            custom={4}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 pt-4 border-t border-gray-100"
          >
            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {[
                { name: 'TikTok', url: 'https://www.tiktok.com/@vinnibombom', icon: <FaTiktok/> },
                { name: 'Instagram', url: 'https://www.instagram.com/vinnbon/', icon: <FaInstagram/> },
                { name: 'GitHub', url: 'https://github.com/Rinvinvin', icon: <FaGithub/> }
              ].map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-md flex items-center"
                >
                  <span className="mr-1">{platform.icon}</span>
                  {platform.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}