import { useEffect, useRef, useState } from "react";

export function useWriteDeleteEffect(termsList: string[]) {
  const [typedText, setTypedText] = useState("");
  const termIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const pauseUntil = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();

      if (now < pauseUntil.current) return;

      if (termsList.length === 0) return;

      const currentTerm = termsList[termIndex.current % termsList.length];

      if (isDeleting.current) {
        if (charIndex.current <= 0) {
          isDeleting.current = false;
          termIndex.current = (termIndex.current + 1) % termsList.length;
          charIndex.current = 0;

          setTypedText("");

          pauseUntil.current = now + 400;
        } else {
          charIndex.current -= 1;

          setTypedText(currentTerm.slice(0, charIndex.current));
        }
      } else {
        if (charIndex.current >= currentTerm.length) {
          isDeleting.current = true;
          pauseUntil.current = now + 1500;
        } else {
          charIndex.current += 1;

          setTypedText(currentTerm.slice(0, charIndex.current));
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [termsList]);

  return { typedText };
}
