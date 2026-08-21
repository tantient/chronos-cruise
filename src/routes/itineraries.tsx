import { createFileRoute } from "@tanstack/react-router";

import { ItinerariesPage } from "@/components/itineraries/ItinerariesPage";
import heroAsset from "@/assets/gallery/zenova-exterior-02.jpg";

const SITE_URL = "https://id-preview--aaae7898-8e56-433d-9dbd-cdc3c97aac11.lovable.app";
const TITLE = "Hải trình Zenova Cruise | 2N1Đ & 3N2Đ Hạ Long - Lan Hạ";
const DESC =
  "Các hải trình du thuyền 6 sao Zenova: 2 ngày 1 đêm, 3 ngày 2 đêm và chuyến đi ngắn ngắm hoàng hôn giữa vịnh Hạ Long - Lan Hạ.";

export const Route = createFileRoute("/itineraries")({
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
  component: ItinerariesPage,
});
