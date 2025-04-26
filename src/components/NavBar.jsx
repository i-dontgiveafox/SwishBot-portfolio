import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

        {/* SwishBot Name and Meteor Logo */}
        <a href="#home" className="text-xl font-bold text-white flex items-center">
          <i className='bx bxs-meteor text-white-500 text-2xl mr-2'></i>
          Swish<span className="text-blue-500">Bot</span>
        </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {/* Home */ }
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors"
            >
              
              Home
            </a>

            {/* About */ }
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >
              
              About
            </a>

            {/* Team */ }
            <a
              href="#team"
              className="text-gray-300 hove:text-white transition-colors"
            >
              
              Team
            </a>

            {/* Projects */ }
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors"
            >
              
              Projects
            </a>

            {/* Contact */ }
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};