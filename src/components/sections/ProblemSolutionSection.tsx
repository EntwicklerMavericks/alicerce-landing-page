import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/Card';

export const ProblemSolutionSection: React.FC = () => {
  const painPoints = [
    {
      title: 'Olhar Apenas para o Passado',
      description: 'Aplicativos tradicionais apenas categorizam o dinheiro que você já gastou. Quando você nota o rombo no orçamento, o mês já acabou.',
    },
    {
      title: 'Planilhas Frágeis e Desatualizadas',
      description: 'Fórmulas manuais de Excel que quebram facilmente, exigem horas de manutenção e não preveem a saúde financeira em 12 meses.',
    },
    {
      title: 'Compras por Impulso que Drenam Sonhos',
      description: 'A ausência de um mecanismo de pausa faz você gastar em desejos momentâneos o dinheiro que deveria realizar grandes conquistas.',
    },
  ];

  const solutionPoints = [
    {
      title: 'Motor de Projeção em 12 Meses (Forecast)',
      description: 'Veja o seu saldo futuro calculado matematicamente a cada dia dos próximos 365 dias, prevenindo apertos antes que aconteçam.',
    },
    {
      title: 'Quarentena de Esfriamento Consciente',
      description: 'Sistema de esfriamento obrigatório de 7 a 30 dias para desejos de consumo. Se desistir, a economia vira aporte automático na sua meta.',
    },
    {
      title: 'Simulação de Cenários What-If',
      description: 'Teste imprevistos, antecipações ou mudanças de aportes em ambiente seguro antes de comprometer o seu dinheiro real.',
    },
  ];

  return (
    <section id="solucao" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <span className="badge-tag" style={{ marginBottom: '16px' }}>DA FRUSTRAÇÃO À CLAREZA PATRIMONIAL</span>
          <h2>Por que os métodos tradicionais falham com o seu dinheiro?</h2>
          <p style={{ marginTop: '16px', fontSize: '1.1rem' }}>
            Controlar gastos passados não constrói patrimônio. O segredo é ter um sistema que projete o futuro e proteja suas decisões.
          </p>
        </div>

        {/* COMPARATIVO LADO A LADO */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* COLUNA 1: O CAOS TRADICIONAL */}
          <Card style={{ background: 'rgba(239, 68, 68, 0.03)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlertCircle size={24} color="#EF4444" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#EF4444' }}>O Caos Tradicional</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>Planilhas & Apps de Gastos Passados</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {painPoints.map((item, index) => (
                <div key={index} style={{ paddingBottom: '16px', borderBottom: index !== painPoints.length - 1 ? '1px dashed rgba(255, 255, 255, 0.08)' : 'none' }}>
                  <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* COLUNA 2: A ABORDAGEM ALICERCE */}
          <Card glow style={{ background: 'rgba(201, 167, 78, 0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(201, 167, 78, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={24} color="var(--color-gold-primary)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-gold-light)' }}>A Abordagem Alicerce</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-gold-primary)' }}>Gestão Orientada a Metas e Projeção</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {solutionPoints.map((item, index) => (
                <div key={index} style={{ paddingBottom: '16px', borderBottom: index !== solutionPoints.length - 1 ? '1px dashed rgba(201, 167, 78, 0.15)' : 'none' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-gold-light)', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </Card>

        </div>

      </div>
    </section>
  );
};
