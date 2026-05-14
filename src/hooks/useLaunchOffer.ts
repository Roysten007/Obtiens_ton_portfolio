import { useState, useEffect } from 'react';

const TARGET_DATE = new Date('2026-06-18T20:00:00+01:00').getTime();

export function useLaunchOffer() {
  const [isExpired, setIsExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    jours: 0,
    heures: 0,
    minutes: 0,
    secondes: 0,
  });

  useEffect(() => {
    const checkTime = () => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance <= 0) {
        setIsExpired(true);
        setTimeLeft({ jours: 0, heures: 0, minutes: 0, secondes: 0 });
      } else {
        setIsExpired(false);
        setTimeLeft({
          jours: Math.floor(distance / (1000 * 60 * 60 * 24)),
          heures: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secondes: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    checkTime();
    const timer = setInterval(checkTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentPrice = isExpired ? 39999 : 29999;
  const formattedPrice = currentPrice.toLocaleString('fr-FR').replace(/\s/g, ' ');

  return { isExpired, timeLeft, currentPrice, formattedPrice };
}
