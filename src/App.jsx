import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import LightboxModal from './components/LightboxModal';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'about' | 'project'
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeLightbox, setActiveLightbox] = useState(null);

  // Sync with browser hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'about' || hash === 'contact') {
        setCurrentView('about');
        if (hash === 'contact') {
          setTimeout(() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else if (hash.startsWith('project-')) {
        const pId = hash.replace('project-', '');
        const found = PROJECTS.find((p) => p.id === pId);
        if (found) {
          setSelectedProject(found);
          setCurrentView('project');
        }
      } else if (hash === 'work' || hash === 'photos' || hash === 'films') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setCurrentView('project');
    window.location.hash = `project-${project.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToWork = () => {
    setCurrentView('home');
    window.location.hash = 'work';
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleNavigate = (view, anchorId) => {
    setCurrentView(view);
    if (anchorId) {
      window.location.hash = anchorId;
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.location.hash = view === 'home' ? '' : view;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#D9D7D1] text-[#161616] font-['Instrument_Sans',sans-serif] selection:bg-[#C8281E] selection:text-white flex flex-col justify-between">
      {/* Global Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            onOpenProject={handleOpenProject}
            onPlayVideo={(v) => setActiveVideo(v)}
            onOpenLightbox={(img) => setActiveLightbox(img)}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'about' && (
          <AboutPage />
        )}

        {currentView === 'project' && (
          <ProjectPage
            project={selectedProject}
            onBack={handleBackToWork}
            onSelectProject={handleOpenProject}
            onPlayVideo={(v) => setActiveVideo(v)}
            onOpenLightbox={(img) => setActiveLightbox(img)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      {/* Lightbox Modal */}
      {activeLightbox && (
        <LightboxModal image={activeLightbox} onClose={() => setActiveLightbox(null)} />
      )}
    </div>
  );
}
