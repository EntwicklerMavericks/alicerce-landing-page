import React from 'react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Estruture o seu Alicerce',
      description: 'Cadastre suas contas bancárias, cartões de crédito e membros da família. Defina seus objetivos de vida e orçamentos mensais.',
    },
    {
      num: '02',
      title: 'Projete os Próximos 12 Meses',
      description: 'Veja seu fluxo de caixa projetado automaticamente para o ano inteiro. Identifique meses de sobra ou aperto com antecedência.',
    },
    {
      num: '03',
      title: 'Esfrie Desejos de Impulso',
      description: 'Ao desejar um bem não planejado, coloque-o em quarentena de esfriamento. Se ao final você desistir, salve a economia em uma meta.',
    },
    {
      num: '04',
      title: 'Conquiste Grandes Metas',
      description: 'Acompanhe a realização física e financeira de reformas, viagens e aquisições com total segurança e previsibilidade.',
    },
  ];

  return (
    <section id="como-funciona" style={{ padding: '100px 0' }}>
      <div className="container">
        
        {/* TITULO */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <span className="badge-tag" style={{ marginBottom: '16px' }}>JORNADA SIMPLES</span>
          <h2>Como o Alicerce transforma sua vida financeira</h2>
          <p style={{ marginTop: '16px' }}>
            Um método comprovado em 4 etapas para construir clareza e solidez patrimonial.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px 24px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'var(--color-gold-primary)',
                  opacity: 0.3,
                  marginBottom: '12px',
                  lineHeight: 1,
                }}
              >
                {s.num}
              </span>
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{s.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
