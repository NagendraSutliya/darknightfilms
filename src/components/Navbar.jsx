import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, onSelectCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view, anchorId) => {
    setMobileMenuOpen(false);
    setCurrentView(view);
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-[#121212] text-[#EDEBE6] sticky top-0 z-50 border-b border-[#2A2A28]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 py-5 flex items-center justify-between gap-4">
        {/* Brand */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <img
            src="/logo.jpg"
            alt="Dark Night Films"
            className="w-9 h-9 rounded-full object-cover border border-[#C8281E]/60 transition-transform group-hover:scale-105"
          />
          <span className="font-['Big_Shoulders_Display',sans-serif] font-black text-2xl md:text-3xl tracking-tight text-[#EDEBE6] group-hover:text-[#C8281E] transition-colors">
            DARK NIGHT FILMS
          </span>
        </button>

        {/* Desktop Nav */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-1 lg:gap-2">
          <button
            onClick={() => handleNav('home', 'work')}
            className={`px-3 py-2 text-[15px] font-medium transition-colors cursor-pointer ${
              currentView === 'home' ? 'text-[#EDEBE6] hover:text-[#C8281E]' : 'text-[#C9C6BE] hover:text-[#EDEBE6]'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => handleNav('home', 'photos')}
            className="px-3 py-2 text-[15px] font-medium text-[#C9C6BE] hover:text-[#C8281E] transition-colors cursor-pointer"
          >
            Photography
          </button>
          <button
            onClick={() => handleNav('home', 'films')}
            className="px-3 py-2 text-[15px] font-medium text-[#C9C6BE] hover:text-[#C8281E] transition-colors cursor-pointer"
          >
            Films
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`px-3 py-2 text-[15px] font-medium transition-colors cursor-pointer ${
              currentView === 'about'
                ? 'text-[#EDEBE6] border-b-2 border-[#C8281E]'
                : 'text-[#C9C6BE] hover:text-[#EDEBE6]'
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNav('about', 'contact')}
            className="ml-3 px-5 py-2.5 text-[15px] font-semibold bg-[#C8281E] hover:bg-[#A61E16] text-[#FFFFFF] rounded-[2px] transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            Book a shoot
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#EDEBE6] p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121212] border-t border-[#2A2A28] px-6 py-6 flex flex-col gap-4 text-lg">
          <button
            onClick={() => handleNav('home', 'work')}
            className="text-left text-[#EDEBE6] hover:text-[#C8281E] py-2 border-b border-[#2A2A28]"
          >
            Work
          </button>
          <button
            onClick={() => handleNav('home', 'photos')}
            className="text-left text-[#EDEBE6] hover:text-[#C8281E] py-2 border-b border-[#2A2A28]"
          >
            Photography
          </button>
          <button
            onClick={() => handleNav('home', 'films')}
            className="text-left text-[#EDEBE6] hover:text-[#C8281E] py-2 border-b border-[#2A2A28]"
          >
            Films
          </button>
          <button
            onClick={() => handleNav('about')}
            className="text-left text-[#EDEBE6] hover:text-[#C8281E] py-2 border-b border-[#2A2A28]"
          >
            About &amp; Services
          </button>
          <button
            onClick={() => handleNav('about', 'contact')}
            className="mt-2 text-center py-3 bg-[#C8281E] text-white font-semibold rounded-[2px]"
          >
            Book a shoot
          </button>
        </div>
      )}
    </header>
  );
}
