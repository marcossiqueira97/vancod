import { memo } from 'react';

interface AmbientBackgroundProps {
  variant?: 'light' | 'subtle' | 'dark';
}

export const AmbientBackground = memo(function AmbientBackground({ variant = 'light' }: AmbientBackgroundProps) {
  if (variant === 'dark') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-indigo-600/5 rounded-full blur-[160px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Soft central ambient radial gradient */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100/60 via-blue-50/30 to-transparent rounded-full blur-[100px]" />
      {/* Gentle side tone for visual depth */}
      <div className="absolute top-[400px] right-10 w-[500px] h-[400px] bg-slate-100/60 rounded-full blur-[120px]" />
    </div>
  );
});
