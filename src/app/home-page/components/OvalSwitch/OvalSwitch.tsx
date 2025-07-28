import { useState } from 'react';
import style from './style.module.css';

type OvalSwitchProps = {
  onChange: (value: boolean) => void;
  checked?: boolean;
};

// Based on https://uiverse.io/chase2k25/fluffy-dog-18
export default function OvalSwitch(props: OvalSwitchProps) {
  const [checked, setChecked] = useState(!!props.checked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    props.onChange(newValue);
    setChecked(newValue);
  };

  return (
    <div className={style.ledCheckboxContainer}>
      <input
        id={style.switchCheckbox}
        type="checkbox"
        name="switch-checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label id={style.switchCheckboxLabel} htmlFor={style.switchCheckbox}>
        <div className={style.movingLedContainer}>
          <div className={style.movingLed}></div>
        </div>
      </label>
    </div>
  );
}
