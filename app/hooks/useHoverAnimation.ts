import { useState } from "react";

const useHoverAnimation = (word: string, iterationCount: number) => {
  const [name, setName] = useState("");

  setName(word);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let iterations = 0;

  const hoverAnimation = () => {
    const interval = setInterval(() => {
      setName(
        name
          .split("")
          .map((letter: string, i: number) => {
            if (i < iterations) {
              return word[i];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iterations >= name.length) clearInterval(interval);

      iterations += iterationCount;
    }, 80);
  };
};

export { useHoverAnimation };
