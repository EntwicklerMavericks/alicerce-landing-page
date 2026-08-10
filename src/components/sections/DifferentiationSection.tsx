import React from 'react';
import { Shield, Lock, Calculator, Database } from 'lucide-react';
import { Card } from '../ui/Card';

export const DifferentiationSection: React.FC = () => {
  const diffs = [
    {
      icon: <Calculator size={26} color="var(--color-gold-primary)" />,
      title: 'Precisão Matemática em Decimal',
      description: 'Diferente de sistemas convencionais que utilizam números de ponto flutuante sujeitos a erros de arredondamento, o Alicerce calcula cada centavo com precisão decimal rigorosa.',
    },
    {
      icon: <Lock size={26} color="var(--color-bordo-light)" />,
      title: 'Isolamento Multi-tenant por Workspace',
      description: 'Arquitetura de dados segregada. Seus registros pessoais, familiares ou empresariais são isolados por chaves exclusivas de tenant no banco de dados.',
    },
    {
      icon: <Shield size={26} color="#34D399" />,
      title: 'Privacidade Absoluta e Zero Anúncios',
      description: 'Seus dados financeiros pertencem exclusivamente a você. O Alicerce não vende informações para bancos, corretoras ou redes de anúncios.',
    },
    {
      icon: <Database size={26} color="#60A5FA" />,
      title: 'Engine Pura Decoupled de Simulação',
      description: 'Nosso motor de simulação roda em sandbox imutável (deep-freeze). Você pode simular qualquer mudança sem perigo de corromper seus dados reais.',
    },
  ];

  return (
    <section id="diferenciais" style={{ padding: '100px 0', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        
        {/* TITULO */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <span className="badge-tag" style={{ marginBottom: '16px' }}>ARQUITETURA & SEGURANÇA</span>
          <h2>Por que o Alicerce é a escolha de quem leva finanças a sério?</h2>
          <p style={{ marginTop: '16px' }}>
            Projetado com rigor de engenharia de software para garantir confiabilidade, privacidade e consistência absoluta.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {diffs.map((item, index) => (
            <Card key={index} style={{ padding: '28px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.description}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
