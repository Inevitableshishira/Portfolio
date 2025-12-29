import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-white text-center">
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl font-bold">
        Shishira B J
      </motion.h1>
      <p className="mt-4 text-gray-400">Visual Storyteller & Software Engineer</p>
      <div className="mt-8 flex gap-6">
        <Link to="/work" className="border px-6 py-3 hover:bg-accent hover:text-black">Photography</Link>
        <Link to="/dev" className="border px-6 py-3 hover:bg-accent hover:text-black">Software</Link>
      </div>
    </section>
  );
}
