import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur text-white px-10 py-6 flex justify-between">
      <Link to="/" className="font-light tracking-wide">Shishira</Link>
      <div className="flex gap-8 text-sm tracking-wide">
        <Link to="/work">Photography</Link>
        <Link to="/dev">Software</Link>
      </div>
    </nav>
  );
}
