import React from 'react';

interface Props {
  text: string;
  align?: 'left' | 'center' | 'right';
}

const Title: React.FC<Props> = ({ text, align = 'left' }) => {
  let alignClass = '';

  if (align === 'left') {
    alignClass = 'text-left';
  } else if (align === 'center') {
    alignClass = 'text-center';
  } else if (align === 'right') {
    alignClass = 'text-right';
  }

  return (
    <h2 className={`text-3xl font-bold mb-2 ${alignClass} pb-3 text-white`}>
      {text}
    </h2>
  );
};

export default Title;
