import { useEffect, useState } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const days = 30;
    const hours = 23;
    const minutes = 50;
    const seconds = 40;

    const totalHours = days * 24 + hours;
    const totalMinutes = totalHours * 60 + minutes;
    const totalSeconds = totalMinutes * 60 + seconds;

    return totalSeconds;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (24 * 3600));
  const hours = Math.floor((timeLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <div>
        days{days}:hours{hours}:min{minutes}:secs{seconds}
      </div>
    </>
  );
}

export default CountdownTimer;
