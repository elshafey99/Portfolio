import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All standard crawlers
      { userAgent: "*", allow: "/" },

      // OpenAI — ChatGPT browsing & training
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },

      // Anthropic — Claude
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },

      // Google — Search + Gemini + AI Overviews
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },

      // Perplexity AI
      { userAgent: "PerplexityBot", allow: "/" },

      // Meta AI
      { userAgent: "FacebookBot", allow: "/" },

      // Microsoft — Bing + Copilot
      { userAgent: "Bingbot", allow: "/" },

      // Apple
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },

      // Amazon / Alexa
      { userAgent: "Amazonbot", allow: "/" },

      // Cohere AI
      { userAgent: "cohere-ai", allow: "/" },

      // ByteDance / Doubao
      { userAgent: "Bytespider", allow: "/" },

      // Common Crawl (feeds LLM training datasets)
      { userAgent: "CCBot", allow: "/" },

      // You.com AI search
      { userAgent: "YouBot", allow: "/" },
    ],
    sitemap: "https://mohamed-elshafey.vercel.app/sitemap.xml",
  };
}
