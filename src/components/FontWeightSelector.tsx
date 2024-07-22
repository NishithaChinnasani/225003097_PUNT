import React from 'react';

interface FontWeightSelectorProps {
  weights: { weight: number; italic: boolean }[];
  selectedWeight: { weight: number; italic: boolean };
  onChange: (weight: { weight: number; italic: boolean }) => void;
}

const FontWeightSelector: React.FC<FontWeightSelectorProps> = ({ weights, selectedWeight, onChange }) => {
  return (
    <select
      value={`${selectedWeight.weight}-${selectedWeight.italic ? 'italic' : 'normal'}`}
      onChange={(e) => {
        const [weight, italic] = e.target.value.split('-');
        onChange({ weight: parseInt(weight), italic: italic === 'italic' });
      }}
    >
      {weights.map(weight => (
        <option key={`${weight.weight}-${weight.italic ? 'italic' : 'normal'}`} value={`${weight.weight}-${weight.italic ? 'italic' : 'normal'}`}>
          {weight.weight} {weight.italic ? 'Italic' : 'Normal'}
        </option>
      ))}
    </select>
  );
};

export default FontWeightSelector;
