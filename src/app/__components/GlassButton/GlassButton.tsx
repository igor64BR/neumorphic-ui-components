"use client";

import styles from "./style.module.css";

export type GlassButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function GlassButton({ children, onClick }: GlassButtonProps) {
  return (
    // <div className="glass-button-container">
    <div className={styles["glass-button-container"]}>
        <button type="button" className={styles["glass-button"]} onClick={onClick}>
            {children}
        </button>
    </div>
  );
}