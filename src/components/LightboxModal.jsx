import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-[#EDEBE6] hover:text-[#C8281E] p-2 transition-colors focus:outline-none"
          aria-label="Close image lightbox"
        >
          <X size={28} />
        </button>

        <div className="relative border-4 border-[#121212] bg-[#050505] p-2 shadow-2xl">
          <img
            src={image.src || image}
            alt={image.caption || 'Still frame'}
            className="max-h-[80vh] w-auto object-contain select-none"
          />
        </div>

        {image.caption && (
          <div className="mt-3 text-center font-mono text-sm text-[#C9A95A] tracking-wider">
            FRAME #{image.num || '01'} — {image.caption}
          </div>
        )}
      </div>
    </div>
  );
}
