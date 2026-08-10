import React from 'react';

interface AlicerceLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  layout?: 'horizontal' | 'vertical';
}

export const AlicerceLogo: React.FC<AlicerceLogoProps> = ({
  size = 'md',
  showTagline = true,
  layout = 'horizontal',
}) => {
  const getDimensions = () => {
    switch (size) {
      case 'sm':
        return { box: 36, icon: 22, title: '1.1rem', sub: '8px', letterSpacing: '2px' };
      case 'lg':
        return { box: 56, icon: 34, title: '1.8rem', sub: '10px', letterSpacing: '3px' };
      case 'md':
      default:
        return { box: 44, icon: 26, title: '1.35rem', sub: '9px', letterSpacing: '2.5px' };
    }
  };

  const dim = getDimensions();
  const isVertical = layout === 'vertical';

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: isVertical ? 'column' : 'row',
        alignItems: 'center',
        textAlign: isVertical ? 'center' : 'left',
        gap: isVertical ? '12px' : '14px',
      }}
    >
      {/* CAIXA DOURADA DO ÍCONE OFICIAL ALICERCE */}
      <div
        style={{
          width: `${dim.box}px`,
          height: `${dim.box}px`,
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #ebd9b6 0%, #d8b87e 50%, #9e7d44 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 25px rgba(216, 184, 126, 0.4)',
          flexShrink: 0,
        }}
      >
        {/* SVG REFINADO: LINHAS FINAS (1.8) E PILARES CONECTADOS AO CHAPEUZINHO */}
        <svg
          width={dim.icon}
          height={dim.icon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Telhado / Chapeuzinho com beirais */}
          <path d="M12 4.5L3.5 11.5M12 4.5L20.5 11.5" stroke="#18070A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Pilar Central */}
          <path d="M12 4.5V19.5" stroke="#18070A" strokeWidth="1.8" strokeLinecap="round" />
          {/* Pilar Esquerdo (Conectado ao chapeuzinho em y=8.5) */}
          <path d="M7 8.5V19.5" stroke="#18070A" strokeWidth="1.8" strokeLinecap="round" />
          {/* Pilar Direito (Conectado ao chapeuzinho em y=8.5) */}
          <path d="M17 8.5V19.5" stroke="#18070A" strokeWidth="1.8" strokeLinecap="round" />
          {/* Trave Horizontal Cruzada */}
          <path d="M4.5 16H19.5" stroke="#18070A" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      {/* TÍTULO E SUBTÍTULO */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: isVertical ? 'center' : 'flex-start' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: dim.title,
            letterSpacing: '2px',
            lineHeight: 1,
            background: 'linear-gradient(135deg, #ffffff 0%, #ebd9b6 40%, #d8b87e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
          }}
        >
          ALICERCE
        </span>
        {showTagline && (
          <span
            style={{
              fontSize: dim.sub,
              fontWeight: 700,
              letterSpacing: dim.letterSpacing,
              color: '#d8b87e',
              marginTop: '5px',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            FINANÇAS BASEADAS EM OBJETIVOS
          </span>
        )}
      </div>
    </div>
  );
};
