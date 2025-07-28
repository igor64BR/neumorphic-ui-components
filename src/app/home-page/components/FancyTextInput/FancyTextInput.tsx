import { useState } from 'react';
import styles from './styles.module.css';

type FancyTextInputProps = {
  onChange: (text: string) => void;
  label: string;
};

// Based on https://uiverse.io/AmIt-DasIT/weak-donkey-85
export default function FancyTextInput(props: FancyTextInputProps) {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    setValue(newValue);
    props.onChange(newValue);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        name="text"
        id="text"
        className={styles.input}
        required
        onChange={onChange}
        value={value}
      />
      <label htmlFor="text" className={styles.label}>
        {props.label}
      </label>
    </div>
  );
}
