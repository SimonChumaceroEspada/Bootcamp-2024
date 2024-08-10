/**
 *
 * Your goal is to modify the application so that when you click the toggle button,
 * the favorite programming language toggles between the items in the languages array.
 * The default value should be the first item in the array.
 *
 * You must use the Context API for this challenge, which means you have to use the createContext
 * and Context.Provider functions. You are free to add classes and styles,
 * but make sure you leave the component ID's and clases provided as they are.
 *
 * Submit your code once it is complete.
 */
import { useState } from "react";
import LanguageContext from "./Context/Context";
import MainSection from "./Components/MainSection";

const languages = ["JavaScript", "Python"];

export default function App() {
  const [language, setLanguage] = useState(languages[0]);
  const [isToogled, setIsToogled] = useState(false);
  
  const changeLanguage = () => {
    setIsToogled(!isToogled);
    setLanguage(isToogled ? languages[0] : languages[1]);
  };
  console.log("hola");

  return (
    <>
      <LanguageContext.Provider value={{ language, changeLanguage }}>
        <MainSection />
      </LanguageContext.Provider>
    </>
  );
}
