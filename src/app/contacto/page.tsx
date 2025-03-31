'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { HiMail, HiUser, HiPencilAlt } from 'react-icons/hi'

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulación de envío de formulario
    setTimeout(() => {
      console.log(formData)
      setFormStatus('success')
      
      // Resetear el formulario después de 3 segundos
      setTimeout(() => {
        setFormData({ nombre: '', correo: '', mensaje: '' })
        setFormStatus('idle')
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    { 
      icon: <FaTiktok size={24} />, 
      url: 'https://www.tiktok.com/@vinnibombom', 
      label: 'TikTok',
      hoverBg: 'hover:bg-pink-50'
    },
    { 
      icon: <FaGithub size={24} />, 
      url: 'https://github.com/Rinvinvin', 
      label: 'GitHub',
      hoverBg: 'hover:bg-gray-50'
    },
    { 
      icon: <FaInstagram size={24} />, 
      url: 'https://www.instagram.com/vinnbon/', 
      label: 'Instagram',
      hoverBg: 'hover:bg-pink-50'
    },
    { 
      icon: <FaLinkedin size={24} />, 
      url: 'https://linkedin.com/in/vinnbon', 
      label: 'LinkedIn',
      hoverBg: 'hover:bg-blue-50'
    },
  ]

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-violet-600" />,
      title: "Email",
      value: "contacto@vinnbon.com",
      link: "mailto:contacto@vinnbon.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-violet-600" />,
      title: "Ubicación",
      value: "Ica, Perú"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const inputVariants = {
    focus: { 
      scale: 1.02,
      borderColor: "#8B5CF6"
    }
  }

  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex-1 p-3 md:p-6 bg-gray-50 min-h-screen overflow-hidden"
    >
      <section className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center mb-8 gap-4"
        >
          <motion.div 
            className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaPaperPlane className="text-2xl md:text-3xl" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-purple-500"
          >
            Contacto
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 md:gap-8">
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-purple-100"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <HiPencilAlt className="mr-2 text-violet-600" />
              Envíame un mensaje
            </h3>
            
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <FaPaperPlane className="text-green-600 text-2xl" />
                  </motion.div>
                  <h4 className="text-lg font-medium text-green-800 mb-2">¡Mensaje enviado!</h4>
                  <p className="text-green-700">Gracias por contactarme. Te responderé lo antes posible.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div variants={itemVariants}>
                    <label htmlFor="nombre" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <HiUser className="mr-1 text-violet-600" />
                      Nombre
                    </label>
                    <motion.div whileHover="focus" variants={inputVariants}>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200"
                        placeholder="Tu nombre"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="correo" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <HiMail className="mr-1 text-violet-600" />
                      Email
                    </label>
                    <motion.div whileHover="focus" variants={inputVariants}>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200"
                        placeholder="tu@email.com"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="mensaje" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <HiPencilAlt className="mr-1 text-violet-600" />
                      Mensaje
                    </label>
                    <motion.div whileHover="focus" variants={inputVariants}>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200"
                        placeholder="Escribe tu mensaje aquí..."
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3 px-6 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-lg shadow-md transition-all duration-300 flex items-center justify-center"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 space-y-6"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start p-3 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                  >
                    <div className="bg-purple-100 p-2 rounded-lg mr-3">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-violet-600 hover:text-violet-800 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Redes Sociales</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    whileHover={{ x: 5, backgroundColor: '#F9FAFB' }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:text-violet-700 transition-all duration-300 ${link.hoverBg} border border-transparent hover:border-gray-200`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full">
                      {link.icon}
                    </div>
                    <span className="font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
