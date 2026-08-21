import { createFileRoute } from "@tanstack/react-router";

import { CareersPage } from "@/components/careers/CareersPage";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Chronos Cruise" },
      { name: "description", content: "Join the Chronos Cruise team. Explore open positions and contact us directly via Zalo or email." },
      { property: "og:title", content: "Careers — Chronos Cruise" },
      { property: "og:description", content: "Join the Chronos Cruise team. Explore open positions and contact us directly via Zalo or email." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareersPage,
});
