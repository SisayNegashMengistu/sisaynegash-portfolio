import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ThreeBackground from './components/background/ThreeBackground';
import GlowCursor from './components/ui/GlowCursor';
import ScrollIndicator from './components/ui/ScrollIndicator';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import { useThemeStore } from './store/themeStore';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const { isDarkMode } = useThemeStore();
  
  useEffect(() => {
    // Apply the initial theme
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  return (
    <div className="relative">
      <Analytics />
      {/* Interactive background */}
      <ThreeBackground />
      
      {/* Mouse cursor */}
      <GlowCursor />
      
      {/* Scroll indicator */}
      <ScrollIndicator />
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;