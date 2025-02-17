import React, { useState } from 'react'
import { FiBell, FiUser } from 'react-icons/fi'
import { motion } from 'framer-motion'
import GlobalSearchPanel from './components/GlobalSearchPanel'
import ProductCard from './components/ProductCard'
import SellerTips from './components/SellerTips'
import DashboardMetrics from './components/DashboardMetrics'
import AddNewProductButton from './components/AddNewProductButton'
import TodoList from './components/TodoList'
import RecentOrders from './components/RecentOrders'
import BottomNav from './components/BottomNav'
import { products } from './data/products'
import DailySalesGraph from './components/DailySalesGraph'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase())
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery) ||
    product.category.toLowerCase().includes(searchQuery)
  )

  return (
    <div className="min-h-screen bg-agri-gray">
      {/* Navigation Bar */}
      <motion.nav
        className="bg-white shadow-sm p-2"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-agri-green text-lg font-bold">AgriSeller Pro</h1>
          <div className="flex items-center space-x-2">
            <motion.button
              className="p-1 hover:bg-agri-gray rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiBell className="text-base text-agri-green" />
            </motion.button>
            <motion.button
              className="p-1 hover:bg-agri-gray rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiUser className="text-base text-agri-green" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Global Search Panel */}
      <GlobalSearchPanel onSearch={handleSearch} />

      {/* Main Content */}
      <main className="container mx-auto p-2 space-y-3 pb-14">
        <SellerTips />
        <DashboardMetrics />
        {/* Daily Sales Graph */}
        <DailySalesGraph />
        <AddNewProductButton />
        <TodoList />
        <RecentOrders />
        <div className="bg-white rounded-lg overflow-hidden">
          <h2 className="font-bold text-lg p-3 border-b border-gray-100">Top Selling Products</h2>
          <div className="divide-y divide-gray-100 max-h-[300px] overflow-y-auto">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
