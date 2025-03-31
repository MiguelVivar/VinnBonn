'use client'
import "./globals.css";
import Navbar from "@/ui/navbar/navbar";
import SideBar from "@/ui/sidebar.tsx/sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <html lang="es">
      <Head>
        <title>VinnBonn | Portafolio Personal</title>
        <meta name="description" content="Portafolio personal de VinnBonn, desarrolladora web y estudiante de Ingeniería de Sistemas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gradient-to-br bg-gray-50 min-h-screen">
        <AnimatePresence>
          {loading ? (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1.2, 1],
                  opacity: [0, 1, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="text-4xl font-bold text-white"
              >
                <span className="text-white">Vinn</span>
                <span className="text-purple-200">Bonn</span>
              </motion.div>
            </motion.div>
          ) : (
            <div className="relative">
              <div className="flex h-screen overflow-hidden">
                <SideBar />
                <motion.main 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex-1 flex flex-col h-full relative"
                >
                  <Navbar />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    className="flex-1 overflow-auto p-4 md:p-6 scrollbar-thin scrollbar-thumb-violet-300 scrollbar-track-transparent"
                  >
                    <div className="relative z-10">
                      {children}
                    </div>
                  </motion.div>
                </motion.main>
              </div>
            </div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
