import React, { useState } from 'react';
import { LineChart, Hourglass, Sliders, CalendarDays, Rocket, Check } from 'lucide-react';
import { Card } from '../ui/Card';

export const ModulesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const modules = [
    {
      id: 'forecast',
      title: 'Motor de Forecast 12 Meses',
      badge: 'PROJEÇÃO TEMPORAL',
      icon: <LineChart size={24} color="var(--color-gold-primary)" />,
      description: 'Preveja o saldo das suas contas bancárias para cada um dos próximos 365 dias. O sistema decompõe salários, recorrências, faturas e orçamentos automaticamente.',
      highlights: [
        'Classificação automática em 4 zonas de saúde (Superávit, Folga Estável, Alerta, Déficit)',
        'Explanation Engine com detalhamento por categoria e fonte',
        'Consolidação atômica sem arredondamentos precoces',
      ],
      previewCard: (
        <div style={{ background: '#18070A', padding: '18px', borderRadius: '16px', border: '1px solid var(--border-gold-subtle)', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-gold-light)', fontWeight: 700, minWidth: 0 }}>Projeção Cumulativa 12 Meses</span>
            <span style={{ fontSize: '0.7rem', background: 'rgba(52, 211, 153, 0.15)', color: '#34D399', padding: '2px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>FOLGA ESTÁVEL</span>
          </div>
          {/* GRÁFICO SINTÉTICO */}
          <div style={{ height: '140px', display: 'flex', alignItems: 'flex-end', gap: '8px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            {[45, 52, 48, 60, 68, 75, 82, 90, 88, 95, 102, 115].map((val, idx) => (
              <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <div
                  style={{
                    width: '100%',
                    height: `${val}%`,
                    background: idx === 7 ? 'var(--grad-gold)' : 'rgba(161, 61, 99, 0.4)',
                    borderRadius: '4px 4px 0 0',
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '0.75rem', color: 'var(--color-text-dim)' }}>
            <span>Ago/26 (Atual)</span>
            <span>Dez/26 (Peak)</span>
            <span>Jul/27 (+12M)</span>
          </div>
        </div>
      ),
    },
    {
      id: 'wishlist',
      title: 'Wishlist & Esfriamento Consciente',
      badge: 'PSICOLOGIA FINANCEIRA',
      icon: <Hourglass size={24} color="var(--color-bordo-light)" />,
      description: 'Elimine o impulso de compras emocionais. Todo desejo entra em uma quarentena de 7 a 30 dias. Se ao final você desistir, o valor vira Economia Evitada acumulada.',
      highlights: [
        'Contagem regressiva de esfriamento com trava de quebra de desafio',
        'Cálculo e troféu de Economia Evitada Acumulada',
        'Integração com comparador de preços e histórico de cotações',
      ],
      previewCard: (
        <div style={{ background: '#18070A', padding: '24px', borderRadius: '16px', border: '1px solid rgba(161, 61, 99, 0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>MacBook Pro M3 Max</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-light)' }}>R$ 18.500,00</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
            Período de Esfriamento: 14 dias restantes (Faltam 50%)
          </div>
          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
            <div style={{ width: '50%', height: '100%', background: 'var(--grad-bordo)' }} />
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ flex: 1, padding: '8px', background: 'rgba(52, 211, 153, 0.1)', borderRadius: '8px', textAlign: 'center', fontSize: '0.75rem', color: '#34D399', fontWeight: 700 }}>
              💡 Desistir & Salvar no Porquinho (R$ 18.500)
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'simulacao',
      title: 'Simulador What-If de Cenários',
      badge: 'ENGENHARIA FINANCEIRA',
      icon: <Sliders size={24} color="var(--color-gold-primary)" />,
      description: 'Avalie cenários alternativos sem alterar a sua vida real. Ajuste aportes, variabilidade de custos de reformas e datas de antecipação com detecção de gargalos.',
      highlights: [
        'Simulação em Sandbox desacoplada com deep-freeze de snapshot',
        'Linha do tempo comparativa: Cenário Real vs Cenário Simulado',
        'Detecção de gargalos e gargalo de caminho crítico (Critical Path)',
      ],
      previewCard: (
        <div style={{ background: '#18070A', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-gold-subtle)' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-gold-light)', fontWeight: 700, marginBottom: '12px' }}>
            Simulação: Antecipar Aporte em R$ 1.500/mês
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: '0.8rem' }}>
              <span>Conclusão Projeto Casa (Real):</span>
              <span style={{ color: 'var(--color-text-dim)' }}>Dez/2027</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(52, 211, 153, 0.1)', borderRadius: '8px', fontSize: '0.8rem', color: '#34D399', fontWeight: 700 }}>
              <span>Conclusão Projeto Casa (Simulado):</span>
              <span>Jul/2027 (5 Meses Antes! ✨)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'calendar',
      title: 'Radar de Vencimentos 30 Dias',
      badge: 'CONTROLE DE LIQUIDEZ',
      icon: <CalendarDays size={24} color="#60A5FA" />,
      description: 'Tenha clareza total dos seus próximos 30 dias. Acompanhe boletos, cartões de crédito fechados, salários previstos e vencimentos sem surpresas.',
      highlights: [
        'Visualização dinâmica em lista expansível e grid de 30 dias',
        'Status imediato de pendências, liquidações e alertas de atraso',
        'Agrupamento por cartão, conta corrente e categoria',
      ],
      previewCard: (
        <div style={{ background: '#18070A', padding: '24px', borderRadius: '16px', border: '1px solid rgba(96, 165, 250, 0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', color: '#60A5FA', fontWeight: 700 }}>Radar de Vencimentos — Próximos 7 Dias</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)' }}>3 Contas</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(239, 68, 68, 0.1)', borderLeft: '3px solid #EF4444', borderRadius: '6px', fontSize: '0.8rem' }}>
              <span>IPVA Veículo - Cota 2/3</span>
              <span style={{ color: '#EF4444', fontWeight: 700 }}>R$ 950 (Atrasado)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #F59E0B', borderRadius: '6px', fontSize: '0.8rem' }}>
              <span>Fatura Cartão Gold Visa</span>
              <span style={{ color: '#F59E0B', fontWeight: 700 }}>R$ 3.450 (Hoje)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'projetos',
      title: 'Projetos de Longo Prazo',
      badge: 'EXECUÇÃO DE GRANDES SONHOS',
      icon: <Rocket size={24} color="var(--color-gold-primary)" />,
      description: 'Gerencie obras, reformas, viagens internacionais ou casamentos divididos em etapas físicas e financeiras com rastreabilidade completa.',
      highlights: [
        'Métricas de Cobertura Financeira, Progresso Físico e Readiness Score',
        'Vínculo de itens da Wishlist e Metas às etapas do projeto',
        'Visão em Kanban e linha do tempo de execução',
      ],
      previewCard: (
        <div style={{ background: '#18070A', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-gold-glow)' }}>
          <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 700, marginBottom: '4px' }}>Reforma Cozinha Gourmet</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-light)', marginBottom: '16px' }}>Orçamento: R$ 45.000,00 | Progresso Físico: 33%</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>Etapa 1: Demolição</span>
              <span style={{ color: '#34D399' }}>✓ Concluída</span>
            </div>
            <div style={{ fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>Etapa 2: Porcelanato</span>
              <span style={{ color: '#F59E0B' }}>⚡ Em Andamento</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="produto" style={{ padding: '100px 0', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        
        {/* TITULO */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <span className="badge-tag" style={{ marginBottom: '16px' }}>MÓDULOS ESTRUTURAIS</span>
          <h2>Um ecossistema completo para o seu sucesso patrimonial</h2>
          <p style={{ marginTop: '16px' }}>
            Conheça os 5 pilares do Alicerce projetados para transformar a forma como você planeja, protege e investe o seu dinheiro.
          </p>
        </div>

        {/* NAVEGAÇÃO DE ABAS MÓDULOS */}
        <div
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            paddingBottom: '8px',
            marginBottom: '40px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {modules.map((mod, idx) => (
            <button
              key={mod.id}
              onClick={() => setActiveTab(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-pill)',
                background: activeTab === idx ? 'var(--grad-gold)' : 'rgba(255, 255, 255, 0.04)',
                color: activeTab === idx ? '#18070A' : 'var(--color-text-muted)',
                border: activeTab === idx ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all var(--transition-fast)',
              }}
            >
              {mod.title}
            </button>
          ))}
        </div>

        {/* EXIBIÇÃO DO MÓDULO SELECIONADO */}
        <Card glow style={{ padding: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            
            {/* LADO ESQUERDO: TEXTO & DESTAQUES */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                {modules[activeTab].icon}
                <span className="badge-tag" style={{ fontSize: '0.75rem' }}>{modules[activeTab].badge}</span>
              </div>

              <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#ffffff' }}>{modules[activeTab].title}</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                {modules[activeTab].description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {modules[activeTab].highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(201, 167, 78, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}>
                      <Check size={12} color="var(--color-gold-primary)" />
                    </div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* LADO DIREITO: CARD DE PREVIEW MOCKUP */}
            <div>
              {modules[activeTab].previewCard}
            </div>

          </div>
        </Card>

      </div>
    </section>
  );
};
