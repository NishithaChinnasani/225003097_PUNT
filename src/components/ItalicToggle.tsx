import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ItalicToggleProps {
  isItalic: boolean;
  onChange: (value: boolean) => void;
  fontFamily: string;
  fontWeight: string;
}

const ItalicToggle: React.FC<ItalicToggleProps> = ({ isItalic, onChange, fontFamily, fontWeight }) => {
  const [italicSupported, setItalicSupported] = useState<boolean>(false);

  useEffect(() => {
    // Check if italic is supported for the selected font family and weight
    axios.get('/path/to/fonts.json')
      .then(response => {
        const fontData = response.data[fontFamily];
        const supportsItalic = fontData.includes(`${fontWeight}italic`);
        setItalicSupported(supportsItalic);
      })
      .catch(error => {
        console.error('Error checking italic support', error);
      });
  }, [fontFamily, fontWeight]);

  return (
    <button
      onClick={() => onChange(!isItalic)}
      disabled={!italicSupported}
    >
      {italicSupported ? 'Toggle Italic' : 'Italic Not Supported'}
    </button>
  );
};

export default ItalicToggle;
