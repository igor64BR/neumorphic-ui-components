"use client"

import { useState } from "react";
import styles from "./style.module.css"

export type ToggleButtonProps = {
    onToggle: (current: boolean) => void;
    children: React.ReactNode;
}

export default function ToggleButton({ onToggle, children }: ToggleButtonProps) {
    const [value, setValue] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.checked;
        setValue(newValue);
        onToggle(newValue);
    };

    return (
        <div className={styles["switch-body"]}>
            <div className={styles["switch-container"]}>
                <input type="checkbox" className={styles["toggle-checkbox"]} id="toggle-switch" checked={value} onChange={onChange}/>
                <label htmlFor="toggle-switch" className={styles["switch"]}>
                    <div className={styles["toggle"]}>
                        <div className="led"> </div>
                    </div>
                </label>
            </div>
            <label htmlFor="label">{children}</label>
        </div>
    )
}