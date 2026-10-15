import { useState, useEffect, useRef } from 'react';
import { Play, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { PROJECTS, CONTACT_SHEET_STRIPS, FILMS_PLAYLIST } from '../data/portfolioData';

export default function HomePage({ onOpenProject, onPlayVideo, onOpenLightbox, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [featuredFilm, setFeaturedFilm] = useState(FILMS_PLAYLIST[0]);
  const [timecode, setTimecode] = useState('00:00:14:08');
  const [isHeroMuted, setIsHeroMuted] = useState(true);
  const heroVideoRef = useRef(null);

  // Toggle hero audio
  const toggleHeroAudio = (e) => {
    e.stopPropagation();
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !heroVideoRef.current.muted;
      setIsHeroMuted(heroVideoRef.current.muted);
    }
  };

  // Realistic cinema timecode ticker
  useEffect(() => {
    let frame = 8;
    let sec = 14;
    const interval = setInterval(() => {
      frame++;
      if (frame >= 24) {
        frame = 0;
        sec++;
      }
      const pad = (n) => String(n).padStart(2, '0');
      setTimecode(`00:00:${pad(sec)}:${pad(frame)}`);
    }, 1000 / 24);
    return () => clearInterval(interval);
  }, []);

  const categories = ['All', 'Films', 'Commercials', 'Music videos', 'Photography'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#D9D7D1] text-[#161616]">
      {/* 1. Showreel Hero Section */}
      <section aria-label="Showreel" className="bg-[#121212] text-[#EDEBE6] pt-4 pb-20 md:pb-24 border-b border-[#2A2A28]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 flex flex-col gap-10 md:gap-14">
          
          {/* 2.39:1 CinemaScope Video Box */}
          <div className="relative aspect-[16/9] md:aspect-[2.39/1] bg-[#2A2A28] overflow-hidden group shadow-2xl border border-[#3A3936]">
            {/* Showreel video autoplay, muted, loop */}
            <video
              ref={heroVideoRef}
              src="/showreel.mp4"
              autoPlay
              muted={isHeroMuted}
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-black/25 to-[#121212]/70 pointer-events-none"></div>

            {/* Timecode & Showreel indicator */}
            <div className="absolute top-5 left-6 right-6 flex justify-between items-center font-mono text-xs md:text-sm text-[#EDEBE6] tracking-wider z-10">
              <span className="inline-flex items-center gap-2.5 bg-black/60 px-3 py-1.5 rounded-sm border border-white/10 backdrop-blur-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C8281E] animate-pulse"></span>
                <span>SHOWREEL // HARENDRA BENIWAL</span>
              </span>
              <span className="bg-black/60 px-3 py-1.5 rounded-sm border border-white/10 font-mono text-[#C9A95A] backdrop-blur-sm">
                TC: {timecode}
              </span>
            </div>

            {/* Big Center Play Button (opens full cinema modal) */}
            <button
              type="button"
              onClick={() => onPlayVideo({ title: 'Dark Night Films — Official Showreel', videoUrl: '/showreel.mp4' })}
              aria-label="Play showreel in cinema player"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#EDEBE6] bg-black/40 backdrop-blur-md text-[#EDEBE6] hover:bg-[#C8281E] hover:border-[#C8281E] hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer group-hover:shadow-[0_0_30px_rgba(200,40,30,0.6)] z-10"
            >
              <Play size={32} className="ml-1 fill-current" />
            </button>

            {/* Bottom Controls: Letterbox tag + Quick Audio Toggle */}
            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center z-10 pointer-events-auto">
              <div className="font-mono text-xs text-[#8E8B84] bg-black/60 px-2.5 py-1 rounded-[1px] backdrop-blur-xs flex items-center gap-2">
                <span>SCOPE 2.39 : 1</span>
                <span>•</span>
                <span>MASTER 4K</span>
              </div>

              {/* Quick Sound Toggle on Hero */}
              <button
                type="button"
                onClick={toggleHeroAudio}
                className="font-mono text-xs text-[#EDEBE6] bg-black/70 hover:bg-[#C8281E] px-3 py-1.5 rounded-[1px] border border-white/10 backdrop-blur-sm flex items-center gap-2 cursor-pointer transition-colors"
                aria-label={isHeroMuted ? 'Unmute video audio' : 'Mute video audio'}
              >
                {isHeroMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                <span>{isHeroMuted ? 'UNMUTE SOUND' : 'MUTED'}</span>
              </button>
            </div>
          </div>

          {/* Hero Headline & Bio */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4">
            <h1 className="font-['Big_Shoulders_Display',sans-serif] font-black text-6xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[156px] leading-[0.86] tracking-tight uppercase m-0 text-[#EDEBE6]">
              I SHOOT,<br />DIRECT &amp; CUT.
            </h1>
            <div className="lg:max-w-md flex flex-col gap-6">
              <p className="m-0 text-lg md:text-xl text-[#C9C6BE] leading-relaxed font-normal">
                Director and cinematographer <strong className="text-white font-semibold">Harendra Beniwal</strong> at <strong className="text-white font-semibold">Dark Night Films</strong> (<a href="https://www.instagram.com/_darknightfilms/" target="_blank" rel="noreferrer" className="text-[#C8281E] hover:underline font-semibold">@_darknightfilms</a>). Crafting cinematic motorcycle road trips, moody travel films, and commercial productions from first frame to the final grade.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="px-6 py-3.5 bg-[#EDEBE6] text-[#121212] font-semibold text-[15px] hover:bg-white rounded-[2px] transition-all"
                >
                  See the work
                </a>
                <button
                  onClick={() => onNavigate('about', 'contact')}
                  className="px-6 py-3.5 border border-[#5A5853] text-[#EDEBE6] font-semibold text-[15px] hover:border-white rounded-[2px] transition-all cursor-pointer"
                >
                  Start a project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What I Do (4 Columns) */}
      <section aria-label="What I do" className="max-w-[1320px] mx-auto px-6 md:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-2 border-[#161616]">
          <div className="py-7 pr-6 flex flex-col gap-3 border-b sm:border-b-0 border-[#B9B6AF]/50">
            <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-extrabold text-3xl md:text-4xl uppercase tracking-wide">
              Photography
            </h2>
            <p className="m-0 text-[#4A4843] leading-relaxed text-[15px]">
              Portraits, editorial, fashion and commercial, meticulously lit and shot with intent on medium format and 35mm.
            </p>
          </div>
          <div className="py-7 pr-6 flex flex-col gap-3 border-b sm:border-b-0 border-[#B9B6AF]/50">
            <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-extrabold text-3xl md:text-4xl uppercase tracking-wide">
              Videography
            </h2>
            <p className="m-0 text-[#4A4843] leading-relaxed text-[15px]">
              High-impact commercials, music videos, wedding films and documentaries, captured with anamorphic glass.
            </p>
          </div>
          <div className="py-7 pr-6 flex flex-col gap-3 border-b sm:border-b-0 border-[#B9B6AF]/50">
            <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-extrabold text-3xl md:text-4xl uppercase tracking-wide">
              Direction
            </h2>
            <p className="m-0 text-[#4A4843] leading-relaxed text-[15px]">
              Concept development, treatment writing, casting, blocking and commanding the creative call on set.
            </p>
          </div>
          <div className="py-7 pr-6 flex flex-col gap-3">
            <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-extrabold text-3xl md:text-4xl uppercase tracking-wide">
              Editing
            </h2>
            <p className="m-0 text-[#4A4843] leading-relaxed text-[15px]">
              Narrative story pacing, immersive sound design, and master color grading in DaVinci Resolve Studio.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Selected Work Section */}
      <section id="work" className="max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20 flex flex-col gap-10">
        <div className="flex flex-wrap gap-6 items-end justify-between border-b-2 border-[#161616] pb-6">
          <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-5xl sm:text-6xl md:text-8xl leading-[0.9] uppercase tracking-tight">
            Selected work
          </h2>
          {/* Category Filter Pills */}
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = cat === selectedCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={active}
                  className={`min-h-[44px] px-5 rounded-full font-medium text-[15px] cursor-pointer transition-all ${
                    active
                      ? 'bg-[#161616] text-[#EDEBE6] border border-[#161616]'
                      : 'bg-transparent text-[#161616] border border-[#8E8B84] hover:border-[#161616]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProject(project)}
              className="group flex flex-col gap-3 cursor-pointer text-left"
            >
              {/* Aspect Ratio Image Container */}
              <div className="relative aspect-[16/10] bg-[#2A2A28] overflow-hidden rounded-[2px] border border-[#B9B6AF]/40 group-hover:border-[#C8281E] transition-all">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>

                {/* Aspect ratio & tag labels */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center font-mono text-xs text-[#EDEBE6] pointer-events-none">
                  <span className="bg-black/70 px-2 py-1 rounded-[1px] backdrop-blur-xs">
                    {project.aspectRatio}
                  </span>
                  <span className="bg-black/70 px-2 py-1 rounded-[1px] backdrop-blur-xs">
                    [{project.tag}]
                  </span>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="flex justify-between items-baseline gap-4 pt-1">
                <h3 className="m-0 text-2xl font-bold font-['Big_Shoulders_Display',sans-serif] tracking-wide uppercase group-hover:text-[#C8281E] transition-colors flex items-center gap-1.5">
                  {project.title}
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <span className="font-mono text-xs text-[#55524C]">{project.year}</span>
              </div>
              <p className="m-0 text-sm text-[#4A4843]">
                {project.genre} • {project.roles}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contact Sheet (Film Negatives Section) */}
      <section id="photos" className="bg-[#121212] text-[#EDEBE6] py-24 md:py-28 border-t border-[#2A2A28]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 flex flex-col gap-10">
          <div className="flex flex-wrap gap-4 items-end justify-between border-b border-[#2A2A28] pb-6">
            <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-5xl sm:text-6xl md:text-8xl leading-[0.9] uppercase tracking-tight">
              Contact sheet
            </h2>
            <p className="m-0 max-w-md text-[#C9C6BE] text-base leading-relaxed">
              Recent shoots, straight from the roll. Red circled frames are the selected picks from the master contact prints.
            </p>
          </div>

          {/* Film Strips Scroll Container */}
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[960px] flex flex-col gap-8">
              {CONTACT_SHEET_STRIPS.map((strip, sIdx) => (
                <div key={sIdx} className="bg-[#050505] p-4 flex flex-col gap-3 border border-[#2A2A28] rounded-[2px]">
                  {/* Top Film Sprocket Strip */}
                  <div className="sprocket-strip opacity-80" aria-hidden="true"></div>

                  {/* 6 Film Frames in the Roll */}
                  <div className="grid grid-cols-6 gap-3">
                    {strip.frames.map((frame) => (
                      <div
                        key={frame.id}
                        onClick={() => onOpenLightbox({ src: frame.img, num: frame.num, caption: frame.caption })}
                        className={`relative aspect-[3/2] bg-[#2A2A28] overflow-hidden cursor-pointer group ${
                          frame.isPick ? 'film-pick-frame' : 'opacity-85 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={frame.img}
                          alt={frame.caption}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {/* Frame pick indicator mark */}
                        {frame.isPick && (
                          <span className="absolute top-1 right-1 bg-[#C8281E] text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-[1px]">
                            PICK
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Film Bottom Metadata Bar */}
                  <div className="flex justify-between items-center font-mono text-xs text-[#C9A95A] px-1 pt-1">
                    <span className="font-semibold text-white/80">[{strip.title}]</span>
                    {strip.frames.map((frame) => (
                      <span key={frame.id} className="text-[#C9A95A]">
                        {frame.num}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Film Sprocket Strip */}
                  <div className="sprocket-strip opacity-80" aria-hidden="true"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Shoots Categories Breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#2A2A28]">
            {[
              { name: 'Maternity & Portraits', shoots: '20 shoots' },
              { name: 'Weddings', shoots: '12 shoots' },
              { name: 'Fashion', shoots: '24 shoots' },
              { name: 'Products', shoots: '15 shoots' }
            ].map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCategory('Photography');
                  const el = document.getElementById('work');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="py-5 border-t border-[#3A3936] text-[#EDEBE6] hover:text-[#C8281E] text-left flex justify-between items-center group cursor-pointer transition-colors"
              >
                <span className="text-xl font-bold font-['Big_Shoulders_Display',sans-serif] tracking-wider uppercase">
                  {cat.name}
                </span>
                <span className="text-xs font-mono text-[#8E8B84] group-hover:text-[#EDEBE6]">
                  [{cat.shoots}]
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Films Section */}
      <section id="films" className="max-w-[1320px] mx-auto px-6 md:px-8 py-24 md:py-28 flex flex-col gap-10">
        <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-5xl sm:text-6xl md:text-8xl leading-[0.9] uppercase tracking-tight">
          Films
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Featured Cinema Player */}
          <div className="w-full lg:flex-[2] flex flex-col gap-4">
            <div className="relative aspect-[16/9] bg-[#2A2A28] overflow-hidden rounded-[2px] border border-[#161616] group shadow-lg">
              <img
                src={featuredFilm.image}
                alt={featuredFilm.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

              {/* Big Play Button */}
              <button
                type="button"
                onClick={() => onPlayVideo(featuredFilm)}
                aria-label="Play film"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-[#EDEBE6] bg-black/50 backdrop-blur-md text-[#EDEBE6] hover:bg-[#C8281E] hover:border-[#C8281E] hover:scale-110 transition-all flex items-center justify-center cursor-pointer shadow-lg"
              >
                <Play size={28} className="ml-1 fill-current" />
              </button>

              <span className="absolute right-4 bottom-3 font-mono text-xs text-[#EDEBE6] bg-black/70 px-2 py-1 rounded-[1px]">
                {featuredFilm.runtime}
              </span>
            </div>

            <div>
              <h3 className="m-0 text-3xl font-extrabold font-['Big_Shoulders_Display',sans-serif] uppercase tracking-wide text-[#161616]">
                {featuredFilm.title}
              </h3>
              <p className="m-0 mt-1 text-[#4A4843] text-base leading-relaxed">
                {featuredFilm.type} — {featuredFilm.desc}
              </p>
            </div>
          </div>

          {/* Side Playlist */}
          <div className="w-full lg:flex-[1] flex flex-col border-t border-[#B9B6AF]">
            {FILMS_PLAYLIST.map((film) => {
              const isSelected = film.id === featuredFilm.id;
              return (
                <div
                  key={film.id}
                  onClick={() => setFeaturedFilm(film)}
                  className={`grid grid-cols-[120px_1fr] gap-4 py-4 border-b border-[#B9B6AF] cursor-pointer transition-colors ${
                    isSelected ? 'bg-black/5 px-2 -mx-2 rounded-sm' : 'hover:bg-black/5'
                  }`}
                >
                  <div className="relative aspect-[16/9] bg-[#3A3936] overflow-hidden rounded-[2px]">
                    <img src={film.image} alt={film.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play size={14} className="text-white fill-current opacity-80" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <span className="font-bold text-[15px] font-['Big_Shoulders_Display',sans-serif] tracking-wider uppercase line-clamp-1">
                      {film.title}
                    </span>
                    <span className="font-mono text-xs text-[#55524C]">
                      {film.type}, {film.runtime}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. How I Work (4-Step Process) */}
      <section aria-label="How I work" className="border-y-2 border-[#161616] py-16 md:py-20 bg-[#EDEBE6]/40">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2.5">
            <span className="font-['Big_Shoulders_Display',sans-serif] font-black text-6xl text-[#C8281E]">1</span>
            <h3 className="m-0 text-2xl font-bold font-['Big_Shoulders_Display',sans-serif] uppercase">
              Pre-production
            </h3>
            <p className="m-0 text-[#4A4843] leading-relaxed text-[15px]">
              Creative brief, visual treatment, moodboard, storyboard, location scouting and detailed shot list.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="font-['Big_Shoulders_Display',sans-serif] font-black text-6xl text-[#C8281E]">2</span>
            <h3 className="m-0 text-2xl font-bold font-['Big_Shoulders_Display',sans-serif] uppercase">
              The Shoot
            </h3>
            <p className="m-0 text-[#4A4843] leading-relaxed text-[15px]">
              Directing talent, orchestrating camera movements, and precision cinematic lighting on set.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="font-['Big_Shoulders_Display',sans-serif] font-black text-6xl text-[#C8281E]">3</span>
            <h3 className="m-0 text-2xl font-bold font-['Big_Shoulders_Display',sans-serif] uppercase">
              The Edit
            </h3>
            <p className="m-0 text-[#4A4843] leading-relaxed text-[15px]">
              Offline narrative assembly, pacing adjustments, dialog cleanup, Foley, and emotional score selection.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="font-['Big_Shoulders_Display',sans-serif] font-black text-6xl text-[#C8281E]">4</span>
            <h3 className="m-0 text-2xl font-bold font-['Big_Shoulders_Display',sans-serif] uppercase">
              Grade &amp; Deliver
            </h3>
            <p className="m-0 text-[#4A4843] leading-relaxed text-[15px]">
              DaVinci Resolve film stock emulation, grain balance, and export delivery across cinema DCP and social platforms.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Behind the Camera & Testimonial */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-8 py-24 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* On-set Portrait */}
        <div className="aspect-[4/5] max-h-[600px] bg-[#3A3936] overflow-hidden rounded-[2px] border border-[#161616] relative shadow-lg">
          <img
            src="/p3.jpg"
            alt="Dark Night Films on set"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 font-mono text-xs text-[#EDEBE6] bg-black/70 px-3 py-1.5 backdrop-blur-xs">
            [On Set • Unit 1 ARRI Alexa Rig]
          </div>
        </div>

        {/* Text & Testimonial */}
        <div className="flex flex-col gap-6">
          <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-5xl sm:text-6xl md:text-8xl leading-[0.92] uppercase tracking-tight">
            Behind the camera
          </h2>
          <p className="m-0 text-lg md:text-xl leading-relaxed text-[#2E2D2A]">
            Led by cinematographer and filmmaker <strong>Harendra Beniwal (Hari)</strong>, Dark Night Films is devoted to atmospheric road trips, motorcycle journeys, and cinematic storytelling. From Himalayan switchbacks at blue hour to studio commercial sets, every frame is crafted with intention.
          </p>

          <blockquote className="m-0 py-6 border-y border-[#B9B6AF] flex flex-col gap-3">
            <p className="m-0 text-xl md:text-2xl italic leading-snug text-[#161616] font-medium">
              “Dark Night Films brought an unparalleled cinematic vision to our brand film. The atmosphere, camera movement, and final grade felt like a Hollywood feature.”
            </p>
            <footer className="text-sm font-semibold text-[#55524C]">
              — Elena Rostova, Creative Director, Maison Nocturne Paris
            </footer>
          </blockquote>

          <button
            onClick={() => onNavigate('about')}
            className="self-start px-6 py-3.5 bg-[#161616] text-[#EDEBE6] font-semibold text-[15px] hover:bg-[#C8281E] rounded-[2px] transition-colors cursor-pointer"
          >
            More about me &amp; kit
          </button>
        </div>
      </section>

      {/* 8. Trusted By (Monochrome Client Logos Grid) */}
      <section aria-label="Clients" className="max-w-[1320px] mx-auto px-6 md:px-8 pb-24 flex flex-col gap-6">
        <h2 className="m-0 text-sm font-mono uppercase tracking-wider text-[#55524C]">
          Trusted by &amp; Featured on
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[1px] bg-[#B9B6AF] border border-[#B9B6AF]">
          {['SONY CINE', 'ARRI', 'RED DIGITAL', 'DAVINCI RESOLVE', 'VOGUE', 'APUTURE'].map((brand, i) => (
            <div
              key={i}
              className="bg-[#D9D7D1] h-24 flex items-center justify-center font-['Big_Shoulders_Display',sans-serif] font-black text-2xl tracking-wider text-[#55524C] hover:text-[#161616] hover:bg-[#EDEBE6] transition-colors select-none"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* 9. Big Red CTA Banner */}
      <section className="bg-[#C8281E] text-white">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 py-24 md:py-28 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="m-0 font-['Big_Shoulders_Display',sans-serif] font-black text-6xl sm:text-7xl md:text-9xl lg:text-[130px] leading-[0.86] uppercase tracking-tight">
            Got a story?<br />Let's roll.
          </h2>
          <div className="flex flex-col gap-4 text-lg">
            <button
              onClick={() => onNavigate('about', 'contact')}
              className="px-8 py-4 bg-[#121212] hover:bg-black text-white font-semibold rounded-[2px] transition-all cursor-pointer text-center text-lg"
            >
              Book a shoot
            </button>
            <a
              href="mailto:hello@darknightfilms.com"
              className="text-white hover:underline font-mono text-base pt-2"
            >
              hello@darknightfilms.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
