"use client";
import { HoverEffect } from "../ui/card-hover-effect";

export function Feature() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={automationServices} />
    </div>
  );
}

export const automationServices = [
  {
    title: "Custom Chat Bots",
    description:
      "Tailored chat bots trained on organization or personal data, enhancing communication and efficiency.",
  },
  {
    title: "Zero Latency Call Handling",
    description:
      "Automated call handling with zero latency, offering seamless customer service and engagement.",
  },
  {
    title: "Seamless Integration",
    description:
      "Effortlessly integrate with other apps for streamlined operations and enhanced functionality.",
  },
];
