import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur text-white flex justify-between px-8 py-4 z-50">
      <Link to="/" className="font-semibold">Shishira</Link>
      <div className="flex gap-6 text-sm">
        <Link to="/work" className="hover:text-accent">Photography</Link>
        <Link to="/dev" className="hover:text-accent">Software</Link>
        <Link to="/contact" className="hover:text-accent">Contact</Link>
      </div>
    </nav>
  );
}
