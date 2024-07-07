import "./Header.css";
import LOGO_WHITE from "../../assets/logo_white.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <img src={LOGO_WHITE} />
        RANsomCheck
      </div>
      <div className="header-options">
        <a className="header-option" href="/">Home</a>
        <a className="header-option" href="/analysis">Analysis</a>
        <a className="header-option" href="/about">About</a>
      </div>
    </div>
  );
}