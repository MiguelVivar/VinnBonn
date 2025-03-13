'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    { icon: <FaTiktok size={24} />, url: 'https://www.tiktok.com/@vinnibombom', label: 'TikTok' },
    { icon: <FaGithub size={24} />, url: 'https://github.com/Rinvinvin', label: 'GitHub' },
    { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/vinnbon/', label: 'Instagram' },
    { icon: <FaLinkedin size={24} />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
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
            Contacto
          </motion.h2>
          <div className="space-y-6 h-[calc(100%-4rem)] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  {['nombre', 'correo'].map((field, index) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                        {field === 'nombre' ? 'Nombre' : 'Email'}
                      </label>
                      <input
                        type={field === 'correo' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    />
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="w-full py-2 px-4 bg-violet-700 hover:bg-violet-800 text-white rounded-lg transition-colors duration-300"
                  >
                    Enviar Mensaje
                  </motion.button>
                </form>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-800">Redes Sociales</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ x: 8, backgroundColor: '#F3F4F6' }}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg text-gray-700 hover:text-violet-700 transition-colors duration-300"
                    >
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.main>
    )
}
