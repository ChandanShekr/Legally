import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";


export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Emily Johnson",
    designation: "CEO @TechSolutions Inc.",
    image: image1,
    content:
      "Lumiora's custom chat bots transformed our customer engagement strategies. Their seamless integration with our systems has significantly boosted our productivity.",
  },
  {
    id: 2,
    name: "Alex Parker",
    designation: "Founder @Innovate Hub",
    image: image2,
    content:
      "We relied on Lumiora's zero latency call handling for our customer service operations. Their AI assistants are indistinguishable from humans and have exceeded our expectations.",
  },
];
