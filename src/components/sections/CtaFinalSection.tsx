import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export const CtaFinalSection: React.FC = () => {
  const APP_URL = 'https://alicerce-frontend.pages.dev/';

  return (
    <section style={{ padding: '80px 0 120px 0', position: 'relative' }}>
      <div className="container">
        <Card
          glow
          style={{
            padding: '60px 32px',
            textAlign: 'center',
            background: 'radial-gradient(circle at 50% 0%, rgba(161, 61, 99, 0.3) 0%, rgba(201, 167, 78, 0.12) 50%, rgba(24, 7, 10, 0.95) 100%)',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(201, 167, 78, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', border: '1px solid var(--border-gold-glow)' }}>
            <ShieldCheck size={32} color="var(--color-gold-primary)" />
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '16px', lineHeight: 1.15 }}>
            Pronto para dar um <span className="text-gold-gradient">Alicerce sólido</span> à sua vida financeira?
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0 auto 36px auto' }}>
            Comece agora mesmo a projetar seu fluxo de caixa de 12 meses e transforme desejos impulsivos em patrimônio acumulado.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary-gold" size="lg" icon={<ArrowRight size={20} />} trackingEvent="final_cta_clicked">
                Criar Minha Conta no Alicerce
              </Button>
            </a>
          </div>

          <div style={{ marginTop: '24px', fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>
            Sem cartão de crédito necessário ● Acesso instantâneo à plataforma
          </div>
        </Card>
      </div>
    </section>
  );
};
