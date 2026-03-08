import { useEffect, useState } from 'react';

export function useShanghaiTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const shanghaiTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Shanghai',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      const shanghaiDate = now.toLocaleDateString('en-US', {
        timeZone: 'Asia/Shanghai',
        month: 'short',
        day: 'numeric',
      });
      setTime(`${shanghaiTime} (UTC+08:00) · ${shanghaiDate}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
