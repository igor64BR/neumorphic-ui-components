import { ReactNode } from 'react';
import styles from './styles.module.css';

export default function LoadingGraph() {
  /**
   * Renders the bars
   * @param quantity
   * @returns
   */
  const renderBars = (quantity: number) => {
    // Used to give different initial moments into each bar
    // to a motion effect
    const delayGap = 1 / quantity; // seconds

    // Used to define how far the following bar must be from
    // the current one
    const leftPositionStep = 110 / quantity; // px

    const output: ReactNode[] = [];

    // Creates each bar with its respective delay and left
    // position
    for (let index = 0; index < quantity; index++)
      output.push(
        <div
          key={index}
          style={
            {
              '--delay': `${index * delayGap}s`,
              '--left': `${leftPositionStep * index}px`,
            } as never
          }
          className={styles.graphBar}
        ></div>
      );

    return output;
  };

  return <div className={styles.body}>{renderBars(4)}</div>;
}
