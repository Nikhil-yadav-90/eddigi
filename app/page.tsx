"use client";

import { useEffect, useState, useCallback } from "react";

const LaunchingSoon = () => {
  const calculateTimeLeft = useCallback(() => {
    const launchDate = new Date("2025-04-01T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4">Launching Soon 🚀</h1>
      <p className="text-lg mb-6">We&apos;re working hard to bring something amazing for you.</p>
      <div className="flex space-x-4 text-2xl font-semibold">
        <div className="bg-gray-800 p-4 rounded-lg">{timeLeft.days}d</div>
        <div className="bg-gray-800 p-4 rounded-lg">{timeLeft.hours}h</div>
        <div className="bg-gray-800 p-4 rounded-lg">{timeLeft.minutes}m</div>
        <div className="bg-gray-800 p-4 rounded-lg">{timeLeft.seconds}s</div>
      </div>
      <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-700 transition">
        Notify Me
      </button>
    </div>
  );
};

export default LaunchingSoon;