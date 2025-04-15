import { useEffect, useState } from 'react';

const ScrambleText = ({ words, speed = 50, pause = 2000 }) => {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';

  useEffect(() => {
    let isMounted = true;

    const scramble = (target: string) => {
      let frame = 0;
      const interval = setInterval(() => {
        const scrambled = target
          .split('')
          .map((char, i) => {
            if (frame >= i) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        if (isMounted) setDisplay(scrambled);

        frame++;
        if (frame > target.length) {
          clearInterval(interval);
          setTimeout(() => {
            if (isMounted) {
              setIndex((i) => (i + 1) % words.length);
            }
          }, pause);
        }
      }, speed);
    };

    scramble(words[index]);

    return () => {
      isMounted = false;
    };
  }, [index]);

  return (
    <span className="scramble-text text-3xl font-bold">{display}</span>
  );
};

export default ScrambleText;
