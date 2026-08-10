import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary-gold' | 'secondary-bordo' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  trackingEvent?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary-gold',
  size = 'md',
  icon,
  children,
  onClick,
  trackingEvent,
  className = '',
  style,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (trackingEvent && typeof window !== 'undefined') {
      console.log(`[Analytics Track Event]: ${trackingEvent}`);
    }
    if (onClick) onClick(e);
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary-gold':
        return {
          background: 'var(--grad-gold)',
          color: '#18070A',
          boxShadow: 'var(--shadow-gold-sm)',
          border: 'none',
          fontWeight: 700,
        };
      case 'secondary-bordo':
        return {
          background: 'var(--grad-bordo)',
          color: '#ffffff',
          boxShadow: 'var(--shadow-bordo)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          fontWeight: 600,
        };
      case 'glass':
        return {
          background: 'rgba(255, 255, 255, 0.05)',
          color: '#ffffff',
          border: '1px solid var(--border-gold-subtle)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          fontWeight: 600,
        };
      case 'outline':
      default:
        return {
          background: 'transparent',
          color: 'var(--color-gold-light)',
          border: '1px solid var(--color-gold-primary)',
          fontWeight: 600,
        };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return { padding: '8px 16px', fontSize: '0.85rem', borderRadius: 'var(--radius-sm)' };
      case 'lg':
        return { padding: '16px 32px', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' };
      case 'md':
      default:
        return { padding: '12px 24px', fontSize: '0.95rem', borderRadius: 'var(--radius-md)' };
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        cursor: 'pointer',
        transition: 'all var(--transition-fast)',
        fontFamily: 'var(--font-title)',
        letterSpacing: '-0.01em',
        ...getVariantStyles(),
        ...getSizeStyles(),
        ...style,
      }}
      className={`custom-button ${className}`}
      {...props}
    >
      {children}
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
    </button>
  );
};
