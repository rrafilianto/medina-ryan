const count = (countDownDate: string, setCount: (data: any) => void) => {
  const newDate: any = new Date(countDownDate);

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = newDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(interval);
      setCount({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    } else {
      setCount({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }, 1000);
};

export default count;
