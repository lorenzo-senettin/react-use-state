import { cardStyle, cardTitleStyle } from "../styles/AppStyles";

const LanguageCard = ({ name, description }) => {
  return (
    <div style={cardStyle}>
      <h2 style={cardTitleStyle}>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default LanguageCard;
