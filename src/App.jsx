import { useState } from "react";
import { languages } from "./data/languages";
import LanguageButton from "./components/LanguageButton";
import LanguageCard from "./components/LanguageCard";
import {
  containerStyle,
  titleStyle,
  buttonsWrapperStyle,
} from "./styles/AppStyles";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Learn Web development</h1>

      <div style={buttonsWrapperStyle}>
        {languages.map((lang) => (
          <LanguageButton
            key={lang.name}
            name={lang.name}
            isActive={selectedLanguage.name === lang.name}
            onClick={() => setSelectedLanguage(lang)}
          />
        ))}
      </div>

      <LanguageCard
        name={selectedLanguage.name}
        description={selectedLanguage.description}
      />
    </div>
  );
}

export default App;
