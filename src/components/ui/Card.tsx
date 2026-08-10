import React from 'react';

interface CardProps {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, glow = false, className = '', style }) => {
  return (
    <div
      className={`glass-card ${className}`}
      style={{
        padding: '28px',
        position: 'relative',
        overflow: 'hidden',
        ...(glow ? { border: '1px solid var(--border-gold-glow)', boxShadow: 'var(--shadow-gold-sm)' } : {}),
        ...style,
      }}
    >
      {glow && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'var(--grad-gold)',
          }}
        />
      )}
      {children}
    </div>
  );
};
