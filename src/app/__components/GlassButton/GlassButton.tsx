"use client";

import "./style.css";

export type GlassButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function GlassButton({ children, onClick }: GlassButtonProps) {
  return (
    <div className="glass-button-container">
        <button type="button" className="glass-button" onClick={onClick}>
            {children}
        </button>
    </div>
  );
}