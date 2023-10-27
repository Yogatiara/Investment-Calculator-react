import logo from '../assets/investment-calculator-logo.png';
import './Header.css';

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
