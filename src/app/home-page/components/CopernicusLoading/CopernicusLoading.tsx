import { ReactNode } from 'react';
import styles from './styles.module.css';

type CopernicusLoadingProps = {
  duration: number;
  quantity: number;
};

// Challenge boss for this neumorphic training

// Based on https://uiverse.io/Praashoo7/lucky-hound-44
// Done without seeing the source code
export default function CopernicusLoading(props: CopernicusLoadingProps) {
  /**
   * Renders an array of bar elements arranged in a semi-circular pattern, each with animated properties.
   *
   * These elements will form a Copernicus' Theorem: an illusion of circle running balls that are
   * actually running in straight lines.
   *
   * @param quantity - The number of bars to render.
   * @returns An array of objects, each containing a `hall` and a `ball` ReactNode.
   *
   * Each `hall` is a div styled with a unique angle, and each `ball` is a nested div with animation
   * delay and duration set via CSS variables for staggered animation effects.
   */
  const renderBars = () => {
    const angleStep = 180 / props.quantity;

    const output: { hall: ReactNode; ball: ReactNode }[] = [];

    for (let i = 0; i < props.quantity; i++) {
      const angle = `${i * angleStep}deg`;

      const animationInfo = {
        duration: `${props.duration}s`,
        delay: `${(props.duration / props.quantity / 2) * i}s`,
      };

      output.push({
        hall: (
          <div
            key={i}
            style={{ '--angle': angle } as never}
            className={styles.ballHall}
          ></div>
        ),
        ball: (
          <div
            key={i}
            className={`${styles.ballHall} ${styles.transparent}`}
            style={{ '--angle': angle } as never}
          >
            <div
              key={i}
              className={styles.ball}
              style={
                {
                  '--delay': animationInfo.delay,
                  '--duration': animationInfo.duration,
                  '--angle': angle,
                } as never
              }
            ></div>
          </div>
        ),
      });
    }

    return output;
  };

  const ballsAndHalls = renderBars();

  return (
    <div className={styles.body}>
      <div className={styles.entityContainer}>
        {ballsAndHalls.map((x) => x.hall)}
      </div>
      <div className={styles.entityContainer}>
        {ballsAndHalls.map((x) => x.ball)}
      </div>
    </div>
  );
}
