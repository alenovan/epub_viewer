import { useEffect, useState } from "react";

const useCountDown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState<number>(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      if (distance <= 0) {
        clearInterval(interval); // Clear interval if countdown has expired
        setCountDown(0); // Set countdown to 0 to prevent negative values
      } else {
        setCountDown(distance);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  return [days, hours, minutes, seconds];
};

export default useCountDown;
