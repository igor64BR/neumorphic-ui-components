import NeuComponent from "./components/NeuComponent/NeuComponent";
import style from "./css/style.module.css";
import ledCheckbox from "./css/led-checkbox.module.css";
import topBottomButton from "./css/top-bottom-button.module.css";
import squareSwitchButton from "./css/square-switch-button.module.css";
import LikeBtn from "./components/LikeBtn/LikeBtn";
import "../globals.css";

export default function HomePage() {
    return (
        <div className={style.body}>
            <h1>Neumorphic Components</h1>
            <div className={style.componentContainer}>
                <NeuComponent name="Square 3D Switch Button">
                    <div>
                        <input type="checkbox" id={squareSwitchButton.squareSwitchId}/>
                        <label htmlFor={squareSwitchButton.squareSwitchId}>
                            <div className={squareSwitchButton.squareSwitchBody}>
                                <div className={squareSwitchButton.squareSwitchLever}>
                                    <div className={squareSwitchButton.switchLeverTexturePoint}></div>
                                    <div className={squareSwitchButton.switchLeverTexturePoint}></div>
                                    <div className={squareSwitchButton.switchLeverTexturePoint}></div>
                                    <div className={squareSwitchButton.switchLeverTexturePoint}></div>
                                    <div className={squareSwitchButton.switchLeverTexturePoint}></div>
                                    <div className={squareSwitchButton.switchLeverTexturePoint}></div>
                                    <div className={squareSwitchButton.switchLeverTexturePoint}></div>
                                    <div className={squareSwitchButton.switchLeverTexturePoint}></div>
                                    <div className={squareSwitchButton.switchLeverTexturePoint}></div>
                                </div>
                            </div>
                        </label>
                    </div>
                </NeuComponent>
                <NeuComponent name="Animated Like Button">
                    <LikeBtn/>
                </NeuComponent>
                <NeuComponent name="Top Bottom Button">
                    <button className={topBottomButton.topBottomButton} type="button">
                        <p>Click me!</p>
                    </button>
                </NeuComponent>
                <NeuComponent name="Switch Button">
                    <div className={ledCheckbox.ledCheckboxContainer}>
                        <input id={ledCheckbox.switchCheckbox} type="checkbox" name="switch-checkbox"/>
                        <label id={ledCheckbox.switchCheckboxLabel} htmlFor={ledCheckbox.switchCheckbox}>
                            <div className={ledCheckbox.movingLedContainer}>
                                <div className={ledCheckbox.movingLed}></div>
                            </div>
                        </label>
                    </div>
                </NeuComponent>
            </div>
        </div>
    );
}