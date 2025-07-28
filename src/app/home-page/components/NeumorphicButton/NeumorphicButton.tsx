import style from './style.module.css';

type NeumorphicButtonProps = {
  onClick: () => void;
};

// Based on https://uiverse.io/ke1221/ancient-walrus-24
export default function NeumorphicButton(props: NeumorphicButtonProps) {
  return (
    <button
      className={style.topBottomButton}
      type="button"
      onClick={props.onClick}
    >
      <p>Click me!</p>
    </button>
  );
}
