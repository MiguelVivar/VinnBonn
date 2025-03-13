'use client'
import "./globals.css";
import Navbar from "@/ui/navbar/navbar";
import SideBar from "@/ui/sidebar.tsx/sidebar";
import { motion } from "framer-motion";

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <div className="flex h-screen overflow-hidden">
          <SideBar />
          <motion.main 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col h-full"
          >
            <Navbar />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 overflow-auto p-6"
            >
              {children}
            </motion.div>
          </motion.main>
        </div>
      </body>
    </html>
  );
}
