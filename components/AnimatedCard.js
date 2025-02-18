"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AnimatedCard({ title, image, description, href }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <motion.div 
        className="p-6"
        whileHover={{ backgroundColor: '#f8f8f8' }}
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={href}
          className="inline-flex items-center text-green-500 hover:text-green-600 group"
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
