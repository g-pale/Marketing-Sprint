"use client";

import { Header } from "@/components/Header";
import { MeetingCard } from "@/components/MeetingCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations, type Meeting } from "@/i18n/translations";
import { motion } from "@/lib/motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToMeetings = () => {
    document.getElementById("meetings")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section
        id="hero"
        aria-label="Hero"
        className="flex flex-col items-center px-6 pt-32 pb-16 text-center md:px-12 md:pt-48 md:pb-24"
      >
        <motion.div
          key={`${language}-title`}
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0 }}
          className="mb-6 text-6xl font-bold tracking-tighter text-white md:text-8xl"
        >
          {t.heroTitle}
        </motion.div>

        <motion.p
          key={`${language}-subtitle`}
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 max-w-3xl text-xl font-medium text-gray-300 md:text-3xl"
        >
          {t.heroSubtitle}
        </motion.p>

        <motion.p
          key={`${language}-description`}
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 max-w-4xl text-base leading-relaxed text-gray-500 md:text-lg"
        >
          {t.heroDescription}
        </motion.p>

        <motion.div
          key={`${language}-button`}
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            type="button"
            onClick={scrollToMeetings}
            className="rounded-full bg-white px-8 py-4 font-semibold text-black transition-colors hover:bg-gray-200"
          >
            {t.heroButton}
          </button>
        </motion.div>
      </section>

      <section
        id="meetings"
        aria-label="Meetings"
        className="px-6 py-16 md:px-12 md:py-24"
      >
        <MeetingsBlock
          language={language}
          title={t.block1Title}
          goal={t.block1Goal}
          toolLabel={t.toolLabel}
          resultLabel={t.resultLabel}
          meetings={t.meetings.filter((m) => m.block === 1)}
        />

        <MeetingsBlock
          language={language}
          title={t.block2Title}
          goal={t.block2Goal}
          toolLabel={t.toolLabel}
          resultLabel={t.resultLabel}
          meetings={t.meetings.filter((m) => m.block === 2)}
          className="mt-20 md:mt-28"
        />
      </section>

      <section
        id="target-audience"
        aria-label="Target audience"
        className="px-6 py-16 md:px-12 md:py-24"
      >
        <div key={language} className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-2xl font-bold text-white md:mb-12 md:text-3xl">
            {t.audienceTitle}
          </h2>

          <h3 className="mb-4 text-lg font-semibold text-white md:text-xl">
            {t.audienceFoundersTitle}
          </h3>
          <ul className="mb-10 list-inside list-disc space-y-3 text-gray-400 md:mb-12">
            {t.audienceFoundersPoints.map((point) => (
              <li key={point} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>

          <h3 className="mb-4 text-lg font-semibold text-white md:text-xl">
            {t.audienceMarketersTitle}
          </h3>
          <p className="leading-relaxed text-gray-400">
            {t.audienceMarketersText}
          </p>
        </div>
      </section>

      <section
        id="expectations"
        aria-label="Expectations"
        className="px-6 py-16 md:px-12 md:py-24"
      >
        <div key={language} className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold text-white md:mb-10 md:text-3xl">
            {t.expectationsTitle}
          </h2>
          <div className="space-y-6">
            {t.expectationsText.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-gray-400">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-10 leading-relaxed text-gray-400 md:mt-12">
            {t.formatText}
          </p>
        </div>
      </section>

      <footer
        id="footer"
        className="border-t border-gray-800 px-6 py-10 md:px-12"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {t.footerBrand}
          </p>
          <nav
            className="flex items-center gap-6"
            aria-label="Social links"
          >
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {t.footerLinks.telegram}
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {t.footerLinks.linkedin}
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

function MeetingsBlock({
  language,
  title,
  goal,
  toolLabel,
  resultLabel,
  meetings,
  className = "",
}: {
  language: string;
  title: string;
  goal: string;
  toolLabel: string;
  resultLabel: string;
  meetings: Meeting[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h2
        key={`${language}-block-title-${title}`}
        className="mb-3 text-sm font-bold tracking-widest text-white md:text-base"
      >
        {title}
      </h2>
      <p
        key={`${language}-block-goal-${title}`}
        className="mb-10 max-w-3xl text-gray-400 md:mb-12"
      >
        {goal}
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard
            key={`${language}-${meeting.id}`}
            meeting={meeting}
            toolLabel={toolLabel}
            resultLabel={resultLabel}
          />
        ))}
      </div>
    </div>
  );
}
