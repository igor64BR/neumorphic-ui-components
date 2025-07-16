import NeuComponent from "./components/NeuComponent/NeuComponent";
import "./css/style.css";
import "./css/led-checkbox.css";
import "./css/top-bottom-button.css"
import LikeBtn from "./components/LikeBtn/LikeBtn";

export default function HomePage() {
    return (
        <div className="body">
            <h1>Neumorphic Components</h1>
            <div className="grid-container">
                <NeuComponent name="Animated Like Button">
                    <LikeBtn/>
                </NeuComponent>
                <NeuComponent name="Top Bottom Button">
                    <button className="top-bottom-button" type="button">
                        <p>Click me!</p>
                    </button>
                </NeuComponent>
                <NeuComponent name="Switch Button">
                    <div className="led-checkbox-container">
                        <input id="switch-checkbox" type="checkbox" name="switch-checkbox"/>
                        <label id="switch-checkbox-label" htmlFor="switch-checkbox">
                            <div className="moving-led-container">
                                <div className="moving-led"></div>
                            </div>
                        </label>
                    </div>
                </NeuComponent>
            </div>
        </div>
    );
}