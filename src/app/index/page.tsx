"use client";

import "./style.css";
import "../globals.css";
import ToggleButton from "../__components/ToggleButton/ToggleButton";
import GlassButton from "../__components/GlassButton/GlassButton";


export default function Home() {
  const onSendButton = () => {
    window.location.href = "home-page";
  };

  return (
    <>
      <div className="body flex-centered">
        <div className="neu-container">
          <h1>Welcome to the Neumorphic UI!</h1>
          <form>
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name"/>
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Enter your email"/>
            </div>
            <div className="form-input">
              <label htmlFor="message">Message</label>
              <input type="text" id="message" placeholder="Enter your message"/>
            </div>
            <ToggleButton onToggle={(value) => {console.log(value)}}>Receber informações por e-mail</ToggleButton>
          </form>
          <GlassButton onClick={onSendButton}>Enviar</GlassButton>
        </div>
      </div>
    </>
  );
}
