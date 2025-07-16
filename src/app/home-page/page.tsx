import NeuComponent from "./components/NeuComponent/NeuComponent";
import "./css/style.css";
import "./css/led-checkbox.css";

export default function HomePage() {
    return (
        <div className="body">
            <h1>Neumorphic Components</h1>
            <div className="grid-container">
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