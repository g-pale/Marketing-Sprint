"use client";

import { useLanguage, type Language } from "@/context/LanguageContext";

const languages: { code: Language; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "tm", label: "TM" },
];

export function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="flex items-center justify-end px-6 py-4 md:px-12">
      <nav
        className="flex gap-1 border border-gray-800"
        aria-label="Language switcher"
      >
        {languages.map(({ code, label }) => {
          const isActive = language === code;
          return (
            <button
              key={code}
              type="button"
              onClick={() => setLanguage(code)}
              className={`min-w-[3rem] px-3 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                isActive
                  ? "bg-white text-black"
                  : "bg-black text-gray-400 hover:text-white"
              }`}
              aria-pressed={isActive}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
