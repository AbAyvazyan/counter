import { useEffect, useRef, useState } from "react";
import { IDLE_TIME, DECAY_INTERVAL } from "../config/button";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState<{ [key: number]: boolean }>({});
  const idleTimer = useRef<NodeJS.Timeout | null>(null);
  const decayInterval = useRef<NodeJS.Timeout | null>(null);

  const resetIdle = () => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    if (decayInterval.current) clearInterval(decayInterval.current);

    idleTimer.current = setTimeout(() => {
      decayInterval.current = setInterval(() => {
        setCount(prev => {
          if (prev <= 0) {
            clearInterval(decayInterval.current!);
            return 0;
          }
          return prev - 1;
        });
      }, DECAY_INTERVAL);
    }, IDLE_TIME);
  };

  const handleClick = (increment: number, id: number) => {
    setCount(prev => prev + increment);
    resetIdle();

    setDisabledButtons(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setDisabledButtons(prev => ({ ...prev, [id]: false }));
    }, increment * 500);
  };

  useEffect(() => {
    resetIdle();
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      if (decayInterval.current) clearInterval(decayInterval.current);
    };
  }, []);

  return {
    count,
    disabledButtons,
    handleClick
  };
};
