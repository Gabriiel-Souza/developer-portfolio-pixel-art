import { useState, useCallback } from "react";

export const useGameInteraction = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [coins, setCoins] = useState(0);
  const [health, setHealth] = useState(100);

  const startGame = useCallback(() => {
    setIsGameStarted(true);
  }, []);

  const collectCoin = useCallback(() => {
    setCoins((prev) => prev + 1);
  }, []);

  const takeDamage = useCallback((amount: number) => {
    setHealth((prev) => Math.max(0, prev - amount));
  }, []);

  return {
    isGameStarted,
    coins,
    health,
    startGame,
    collectCoin,
    takeDamage,
  };
};
