'use client';

import style from './css/style.module.css';
import '../globals.css';
import radioShareOptions from './data/radioShareOptions';
import NeuComponent from './components/NeuComponent/NeuComponent';
import LikeBtn from './components/LikeBtn/LikeBtn';
import RadioShare from './components/RadioShare/RadioShare';
import TexturizedSwitch from './components/TexturizedSwitch/TexturizedSwitch';
import NeumorphicButton from './components/NeumorphicButton/NeumorphicButton';
import OvalSwitch from './components/OvalSwitch/OvalSwitch';
import FancyTextInput from './components/FancyTextInput/FancyTextInput';
import LoadingGraph from './components/LoadingGraph/LoadingGraph';
import CopernicusLoading from './components/CopernicusLoading/CopernicusLoading';
import PlayStopSwitch from './components/PlayStopSwitch/PlayStopSwitch';

export default function HomePage() {
  function onClick(): void;
  function onClick(e: Event): void;
  function onClick(e?: Event) {
    if (!e) {
      return console.log('I was clicked!!!');
    }

    console.log('I was clicked', e);
  }

  function onValueChange(value: boolean): void;
  function onValueChange(value: string): void;
  function onValueChange(value: boolean | string) {
    console.log('Value changed:', value);
  }

  return (
    <div className={style.body}>
      <h1>Neumorphic Components</h1>
      <div className={style.componentContainer}>
        <NeuComponent name="Play/Stop">
          <PlayStopSwitch onChange={onValueChange} />
        </NeuComponent>
        <NeuComponent name="Square 3D Switch Button">
          <TexturizedSwitch onValueChange={onValueChange} />
        </NeuComponent>
        <NeuComponent name="Animated Like Button">
          <LikeBtn />
        </NeuComponent>
        <NeuComponent name="Top Bottom Button">
          <NeumorphicButton onClick={onClick} />
        </NeuComponent>
        <NeuComponent name="Switch Button">
          <OvalSwitch checked onChange={onValueChange} />
        </NeuComponent>
        <NeuComponent name="Fancy Text Input">
          <FancyTextInput label="Username" onChange={onValueChange} />
        </NeuComponent>
        <NeuComponent name="Animated Share Wheel">
          <RadioShare options={radioShareOptions} />
        </NeuComponent>
        <NeuComponent name="Loading Graph">
          <LoadingGraph />
        </NeuComponent>
        <NeuComponent name="❗Loading Boss ❗">
          <CopernicusLoading duration={2.1} quantity={13} />
        </NeuComponent>
      </div>
    </div>
  );
}
