"use client";

import type { Meeting } from "@/i18n/translations";
import { AnimatePresence, motion } from "@/lib/motion";
import { useState } from "react";

type MeetingCardProps = {
  meeting: Meeting;
  toolLabel: string;
  resultLabel: string;
};

export function MeetingCard({
  meeting,
  toolLabel,
  resultLabel,
}: MeetingCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      onClick={() => setIsOpen((prev) => !prev)}
      animate={{
        backgroundColor: isOpen ? "#ffffff" : "#000000",
        color: isOpen ? "#000000" : "#ffffff",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="cursor-pointer border border-white/20 p-6 transition-colors hover:border-gray-500 md:p-8"
      aria-expanded={isOpen}
    >
      <h3 className="text-lg font-semibold leading-snug md:text-xl">
        {meeting.title}
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6 text-sm leading-relaxed text-black md:text-base">
              <p className="mb-4 text-gray-600">{meeting.intro}</p>

              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                {meeting.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <p className="mb-3">
                <span className="font-semibold">{toolLabel} </span>
                {meeting.tool}
              </p>

              <p>
                <span className="font-semibold">{resultLabel} </span>
                {meeting.result}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
