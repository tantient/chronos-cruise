import { createFileRoute } from "@tanstack/react-router";

import { CabinsPage } from "@/components/cabins/CabinsPage";
import heroAsset from "@/assets/gallery/chronos-suite-01.jpg";

const SITE_URL = "https://id-preview--aaae7898-8e56-433d-9dbd-cdc3c97aac11.lovable.app";
const TITLE = "Phòng nghỉ Chronos Cruise | Suite & cabin hướng vịnh";
const DESC =
  "44 phòng nghỉ hướng biển trên Chronos Cruise: Owner's Suite, Grand Suite và Junior Suite - thiết kế hướng vịnh, tiện nghi 6 sao trên vịnh Hạ Long.";

export const Route = createFileRoute("/cabins/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}${heroAsset}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}${heroAsset}` },
    ],
  }),
  component: CabinsPage,
});
