"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-white/40 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          AKRONIM
        </Link>
        <div className="space-x-6">
          <Link
            href="/"
            className={`transition-colors font-medium ${
              pathname === "/" ? "text-blue-600" : "hover:text-blue-600"
            }`}
          >
            Accueil
          </Link>
          <Link
            href="/filieres"
            className={`transition-colors font-medium ${
              pathname === "/filieres" ? "text-blue-600" : "hover:text-blue-600"
            }`}
          >
            Filières
          </Link>
          <Link
            href="/about"
            className={`transition-colors font-medium ${
              pathname === "/about" ? "text-blue-600" : "hover:text-blue-600"
            }`}
          >
            À propos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
