import React from 'react';
import { AlicerceLogo } from '../ui/AlicerceLogo';

export const Footer: React.FC = () => {
  const APP_URL = 'https://alicerce-frontend.pages.dev/';

  return (
    <footer style={{ background: '#120507', borderTop: '1px solid var(--border-gold-subtle)', padding: '60px 0 30px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* MARCA */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '16px' }}>
              <AlicerceLogo size="md" showTagline={true} />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', maxWidth: '320px', lineHeight: 1.6 }}>
              Sistema de gestão financeira executiva orientada a metas, projeções temporais de 12 meses e inteligência de consumo consciente.
            </p>
          </div>

          {/* PRODUTO */}
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Produto</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <a href="#produto" className="footer-link">Módulos Estruturais</a>
              <a href="#simulacao" className="footer-link">Forecast 12 Meses</a>
              <a href="#esfriamento" className="footer-link">Esfriamento Consciente</a>
              <a href="#diferenciais" className="footer-link">Segurança & Multi-tenant</a>
            </div>
          </div>

          {/* ACESSO */}
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Acesso</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="footer-link">Entrar no Aplicativo</a>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="footer-link">Criar Nova Conta</a>
              <a href="#como-funciona" className="footer-link">Como Funciona</a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>
          <div>© {new Date().getFullYear()} Alicerce Finance System. Todos os direitos reservados.</div>
          <div>Desenvolvido com precisão matemática para o seu sucesso patrimonial.</div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: var(--color-text-muted);
          transition: color var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--color-gold-light);
        }
      `}</style>
    </footer>
  );
};
