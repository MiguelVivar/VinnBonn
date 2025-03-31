'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaBars, FaTimes, FaHome, FaCode, FaProjectDiagram, FaGraduationCap, FaEnvelope } from "react-icons/fa"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  
  const enlaces = [
    {texto: "Inicio", url: "/", icon: <FaHome />},
    {texto: "Habilidades", url: "/habilidades", icon: <FaCode />},
    {texto: "Proyectos", url: "/proyectos", icon: <FaProjectDiagram />},
    {texto: "Certificados", url: "/certificados", icon: <FaGraduationCap />},
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const unsubscribe = scrollY.onChange(handleScroll)
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        boxShadow: scrolled ? "0 10px 30px -10px rgba(124, 58, 237, 0.2)" : "0 0 0 transparent",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(5px)"
      }}
      transition={{ duration: 0.5 }}
      className={`top-0 left-0 right-0 z-50 text-xl p-4 font-bold text-violet-700 m-4 md:m-8 rounded-2xl transition-all duration-300 border border-purple-100`}
    >
      <div className="flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="relative"
        >
          <Link href={"/"} className="p-2 text-black flex items-center">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white mr-2 text-sm"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              VB
            </motion.div>
            <span className="relative">
              Vinn<span className="text-violet-700">Bonn</span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </Link>
        </motion.div>

        <motion.button 
          className="lg:hidden text-violet-700 p-2 bg-violet-100 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1, backgroundColor: "#EDE9FE" }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>

        <div className="hidden lg:flex space-x-6 items-center">
          {enlaces.map((enlace, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link 
                href={enlace.url}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${pathname === enlace.url ? 'bg-violet-100 text-violet-800' : 'hover:bg-violet-50'}`}
              >
                <span className="text-lg">{enlace.icon}</span>
                <span>{enlace.texto}</span>
                {pathname === enlace.url && (
                  <motion.span 
                    className="absolute bottom-0 left-0 h-[3px] bg-violet-600 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href={"/contacto"} 
              className={`bg-gradient-to-r from-violet-600 to-purple-600 text-white px-5 py-2 rounded-full hover:shadow-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 ${pathname === "/contacto" ? 'ring-2 ring-purple-300' : ''}`}
            >
              <FaEnvelope />
              <span>Contacto</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col space-y-2 mt-4 items-center overflow-hidden bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-purple-100"
          >
            {enlaces.map((enlace, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <Link 
                  href={enlace.url}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === enlace.url ? 'bg-violet-100 text-violet-800' : 'hover:bg-violet-50'}`}
                >
                  <span className="text-lg">{enlace.icon}</span>
                  <span>{enlace.texto}</span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: enlaces.length * 0.1 }}
              className="w-full"
            >
              <Link 
                href={"/contacto"}
                onClick={() => setIsMenuOpen(false)}
                className={`w-full flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-3 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 ${pathname === "/contacto" ? 'ring-2 ring-purple-300' : ''}`}
              >
                <FaEnvelope />
                <span>Contacto</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar