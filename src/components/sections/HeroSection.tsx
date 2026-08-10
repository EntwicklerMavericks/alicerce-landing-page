import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles, Clock, Compass } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  const APP_URL = 'https://alicerce-frontend.pages.dev/';

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '100px',
        background: 'var(--grad-hero)',
        overflow: 'hidden',
      }}
    >
      {/* GLOW DE FUNDO */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201, 167, 78, 0.12) 0%, rgba(161, 61, 99, 0.08) 40%, transparent 70%)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* BADGE SUPERIOR */}
          <div className="animate-fade-in" style={{ display: 'inline-flex', marginBottom: '24px' }}>
            <span className="badge-tag">
              <Sparkles size={14} color="var(--color-gold-primary)" />
              SISTEMA DE GESTÃO PATRIMONIAL EXECUTIVA
            </span>
          </div>

          {/* HEADLINE */}
          <h1
            className="animate-fade-in"
            style={{
              marginBottom: '24px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
            }}
          >
            Esqueça planilhas genéricas.{' '}
            <span className="text-gold-gradient">Construa patrimônio real</span> com inteligência de projeção.
          </h1>

          {/* SUBHEADLINE */}
          <p
            className="animate-fade-in"
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--color-text-muted)',
              marginBottom: '40px',
              maxWidth: '740px',
              margin: '0 auto 40px auto',
            }}
          >
            O Alicerce combina motor de <strong style={{ color: '#fff' }}>Forecast 12M em tempo real</strong>, desafios de <strong style={{ color: '#fff' }}>esfriamento consciente de desejos</strong> e simulação de cenários para guiar suas maiores conquistas financeiras.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '60px',
            }}
          >
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary-gold" size="lg" icon={<ArrowRight size={20} />} trackingEvent="hero_primary_cta">
                Começar Agora Sem Custos
              </Button>
            </a>
            <a href="#simulacao">
              <Button variant="glass" size="lg" icon={<Compass size={20} />} trackingEvent="hero_demo_cta">
                Ver Demonstração Interativa
              </Button>
            </a>
          </div>

          {/* MOCKUP EXECUTIVO DA INTERFACE ALICERCE */}
          <div
            className="animate-fade-in"
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-gold-glow)',
              boxShadow: 'var(--shadow-gold-lg)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                background: '#18070A',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '24px',
                textAlign: 'left',
              }}
            >
              {/* TOP MOCKUP HEADER */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                  paddingBottom: '12px',
                  marginBottom: '20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', flexShrink: 0 }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B', flexShrink: 0 }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>app.alicerce.finance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0 }}>
                  <span style={{ fontSize: '0.7rem', background: 'rgba(201, 167, 78, 0.15)', color: 'var(--color-gold-light)', padding: '3px 8px', borderRadius: '6px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    ● PLANEJAMENTO 2026-08
                  </span>
                </div>
              </div>

              {/* GRID MOCKUP DASHBOARD */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                
                {/* CARD 1: SALDO GLOBAL */}
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(201, 167, 78, 0.2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Saldo Real Consolidado</span>
                    <ShieldCheck size={16} color="var(--color-gold-primary)" />
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-gold-light)', fontFamily: 'var(--font-mono)' }}>
                    R$ 84.500,00
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-emerald-primary)', marginTop: '4px' }}>
                    +12.5% vs mês anterior (Itaú + XP + Reserva)
                  </div>
                </div>

                {/* CARD 2: FORECAST 12M */}
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(52, 211, 153, 0.2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projeção Fim do Mês</span>
                    <TrendingUp size={16} color="var(--color-emerald-primary)" />
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                    R$ 91.200,00
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-light)', marginTop: '4px' }}>
                    Zona: FOLGA ESTÁVEL (Superávit de R$ 6.700)
                  </div>
                </div>

                {/* CARD 3: ECONOMIA EVITADA */}
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(161, 61, 99, 0.3)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Economia Evitada Acumulada</span>
                    <Clock size={16} color="var(--color-bordo-light)" />
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-bordo-light)', fontFamily: 'var(--font-mono)' }}>
                    R$ 10.300,00
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    2 desejos cancelados após esfriamento
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
