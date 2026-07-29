import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { type ReactNode } from 'react';

interface ButtonProps {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  icon?: boolean;
  onClick?: () => void;
}

/**
 * Site Button — extends @vancod/ui styles with Link support and motion effects.
 */
export function Button({ to, href, children, variant = 'primary', className, icon = false, onClick }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 overflow-hidden group w-full sm:w-auto";
  
  // Sobrepõe as cores padrão do @vancod/ui com o tema escuro do site
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 hover:-translate-y-0.5 shadow-lg shadow-blue-600/25",
    secondary: "bg-white text-slate-900 border border-slate-300 hover:bg-slate-100 hover:scale-105 hover:-translate-y-0.5 shadow-sm",
    outline: "bg-transparent text-slate-800 border border-slate-300 hover:bg-slate-100",
    ghost: "bg-transparent text-slate-700 hover:text-blue-600 hover:bg-slate-100"
  };

  const Component = to ? Link : href ? 'a' : 'button';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props: any = { className: cn(baseStyles, variants[variant], className), onClick };
  if (to) props.to = to;
  if (href) { props.href = href; props.target = "_blank"; props.rel = "noopener noreferrer"; }

  return (
    <Component {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
      </span>
    </Component>
  );
}
