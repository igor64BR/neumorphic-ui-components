import { useState } from 'react';
import styles from './style.module.css';

type TexturizedSwitchProps = {
  onValueChange: (value: boolean) => void;
  initialValue?: boolean;
};

// Based on https://uiverse.io/njesenberger/rude-stingray-22
export default function TexturizedSwitch(props: TexturizedSwitchProps) {
  const [value, setValue] = useState(!!props.initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setValue(newValue);
    props.onValueChange(newValue);
  };

  return (
    <div>
      <input
        type="checkbox"
        id={styles.squareSwitchId}
        checked={value}
        onChange={onChange}
      />
      <label htmlFor={styles.squareSwitchId}>
        <div className={styles.squareSwitchBody}>
          <div className={styles.squareSwitchLever}>
            <div className={styles.switchLeverTexturePoint}></div>
            <div className={styles.switchLeverTexturePoint}></div>
            <div className={styles.switchLeverTexturePoint}></div>
            <div className={styles.switchLeverTexturePoint}></div>
            <div className={styles.switchLeverTexturePoint}></div>
            <div className={styles.switchLeverTexturePoint}></div>
            <div className={styles.switchLeverTexturePoint}></div>
            <div className={styles.switchLeverTexturePoint}></div>
            <div className={styles.switchLeverTexturePoint}></div>
          </div>
        </div>
      </label>
    </div>
  );
}
