"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    title: "春のビッグセール開催中！",
    subtitle: "人気商品が最大50%OFF",
    bg: "from-orange-400 to-pink-400",
    emoji: "🌸",
  },
  {
    title: "新生活応援フェア",
    subtitle: "家具・家電がお買い得",
    bg: "from-orange-500 to-yellow-400",
    emoji: "🏠",
  },
  {
    title: "Lamazon プライム会員特典",
    subtitle: "送料無料＆限定セールに参加しよう",
    bg: "from-orange-600 to-red-400",
    emoji: "⭐",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden">
      <div
        className={`bg-gradient-to-r ${slide.bg} px-4 py-16 text-center text-white transition-all duration-700 md:py-24`}
      >
        <div className="text-6xl md:text-8xl mb-4">{slide.emoji}</div>
        <h2 className="text-3xl font-extrabold md:text-5xl">{slide.title}</h2>
        <p className="mt-3 text-lg md:text-xl opacity-90">{slide.subtitle}</p>
        <button className="mt-6 rounded-full bg-white px-8 py-3 font-bold text-orange-600 shadow-lg transition-transform hover:scale-105">
          今すぐチェック →
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
