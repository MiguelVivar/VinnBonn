'use client'
import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const enlaces = [
    {texto: "Inicio", url: "/"},
    {texto: "Habilidades", url: "/habilidades"},
    {texto: "Proyectos", url: "/proyectos"},
    {texto: "Certificados", url: "/certificados"},
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-xl p-4 font-bold text-violet-700 shadow-md bg-white m-4 md:m-8 rounded-2xl"
    >
      <div className="flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link href={"/"} className="p-2 text-black">
            Vinn<span className="text-violet-700">Bonn</span>
          </Link>
        </motion.div>

        <button 
          className="md:hidden text-violet-700 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className="hidden md:flex space-x-8 items-center">
          {enlaces.map((enlace, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link 
                href={enlace.url}
                className="relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-violet-700 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-violet-700 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] p-2"
              >
                {enlace.texto}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href={"/contacto"} 
              className="bg-violet-700 text-white p-2 rounded-3xl hover:bg-violet-900"
            >
              Contacto
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
            className="md:hidden flex-col space-y-4 mt-4 items-center overflow-hidden"
          >
            {enlaces.map((enlace, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={enlace.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full block text-center py-2 hover:bg-violet-50 rounded-lg transition-colors"
                >
                  {enlace.texto}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: enlaces.length * 0.1 }}
            >
              <Link 
                href={"/contacto"}
                onClick={() => setIsMenuOpen(false)}
                className="bg-violet-700 text-white p-2 rounded-3xl hover:bg-violet-900 w-full text-center block"
              >
                Contacto
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar