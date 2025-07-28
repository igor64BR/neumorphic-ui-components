import React from 'react';
import '../../../globals.css';
import styles from './style.module.css';

type OptionProps = {
  svg: React.ReactNode;
  url: string;
  bgColor?: string;
  color?: string;
};

export default function RadioShare({ options }: { options: OptionProps[] }) {
  const radiusStep = 360 / options.length;

  // const for shifting all wheel icons in 90 degrees
  // to always start on top
  const angleCorrection = React.useMemo(() => 90, []);

  return (
    <div className={styles.body}>
      <div className={styles.item} id={styles.center}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
        </svg>
      </div>
      {options.map((x, i) => (
        <a
          key={i}
          href={x.url}
          style={
            {
              '--angle': `${i * radiusStep - angleCorrection}deg`,
              '--delay': `${i * 0.1}s`,
              '--iconBgColor': x.bgColor,
              '--iconColor': x.color,
            } as never
          }
          className={styles.item}
        >
          {x.svg}
        </a>
      ))}
    </div>
  );
}
