import React from "react";
import { useTranslation } from "react-i18next";
import {
  commonStyle,
  sizeItem,
  sizeContainer,
  borderRadiusContainerSize
} from "../utils/style";

// LanguageSwitch component allows toggling between English and Italian languages.
// It accepts a `size` prop to adjust the size of the switch UI.
const LanguageSwitch = ({ size = "default" }) => {
  const { i18n } = useTranslation();

  // Check if the current language is English
  const isEnglish = i18n.language === "en";

  // Function to toggle language between English and Italian
  const toggleLanguage = () => {
    const nextLang = isEnglish ? "it" : "en";
    i18n.changeLanguage(nextLang);
  };

  // Set fixed width and dynamic height/font sizes based on size prop
  const containerWidth = `60px`;
  const containerHeight = sizeContainer[size];
  const fontSize = sizeItem[size];

  return (
    <div
      onClick={toggleLanguage}    // Switch language on click
      style={{
        width: containerWidth,
        height: containerHeight,
        borderRadius: borderRadiusContainerSize[size],  // Rounded corners based on size
        backgroundColor: "#333",  // Dark background for the switch container
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Space between "EN" and "IT"
        padding: "2px",
        cursor: "pointer",       // Pointer cursor to indicate clickable area
        position: "relative",
        userSelect: "none",      // Prevent text selection on click
      }}
    >
      {/* English label */}
      <div
        style={{
          width: "50%",
          textAlign: "center",
          fontSize: fontSize,
          color: isEnglish ? "#fff" : "#aaa", // Highlight if active
          zIndex: 2,
          fontWeight: "bold"
        }}
      >
        EN
      </div>

      {/* Italian label */}
      <div
        style={{
          width: "50%",
          textAlign: "center",
          fontSize: fontSize,
          color: !isEnglish ? "#fff" : "#aaa", // Highlight if active
          zIndex: 2,
          fontWeight: "bold"
        }}
      >
        IT
      </div>

      {/* Sliding indicator showing the active language */}
      <div
        style={{
          position: "absolute",
          top: "2px",
          bottom: "2px",
          left: isEnglish ? "2px" : "calc(50% + 2px)", // Moves left or right depending on active language
          width: "calc(50% - 4px)",
          borderRadius: borderRadiusContainerSize[size], // Rounded edges matching container
          backgroundColor: "#4F46E5", // Highlight color (indigo)
          transition: "left 0.3s ease" // Smooth sliding animation
        }}
      />
    </div>
  );
};

export default LanguageSwitch;
