import React from "react";

function Languages({ language, onLanguageChange }) {
  return (
    <div>
      <label className="label">Select Language</label>
      <div className="opts">
        {LANGUAGES.map(({ label, value }) => {
          return (
            <div
              key={label}
              className={`opt ${language === value ? "selected" : ""}`}
              onClick={() => onLanguageChange(value)}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Dutch", value: "nl" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Greek", value: "el" },
  { label: "Hebrew", value: "iw" },
  { label: "Hindi", value: "hi" },
  { label: "Italian", value: "it" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Latin", value: "la" },
  { label: "Persian", value: "fa" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" },
  { label: "Turkish", value: "tr" }
];

export default Languages;
