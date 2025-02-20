"use client"
import { motion } from 'framer-motion';
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import AnimatedCard from "../components/AnimatedCard";

export default function Home() {
  const categories = [
    {
      title: "Camping Gear",
      image: "/camping-tactical.jpg", // Updated path to match the root location of the image
      description: "Tactical gear, tents, sleeping bags, and essential camping accessories",
      href: "/category/camping-gear"
    },
    {
      title: "Hiking Equipment",
      image: "/hiking-equipment.jpg", // Updated to use the provided image
      description: "Backpacks, trekking poles, and navigation tools",
      href: "/category/hiking"
    },
    {
      title: "Clothing",
      image: "/clothing.jpg", // Updated to use the provided clothing image
      description: "Jackets, pants, and weather protection gear",
      href: "/category/clothing"
    },
    {
      title: "Accessories",
      image: "/acc.jpg", // Updated to use acc.jpg instead of mountain.jpg
      description: "Headlamps, water bottles, and small equipment",
      href: "/category/accessories"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section with Parallax */}
      <motion.div 
        className="relative h-[90vh] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/mountain.jpg" // Updated to use mountain.jpg
          alt="Mountain landscape"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/50 to-gray-900" />
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-7xl font-bold mb-6 text-center leading-tight">
            Adventure Awaits
            <br />
            <span className="text-amber-500">Rent Premium Gear</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-center text-gray-300">
            Quality outdoor equipment for your next adventure. Easy rentals, amazing experiences.
          </p>
          <motion.div
            className="flex gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              href="/catalog"
              className="bg-amber-500 text-gray-900 px-8 py-4 rounded-full hover:bg-amber-400 transition-colors text-lg font-semibold"
            >
              Browse Equipment
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <section className="bg-gray-800/50 py-32">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-amber-500"
            {...fadeInUp}
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Premium Quality", desc: "Hand-picked premium equipment" },
              { icon: "🚚", title: "Easy Delivery", desc: "Doorstep delivery & pickup" },
              { icon: "💰", title: "Best Prices", desc: "Competitive rental rates" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-amber-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <main className="container mx-auto px-4 py-32">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-amber-500"
          {...fadeInUp}
        >
          Explore Our Categories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <AnimatedCard key={index} {...category} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
