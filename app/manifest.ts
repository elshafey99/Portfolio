import { MetadataRoute } from "next";
import { personalInfo } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} - Backend Developer Portfolio`,
    short_name: "Mohamed",
    description:
      "Backend Developer specialized in Laravel, PHP, and building scalable systems",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1a1a",
    theme_color: "#3776AB",
    icons: [
      {
        src: "/mee1-removebg-preview.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
