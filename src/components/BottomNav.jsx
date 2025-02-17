import React from 'react'
import { FiHome, FiPackage, FiBox, FiHeadphones } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function BottomNav() {
  return (
    <motion.div
      className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-1">
          <motion.button
            className="flex flex-col items-center space-y-0.5 text-agri-green"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiHome className="text-base" />
            <span className="text-xxs">Home</span>
          </motion.button>
          
          <motion.button
            className="flex flex-col items-center space-y-0.5 text-gray-500 hover:text-agri-green"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiPackage className="text-base" />
            <span className="text-xxs">My Orders</span>
          </motion.button>
          
          <motion.button
            className="flex flex-col items-center space-y-0.5 text-gray-500 hover:text-agri-green"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiBox className="text-base" />
            <span className="text-xxs">My Products</span>
          </motion.button>
          
          <motion.button
            className="flex flex-col items-center space-y-0.5 text-gray-500 hover:text-agri-green"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiHeadphones className="text-base" />
            <span className="text-xxs">Support</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
