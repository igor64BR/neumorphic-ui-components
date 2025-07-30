import { useState } from 'react';
import './globals.css';
import styles from './style.module.css';

type PlayStopSwitchProps = {
  onChange: (value: boolean) => void;
  checked?: boolean;
};

export default function PlayStopSwitch(props: PlayStopSwitchProps) {
  const [checked, setChecked] = useState(!!props.checked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    props.onChange(newValue);
    setChecked(newValue)
  };

  return (
    <div className={styles.body}>
      <input
        type="checkbox"
        id="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
      />
      <label className={styles.body} htmlFor="checkbox">
        <div className={styles.circle}>
          <div className={styles.indicator}></div>
        </div>
      </label>
    </div>
  );
}
