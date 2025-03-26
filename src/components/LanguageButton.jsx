import { buttonStyle } from "../styles/Buttons.js";

const LanguageButton = ({ name, isActive, onClick }) => {
  return (
    <button style={buttonStyle(isActive)} onClick={onClick}>
      {name}
    </button>
  );
};

export default LanguageButton;
