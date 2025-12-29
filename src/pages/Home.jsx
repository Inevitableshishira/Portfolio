import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-4xl text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-white leading-tight"
        >
          Shishira B J
        </motion.h1>

        <p className="mt-6 text-xl text-gray-400">
          Visual Thinker · Software Engineer · Machine Learning Developer
        </p>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          I build intelligent software systems and capture visual stories through photography.
          This portfolio reflects both my creative eye and engineering mindset.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <Link
            to="/dev"
            className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-black transition"
          >
            Software Work
          </Link>

          <Link
            to="/work"
            className="px-8 py-3 border border-gray-600 text-white hover:bg-white hover:text-black transition"
          >
            Photography
          </Link>
        </div>

      </div>
    </section>
  )
}
