export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#121212] text-[#C9C6BE] border-t border-[#2A2A28]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[15px]">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Dark Night Films"
            className="w-6 h-6 rounded-full object-cover border border-[#C8281E]/40"
          />
          <span>© {new Date().getFullYear()} Dark Night Films. All rights reserved.</span>
        </div>

        <nav aria-label="Social" className="flex flex-wrap items-center gap-4 text-sm font-mono">
          <a
            href="https://www.instagram.com/_darknightfilms/"
            target="_blank"
            rel="noreferrer"
            className="text-[#EDEBE6] hover:text-[#C8281E] transition-colors py-1"
          >
            Instagram (@_darknightfilms)
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#EDEBE6] hover:text-[#C8281E] transition-colors py-1"
          >
            YouTube
          </a>
          <a
            href="https://vimeo.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#EDEBE6] hover:text-[#C8281E] transition-colors py-1"
          >
            Vimeo
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noreferrer"
            className="text-[#EDEBE6] hover:text-[#C8281E] transition-colors py-1"
          >
            Behance
          </a>
        </nav>
      </div>
    </footer>
  );
}
