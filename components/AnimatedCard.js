"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AnimatedCard({ title, image, description, href }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
      </div>
      <motion.div 
        className="p-6"
        whileHover={{ backgroundColor: 'rgba(31, 41, 55, 0.5)' }}
      >
        <h3 className="text-xl font-semibold mb-2 text-amber-500">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <Link 
          href={href}
          className="inline-flex items-center text-amber-400 hover:text-amber-300 group"
        >
          Explore More
          <motion.span
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
