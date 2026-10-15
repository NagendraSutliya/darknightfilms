import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#121212] border border-[#3A3936] rounded-sm overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="bg-[#1C1C1A] px-4 py-3 flex items-center justify-between border-b border-[#2A2A28] font-mono text-xs text-[#EDEBE6]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8281E] animate-pulse"></span>
            <span className="font-semibold text-sm">{video.title || 'Cinema Preview'}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:text-[#C8281E] transition-colors focus:outline-none"
            aria-label="Close video player"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-[16/9] md:aspect-[2.39/1] bg-black flex items-center justify-center">
          {video.videoUrl ? (
            <video
              src={video.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-8 text-[#C9C6BE]">
              <p className="font-mono text-sm mb-2">[Video stream loaded: Master ProRes 4444]</p>
              <p className="text-xl font-bold font-['Big_Shoulders_Display',sans-serif] tracking-wider text-[#EDEBE6]">
                {video.title}
              </p>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="p-4 bg-[#121212] border-t border-[#2A2A28] flex flex-wrap items-center justify-between text-xs text-[#8E8B84] font-mono">
          <span>{video.format || 'Cinema 4K / 24fps'}</span>
          <span>Shot on ARRI &amp; Sony Cinema Line</span>
        </div>
      </div>
    </div>
  );
}
