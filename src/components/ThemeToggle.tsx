"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-stone-900 bg-white text-lg transition hover:bg-stone-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 dark:border-stone-200 dark:bg-stone-900 dark:hover:bg-stone-800"
    >
      <span aria-hidden="true">{isDark === null ? "" : isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
