import React from 'react';

type BackgroundProps = {
  show: boolean;
  type: 'initial' | 'final';
};

const Background = ({ show, type }: BackgroundProps) => {
  const initialBackground = `bg-gradient-to-br from-green-800 to-green-600`;
  const finalBackground = {
    backgroundImage: 'url("https://a9d1ec6f033e45976b2e.cdn6.editmysite.com/uploads/b/a9d1ec6f033e45976b2e1ff75583da50b35cafe4c477294cf76fb711c36c8d4b/Massage_1697212719.jpg?width=2400&optimize=medium&height=480&fit=cover&dpr=1")',
  };

  return (
    <div 
      className={`fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10 transition-opacity duration-1000 ${
        show ? 'opacity-100' : 'opacity-0'
      } ${type === 'initial' ? initialBackground : ''} before:content-[''] before:absolute before:inset-0 ${
        type === 'final' ? 'before:bg-black/40' : ''
      }`}
      style={type === 'final' ? finalBackground : undefined}
    />
  );
}

export default Background;