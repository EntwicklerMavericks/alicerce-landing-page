import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { AlicerceLogo } from '../ui/AlicerceLogo';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const APP_URL = 'https://alicerce-frontend.pages.dev/';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(24, 7, 10, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-gold-subtle)' : '1px solid transparent',
        transition: 'all var(--transition-normal)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* LOGO ALICERCE */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <AlicerceLogo size="md" showTagline={true} />
        </a>

        {/* NAVIGATION DESKTOP */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#produto" className="nav-link">O Produto</a>
          <a href="#solucao" className="nav-link">Solução</a>
          <a href="#esfriamento" className="nav-link">Esfriamento Consciente</a>
          <a href="#simulacao" className="nav-link">Projeção 12M</a>
          <a href="#diferenciais" className="nav-link">Diferenciais</a>
        </nav>

        {/* CTA ACTIONS */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="glass" size="sm" trackingEvent="header_login_clicked">
              Entrar no App
            </Button>
          </a>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="primary-gold" size="sm" icon={<ArrowRight size={16} />} trackingEvent="header_cta_clicked">
              Começar Agora
            </Button>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir Menu de Navegação"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-gold-subtle)',
            borderRadius: '8px',
            padding: '8px',
            color: '#ffffff',
            cursor: 'pointer',
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            background: '#18070A',
            borderBottom: '1px solid var(--border-gold-subtle)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            boxShadow: 'var(--shadow-glass)',
          }}
        >
          <a href="#produto" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">O Produto</a>
          <a href="#solucao" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Solução</a>
          <a href="#esfriamento" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Esfriamento Consciente</a>
          <a href="#simulacao" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Projeção 12M</a>
          <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Diferenciais</a>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
              <Button variant="glass" style={{ width: '100%' }}>Entrar no App</Button>
            </a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
              <Button variant="primary-gold" icon={<ArrowRight size={16} />} style={{ width: '100%' }}>Começar Agora</Button>
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          font-weight: 500;
          transition: color var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--color-gold-light);
        }
        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 901px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
