import React, { useState } from 'react';
import { PiggyBank, Sparkles, RefreshCw, Trophy } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const InteractivePreviewSection: React.FC = () => {
  // Estado da Calculadora de Esfriamento Consciente
  const [valorImpulso, setValorImpulso] = useState<number>(3500);
  const [diasQuarentena, setDiasQuarentena] = useState<number>(15);
  const [desistiu, setDesistiu] = useState<boolean>(false);

  // Cálculo de rendimento estimado em 12M se invested
  const economiaGerada = valorImpulso;
  const rendimentoEstimado = Math.round(economiaGerada * 1.12);

  const resetSimulacao = () => {
    setDesistiu(false);
  };

  return (
    <section id="esfriamento" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* TITULO */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <span className="badge-tag" style={{ marginBottom: '16px' }}>EXPERIMENTE NA PRÁTICA</span>
          <h2>Calculadora de Economia Evitada por Esfriamento Consciente</h2>
          <p style={{ marginTop: '16px' }}>
            Simule o poder de colocar um desejo de consumo por impulso em quarentena de esfriamento.
          </p>
        </div>

        <Card glow style={{ maxWidth: '850px', margin: '0 auto', padding: '20px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
            
            {/* PAINEL DE CONTROLES */}
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-gold-light)' }}>
                1. Simule uma Compra por Impulso
              </h3>

              {/* SLIDER VALOR DO DESEJO */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', minWidth: 0 }}>Valor do Produto Desejado:</label>
                  <span style={{ fontWeight: 800, color: 'var(--color-gold-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                    R$ {valorImpulso.toLocaleString('pt-BR')}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="500"
                  value={valorImpulso}
                  onChange={(e) => { setValorImpulso(Number(e.target.value)); setDesistiu(false); }}
                  style={{ width: '100%', accentColor: 'var(--color-gold-primary)', cursor: 'pointer' }}
                />
              </div>

              {/* SLIDER DIAS QUARENTENA */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', minWidth: 0 }}>Dias de Esfriamento Oculto:</label>
                  <span style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                    {diasQuarentena} Dias
                  </span>
                </div>
                <input
                  type="range"
                  min="7"
                  max="30"
                  step="1"
                  value={diasQuarentena}
                  onChange={(e) => setDiasQuarentena(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--color-bordo-primary)', cursor: 'pointer' }}
                />
              </div>

              {/* AÇÃO DO DESAFIO */}
              {!desistiu ? (
                <Button
                  variant="primary-gold"
                  style={{ width: '100%' }}
                  icon={<PiggyBank size={18} />}
                  onClick={() => setDesistiu(true)}
                  trackingEvent="calculator_cancel_purchase"
                >
                  Desistir da Compra & Guardar R$ {valorImpulso.toLocaleString('pt-BR')}
                </Button>
              ) : (
                <Button
                  variant="glass"
                  style={{ width: '100%' }}
                  icon={<RefreshCw size={18} />}
                  onClick={resetSimulacao}
                >
                  Testar Outro Valor
                </Button>
              )}
            </div>

            {/* PAINEL DE RESULTADO E CONQUISTA */}
            <div
              style={{
                background: 'rgba(24, 7, 10, 0.8)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                border: '1px solid var(--border-gold-glow)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-glass)',
              }}
            >
              {!desistiu ? (
                <div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(201, 167, 78, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                    <Sparkles size={28} color="var(--color-gold-primary)" />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '8px' }}>Em Período de Quarentena</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                    Ao registrar este item no Alicerce, você tem {diasQuarentena} dias de reflexão antes de efetivar o gasto.
                  </p>
                  <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--color-gold-light)' }}>
                    Potencial de Economia: <strong>R$ {valorImpulso.toLocaleString('pt-BR')}</strong>
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(52, 211, 153, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                    <Trophy size={28} color="#34D399" />
                  </div>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(52, 211, 153, 0.2)', color: '#34D399', padding: '4px 10px', borderRadius: 'pill', fontWeight: 700, textTransform: 'uppercase' }}>
                    CONQUISTA DESBLOQUEADA ✨
                  </span>

                  <h4 style={{ fontSize: '1.3rem', color: '#ffffff', margin: '12px 0 4px 0' }}>
                    R$ {economiaGerada.toLocaleString('pt-BR')} Salvos!
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                    Ao recusar o impulso, este dinheiro se transforma em patrimônio investido.
                  </p>

                  <div style={{ padding: '12px', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '10px' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Projeção em 1 Ano a 12% a.a.:</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34D399', fontFamily: 'var(--font-mono)' }}>
                      R$ {rendimentoEstimado.toLocaleString('pt-BR')}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </Card>

      </div>
    </section>
  );
};
