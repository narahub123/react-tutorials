import logo from "../../assets/investment-calculator-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing money bag " />
      <h1>Investment calculator</h1>
    </header>
  );
}
