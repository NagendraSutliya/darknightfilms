import { useState } from 'react';
import { ArrowLeft, Play, ArrowRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectPage({ project, onBack, onSelectProject, onPlayVideo, onOpenLightbox }) {
  const [isGraded, setIsGraded] = useState(true);

  if (!project) return null;

  // Find index of current project and get next project
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="bg-[#D9D7D1] text-[#161616]">
      {/* 1. Project Hero (Dark Cinema Section) */}
      <section className="bg-[#121212] text-[#EDEBE6] pt-4 pb-16 md:pb-20 border-b border-[#2A2A28]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 flex flex-col gap-8 md:gap-10">
          
          {/* Hero 2.39:1 CinemaScope Frame */}
          <div className="relative aspect-[16/9] md:aspect-[2.39/1] bg-[#2A2A28] overflow-hidden rounded-[2px] border border-[#3A3936] shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

            {/* Timecode & format badges */}
            <span className="absolute left-5 top-5 font-mono text-xs text-[#EDEBE6] bg-black/60 px-3 py-1 rounded-[1px] backdrop-blur-xs">
              HERO FRAME // {project.aspectRatio}
            </span>
            <span className="absolute left-5 bottom-4 font-mono text-xs text-[#C9A95A] bg-black/60 px-3 py-1 rounded-[1px] backdrop-blur-xs">
              TC 00:01:42:08
            </span>

            {/* Watch Film CTA overlay if video available */}
            {project.videoUrl && (
              <button
                type="button"
                onClick={() => onPlayVideo(project)}
                className="absolute right-5 bottom-4 px-4 py-2 bg-[#C8281E] hover:bg-[#a61e16] text-white font-mono text-xs font-semibold rounded-[2px] flex items-center gap-2 cursor-pointer transition-colors shadow-md"
              >
                <Play size={14} className="fill-current" /> Watch Film
              </button>
            )}
          </div>

          {/* Back button */}
          <button
            onClick={onBack}
            className="self-start inline-flex items-center gap-2 text-[#C9C6BE] hover:text-[#C8281E] transition-colors font-medium text-sm cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to all work
          </button>

          {/* Headline & Logline */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <h1 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-[0.86] uppercase tracking-tight text-[#EDEBE6]">
              {project.title}
            </h1>
            <p className="m-0 lg:max-w-md text-lg text-[#C9C6BE] leading-relaxed font-normal">
              {project.logline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Metadata Grid */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-8 py-14">
        <dl className="m-0 grid grid-cols-2 md:grid-cols-5 border-t-2 border-[#161616] gap-y-4">
          <div className="py-5 pr-4 flex flex-col gap-1 border-b md:border-b-0 border-[#B9B6AF]">
            <dt className="text-xs font-mono uppercase text-[#55524C]">Client</dt>
            <dd className="m-0 font-bold text-base text-[#161616]">{project.client}</dd>
          </div>
          <div className="py-5 pr-4 flex flex-col gap-1 border-b md:border-b-0 border-[#B9B6AF]">
            <dt className="text-xs font-mono uppercase text-[#55524C]">My role</dt>
            <dd className="m-0 font-bold text-base text-[#161616]">{project.roles}</dd>
          </div>
          <div className="py-5 pr-4 flex flex-col gap-1 border-b md:border-b-0 border-[#B9B6AF]">
            <dt className="text-xs font-mono uppercase text-[#55524C]">Format</dt>
            <dd className="m-0 font-bold text-base text-[#161616]">{project.format}</dd>
          </div>
          <div className="py-5 pr-4 flex flex-col gap-1">
            <dt className="text-xs font-mono uppercase text-[#55524C]">Shot on</dt>
            <dd className="m-0 font-bold text-base text-[#161616]">{project.shotOn}</dd>
          </div>
          <div className="py-5 pr-4 flex flex-col gap-1">
            <dt className="text-xs font-mono uppercase text-[#55524C]">Year</dt>
            <dd className="m-0 font-bold text-base text-[#161616]">{project.year}</dd>
          </div>
        </dl>
      </section>

      {/* 3. Watch The Film Section */}
      {project.videoUrl && (
        <section aria-label="Watch the film" className="max-w-[1320px] mx-auto px-6 md:px-8 pb-20">
          <div className="relative aspect-[16/9] bg-[#121212] overflow-hidden rounded-[2px] border border-[#161616] flex items-center justify-center group shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <button
              type="button"
              onClick={() => onPlayVideo(project)}
              aria-label="Play film"
              className="w-24 h-24 rounded-full border-2 border-[#EDEBE6] bg-black/60 backdrop-blur-md text-[#EDEBE6] hover:bg-[#C8281E] hover:border-[#C8281E] hover:scale-110 transition-all flex items-center justify-center cursor-pointer z-10 shadow-2xl"
            >
              <Play size={36} className="ml-1 fill-current" />
            </button>

            <span className="absolute left-5 bottom-4 font-mono text-xs text-[#C9C6BE]">
              [4K Cinema Master Stream]
            </span>
            <span className="absolute right-5 bottom-4 font-mono text-xs text-[#C9C6BE]">
              Audio: 5.1 Surround / Stereo
            </span>
          </div>
        </section>
      )}

      {/* 4. The Brief & The Approach (2-Column Editorial) */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-8 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div className="flex flex-col gap-3">
          <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-4xl uppercase tracking-wide">
            The Brief
          </h2>
          <p className="m-0 text-lg leading-relaxed text-[#2E2D2A]">
            {project.brief}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-4xl uppercase tracking-wide">
            The Approach
          </h2>
          <p className="m-0 text-lg leading-relaxed text-[#2E2D2A]">
            {project.approach}
          </p>
        </div>
      </section>

      {/* 5. Frames Gallery */}
      <section aria-label="Stills" className="max-w-[1320px] mx-auto px-6 md:px-8 pb-24 flex flex-col gap-6">
        <div className="flex justify-between items-baseline border-b border-[#161616] pb-3">
          <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight">
            Frames
          </h2>
          <span className="text-xs font-mono text-[#55524C]">
            Click any frame to inspect in 4K
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.frames.map((frameImg, fIdx) => (
            <div
              key={fIdx}
              onClick={() => onOpenLightbox({ src: frameImg, num: `FRAME ${fIdx + 1}`, caption: `${project.title} — Frame ${fIdx + 1}` })}
              className="relative aspect-[16/9] bg-[#2A2A28] overflow-hidden rounded-[2px] cursor-pointer group border border-black/10 hover:border-[#C8281E] transition-colors"
            >
              <img
                src={frameImg}
                alt={`${project.title} still ${fIdx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Eye size={20} className="text-white drop-shadow" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. In The Edit: Raw Log vs Final Color Grade (Interactive Switcher) */}
      <section aria-label="Colour grade" className="bg-[#121212] text-[#EDEBE6] py-20 md:py-24 border-y border-[#2A2A28]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Explanation & Buttons */}
          <div className="flex flex-col gap-6">
            <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.9] tracking-tight">
              In the edit
            </h2>
            <p className="m-0 text-lg leading-relaxed text-[#C9C6BE]">
              Flip between the flat uncorrected cinema Log footage and the final master grade to see what our DaVinci Resolve color suite adds to the story.
            </p>

            {/* Switcher Buttons */}
            <div role="group" aria-label="Compare grade" className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsGraded(false)}
                aria-pressed={!isGraded}
                className={`min-h-[46px] px-6 rounded-full font-mono text-sm font-semibold transition-all cursor-pointer ${
                  !isGraded
                    ? 'bg-[#EDEBE6] text-[#121212] border border-[#EDEBE6]'
                    : 'bg-transparent text-[#EDEBE6] border border-[#5A5853] hover:border-white'
                }`}
              >
                Raw log profile
              </button>
              <button
                type="button"
                onClick={() => setIsGraded(true)}
                aria-pressed={isGraded}
                className={`min-h-[46px] px-6 rounded-full font-mono text-sm font-semibold transition-all cursor-pointer ${
                  isGraded
                    ? 'bg-[#C8281E] text-white border border-[#C8281E]'
                    : 'bg-transparent text-[#EDEBE6] border border-[#5A5853] hover:border-white'
                }`}
              >
                Final color grade
              </button>
            </div>

            <p className="font-mono text-xs text-[#8E8B84] m-0">
              {isGraded
                ? 'Active: Custom Kodak 2383 Film Print Emulation LUT with calibrated skin tones and rich teal-orange balance.'
                : 'Active: Flat 10-bit S-Log3/Arri Log curve — preserving 15+ stops of dynamic range before contrast grading.'}
            </p>
          </div>

          {/* Comparative Frame Display */}
          <div className="relative aspect-[16/9] bg-[#050505] overflow-hidden rounded-[2px] border border-[#3A3936] shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isGraded
                  ? 'contrast-125 saturate-110 brightness-100'
                  : 'contrast-70 saturate-50 brightness-110 sepia-[0.1]'
              }`}
            />
            {/* Overlay Tag */}
            <span
              className={`absolute left-4 top-4 font-mono text-xs px-2.5 py-1 rounded-[1px] font-semibold transition-colors ${
                isGraded ? 'bg-[#C8281E] text-white' : 'bg-black/80 text-[#EDEBE6]'
              }`}
            >
              {isGraded ? 'Final grade' : 'Log, ungraded'}
            </span>

            <span className="absolute right-4 bottom-4 font-mono text-xs text-white/80 bg-black/60 px-2 py-1 rounded-[1px]">
              {isGraded ? 'LUT: Film Print Emulation' : 'Color Space: Arri Wide Gamut 4'}
            </span>
          </div>
        </div>
      </section>

      {/* 7. Behind the Scenes & Credits */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-8 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* BTS Stills */}
        <div className="flex flex-col gap-4">
          <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-4xl uppercase">
            Behind the scenes
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {project.bts.map((btsImg, bIdx) => (
              <div
                key={bIdx}
                onClick={() => onOpenLightbox({ src: btsImg, num: `BTS ${bIdx + 1}`, caption: `${project.title} — BTS ${bIdx + 1}` })}
                className="aspect-square bg-[#3A3936] overflow-hidden rounded-[2px] cursor-pointer group border border-black/10"
              >
                <img
                  src={btsImg}
                  alt={`BTS ${bIdx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Full Crew Credits List */}
        <div className="flex flex-col gap-4">
          <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-4xl uppercase">
            Credits
          </h2>
          <dl className="m-0 grid grid-cols-2 gap-y-0 text-sm">
            {project.credits.map((cr, cIdx) => (
              <div key={cIdx} className="contents">
                <dt className="py-3 border-t border-[#B9B6AF] font-mono text-xs uppercase text-[#55524C]">
                  {cr.role}
                </dt>
                <dd className="m-0 py-3 border-t border-[#B9B6AF] font-bold text-sm text-[#161616]">
                  {cr.name}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 8. Next Project Giant Link */}
      <section className="border-t-2 border-[#161616] bg-[#EDEBE6]/50 hover:bg-[#EDEBE6] transition-colors">
        <div
          onClick={() => {
            onSelectProject(nextProject);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20 flex flex-col gap-2 cursor-pointer group"
        >
          <span className="font-mono text-xs uppercase text-[#55524C] tracking-wider flex items-center gap-2">
            Next project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="font-['Big_Shoulders_Display',sans-serif] font-black text-5xl sm:text-7xl md:text-9xl leading-[0.9] uppercase tracking-tight text-[#161616] group-hover:text-[#C8281E] transition-colors">
            {nextProject.title}
          </span>
        </div>
      </section>
    </div>
  );
}
