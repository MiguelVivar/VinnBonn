'use client'
import Image from "next/image"
import { FaGithub, FaInstagram, FaTiktok, FaLinkedin, FaBars, FaTimes, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    // Initial check
    checkIfMobile()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const socialLinks = [
    { 
      icon: <FaTiktok/>, 
      url: 'https://www.tiktok.com/@vinnibombom',
      label: "TikTok"
    },
    { 
      icon: <FaGithub/>, 
      url: 'https://github.com/Rinvinvin',
      label: "GitHub"
    },
    { 
      icon: <FaInstagram/>, 
      url: 'https://www.instagram.com/vinnbon/',
      label: "Instagram"
    },
    { 
      icon: <FaLinkedin/>, 
      url: 'https://linkedin.com/in/yourusername',
      label: "LinkedIn"
    },
  ]

  const contactInfo = [
    { icon: <FaEnvelope/>, text: "contacto@vinnbonn.com", url: "mailto:contacto@vinnbonn.com" },
    { icon: <FaMapMarkerAlt/>, text: "Ica, Perú" }
  ]

  const sidebarVariants = {
    hidden: isMobile ? { y: "100%" } : { x: "-100%" },
    visible: { 
      x: 0, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: isMobile ? { y: "100%" } : { x: "-100%" }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, boxShadow: "0 10px 20px rgba(124, 58, 237, 0.2)" },
    tap: { scale: 0.9 }
  }

  return (
    <>
      {isMobile && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-3 rounded-full shadow-xl lg:hidden flex items-center justify-center w-14 h-14 border-2 border-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      )}
      
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-violet-900 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(!isMobile || (isMobile && isSidebarOpen)) && (
          <motion.div 
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed lg:relative ${
              isMobile 
                ? 'h-auto max-h-[80vh] w-full bottom-0 left-0 rounded-t-[30px] shadow-2xl pb-20' 
                : 'h-screen w-3/4 md:w-1/2 lg:w-1/4 top-0 left-0'
            } bg-white z-40 flex flex-col items-center ${
              isMobile ? 'px-6 pt-8 pb-20 overflow-auto' : 'p-4'
            } border-r border-purple-100`}
          >
            {isMobile && (
              <motion.div 
                className="w-16 h-1.5 bg-gray-300 rounded-full mb-6 -mt-2"
                animate={{ 
                  width: [60, 40, 60],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            )}

            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative">
                <Image 
                  src="/foto.png" 
                  alt="Foto de perfil" 
                  width={350} 
                  height={350} 
                  className="w-48 md:w-64 lg:w-72 h-auto rounded-full border-4 border-violet-700 shadow-lg transition-all duration-300 group-hover:border-purple-500"
                />
                <motion.div 
                  className="absolute -bottom-2 -right-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full p-2 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a className="bg-white rounded-full p-1 flex items-center justify-between">
                    <FaDownload className="text-violet-700 text-lg" />
                    CV
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="text-center space-y-2 md:space-y-3 mt-6"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Angielina Soto
              </h1>
              <div className="relative inline-block">
                <h2 className="text-xl md:text-2xl font-bold">
                  Vinn<span className="text-violet-700">Bonn</span>
                </h2>
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <p className="text-base md:text-lg text-gray-600 px-4">
                Estudiante de <span className="text-violet-700 font-semibold">Ingeniería de Sistemas</span>
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-4 text-center px-4 text-gray-600 text-sm md:text-base"
            >
              <p>Apasionada por el desarrollo web y la creación de experiencias digitales interactivas.</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 w-full px-4"
            >
              <div className="bg-purple-50 rounded-xl p-4 space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center text-gray-700"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center mr-3 text-violet-700">
                      {item.icon}
                    </div>
                    {item.url ? (
                      <a 
                        href={item.url} 
                        className="text-violet-700 hover:underline"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex gap-3 mt-6 justify-center"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl rounded-full flex items-center justify-center text-neutral-700 shadow-md transition-all duration-300"
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Botón de Contacto */}
            <motion.div
              variants={itemVariants}
              className="mt-6 w-full px-4"
            >
              <Link href="/contacto">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <FaEnvelope />
                  <span>Contactar</span>
                </motion.button>
              </Link>
            </motion.div>

            <motion.footer 
              variants={itemVariants}
              className="text-center mt-8"
            >
              <p className="text-xs text-gray-500">
                Diseñado y Desarrollado por <Link href="https://github.com/MiguelVivar" className="text-violet-700 hover:underline" target="_blank">Miguel Vivar</Link>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                &copy; {new Date().getFullYear()} VinnBonn. Todos los Derechos Reservados.
              </p>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SideBar