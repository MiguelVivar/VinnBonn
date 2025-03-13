'use client'
import Image from "next/image"
import { FaGithub, FaInstagram, FaTiktok, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

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
    { icon: <FaTiktok/>, url: 'https://www.tiktok.com/@vinnibombom'},
    { icon: <FaGithub/>, url: 'https://github.com/Rinvinvin'},
    { icon: <FaInstagram/>, url: 'https://www.instagram.com/vinnbon/'},
    { icon: <FaLinkedin/>, url: 'https://linkedin.com/in/yourusername'},
  ]

  return (
    <>
      {/* Mobile toggle button - repositioned to bottom center */}
      {isMobile && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-violet-700 text-white p-3 rounded-full shadow-xl lg:hidden flex items-center justify-center w-14 h-14"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      )}
      
      {/* Sidebar overlay for mobile */}
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar content - modified for bottom positioning on mobile */}
      <AnimatePresence>
        {(!isMobile || (isMobile && isSidebarOpen)) && (
          <motion.div 
            initial={isMobile ? { y: 500 } : { x: -300 }}
            animate={{ x: 0, y: 0 }}
            exit={isMobile ? { y: 500 } : { x: -300 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed lg:relative ${isMobile ? 'h-auto max-h-[75vh] w-full bottom-0 left-0 rounded-t-[30px] shadow-2xl pb-20' : 'h-screen w-3/4 md:w-1/2 lg:w-1/4 top-0 left-0'} bg-white z-40 flex flex-col items-center justify-center ${isMobile ? 'px-6 pt-8 pb-20 overflow-auto' : 'p-4'}`}
          >
            {/* Mobile handle bar for better UX */}
            {isMobile && (
              <div className="w-16 h-1.5 bg-gray-300 rounded-full mb-6 -mt-2"></div>
            )}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 260 }}
          className="relative"
        >
          <Image 
            src="/foto.png" 
            alt="Foto de perfil" 
            width={350} 
            height={350} 
            className="w-48 md:w-64 lg:w-80 h-auto rounded-full border-4 border-violet-700 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-2 md:space-y-3 mt-4 md:mt-6"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Angielina Soto</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Vinn<span className="text-violet-700">Bonn</span></h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
            Estudiante de <span className="text-violet-700 font-semibold">Ingeniería de Sistemas</span>
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 md:gap-6 mt-6 md:mt-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl text-gray-700 hover:text-violet-700 transition-colors duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mt-4 md:mt-6">
            Diseñado y Desarrollado por <a href="https://miguelvivar.github.io/" className="text-violet-700" target="_blank">Miguel Vivar</a>
          </p>
          <p className="text-sm text-gray-500 mt-4 md:mt-6">
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