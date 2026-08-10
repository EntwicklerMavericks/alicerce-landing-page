import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSolutionSection } from './components/sections/ProblemSolutionSection';
import { ModulesSection } from './components/sections/ModulesSection';
import { InteractivePreviewSection } from './components/sections/InteractivePreviewSection';
import { DifferentiationSection } from './components/sections/DifferentiationSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { CtaFinalSection } from './components/sections/CtaFinalSection';

export const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-deep)' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <HeroSection />
        <ProblemSolutionSection />
        <ModulesSection />
        <InteractivePreviewSection />
        <HowItWorksSection />
        <DifferentiationSection />
        <CtaFinalSection />
      </main>
      <Footer />
    </div>
  );
};
export default App;
