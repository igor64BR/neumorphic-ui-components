"use client"

import { useState } from "react";
import "./style.css"

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
        <div className="switch-body">
            <div className="switch-container">
                <input type="checkbox" className="toggle-checkbox" id="toggle-switch" checked={value} onChange={onChange}/>
                <label htmlFor="toggle-switch" className="switch">
                    <div className="toggle">
                        <div className="led"> </div>
                    </div>
                </label>
            </div>
            <label htmlFor="label">{children}</label>
        </div>
    )
}