import React from 'react';

interface FontSelectorProps {
  fonts: string[];
  selectedFont: string;
  onChange: (font: string) => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({ fonts, selectedFont, onChange }) => {
  return (
    <select value={selectedFont} onChange={(e) => onChange(e.target.value)}>
      {fonts.map(font => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
};

export default FontSelector;
