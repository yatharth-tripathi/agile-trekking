"use client"
import { motion } from 'framer-motion';
import Link from "next/link";

export default function Header() {
  return (
    <motion.header 
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-2xl font-bold text-green-500">
              Trekkers
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {["Catalog", "How It Works", "Pricing", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link 
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-600 hover:text-green-500"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/supplier-registration" 
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
            >
              Register as Supplier
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}

