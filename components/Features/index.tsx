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
    title: "24/7 Availability",
    description:
      "The AI chatbots are operational round the clock, handling your calls beyond office hours.",
  },
  {
    title: "Error-Free Data Handling",
    description:
      "Custom trained on your business data, the AI bots gather and store accurate user information.",
  },
  {
    title: "Tailored Solutions",
    description:
      "The bots are designed specifically according to your business needs, making them unique to your call handling requirements.",
  },
  {
    title: "Superior Customer Service",
    description:
      "The AI bots answer calls promptly and book appointments seamlessly, increasing the overall customer satisfaction.",
  },
  {
    title: "Cost Efficiency",
    description:
      "By handling the call management, the AI bots reduce the need for a larger in-house team and save costs.",
  },
  {
    title: "Increased Productivity",
    description:
      "As the bots efficiently handle calls, your staff can focus on other important tasks, resulting in increased productivity.",
  },
  {
    title: "Retention and Loyalty",
    description:
      "By addressing customer queries instantly and accurately, customer retention and loyalty are improved.",
  },
  {
    title: "Prompt and Precise",
    description:
      "The sophisticated AI technology ensures a fast and precise response on every call.",
  },
  {
    title: "Scalability",
    description:
      "As your business grows, the AI chatbots can be easily upgraded to handle increased call volumes.",
  },
  {
    title: "Enhanced Information Security",
    description:
      "The AI bots adhere to strict security protocols to safeguard all customer information.",
  },
  {
    title: "Analytics and Reports",
    description:
      "The AI chatbots provide valuable insights from call data analytics which can be used in strategical decision-making.",
  },
];
