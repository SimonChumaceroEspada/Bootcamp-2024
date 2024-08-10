import { useContext, useState } from "react";
import React from "react";
import LanguageContext from "../Context/Context";
import ChangeLanguageContext from "../Context/Context";

function MainSection() {
    const { language, changeLanguage } = useContext(LanguageContext);
    return (
    <div>
      <p id="favoriteLanguage">favorite programing language: {language}</p>
      <button id="changeFavorite" onClick={changeLanguage}>toggle language</button>
    </div>
  );
}

export default MainSection;
