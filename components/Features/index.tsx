"use client"
import { HoverEffect } from "../ui/card-hover-effect";

export function Feature() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Dashboard",
    description:
      "DEEZ NUTS",
    link: "/dashboard",
  },
 
];
