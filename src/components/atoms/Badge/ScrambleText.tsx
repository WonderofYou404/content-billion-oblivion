import React, { useEffect, useState } from 'react';

interface ScrambleTextProps {
  words: string[];
  interval?: number;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ words, interval = 3000 }) => {
  const [display, setDisplay] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const scramble = (word: string) => {
      const chars = '!<>-_\\/[]{}—=+*^?#________';
      let scrambled = '';
      for (let i = 0; i < word.length; i++) {
        scrambled += chars[Math.floor(Math.random() * chars.length)];
      }
      return scrambled;
    };

    const timeout = setTimeout(() => {
      setDisplay(scramble(words[index]));
      setTimeout(() => {
        setDisplay(words[index]);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 500);
    }, interval);

    return () => clearTimeout(timeout);
  }, [index, words, interval]);

  return <span className="tracking-wider uppercase">{display}</span>;
};

export default ScrambleText;
