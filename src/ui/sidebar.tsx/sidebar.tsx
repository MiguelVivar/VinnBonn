'use client'
import Image from "next/image"
import { FaGithub, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa'
import { motion } from "framer-motion"

const SideBar = () => {
  const socialLinks = [
    { icon: <FaTiktok/>, url: 'https://www.tiktok.com/@vinnibombom'},
    { icon: <FaGithub/>, url: 'https://github.com/Rinvinvin'},
    { icon: <FaInstagram/>, url: 'https://www.instagram.com/vinnbon/'},
    { icon: <FaLinkedin/>, url: 'https://linkedin.com/in/yourusername'},
  ]

  return (
    <motion.div 
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="h-screen w-full md:w-1/3 lg:w-1/4 top-0 left-0 bg-white shadow-xl lg:flex flex-col items-center justify-center relative p-4 hidden"
    >
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
  )
}

export default SideBar