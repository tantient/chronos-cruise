import { createFileRoute } from "@tanstack/react-router";

import { OffersPage } from "@/components/offers/OffersPage";
import heroAsset from "@/assets/gallery/chronos-public-pool.jpg";

const SITE_URL = "https://id-preview--aaae7898-8e56-433d-9dbd-cdc3c97aac11.lovable.app";
const TITLE = "Ưu đãi Chronos Cruise | Gói nghỉ dưỡng & khuyến mãi du thuyền Hạ Long";
const DESC =
  "Các ưu đãi và gói đặc biệt trên Chronos Cruise: giảm giá mùa thấp điểm, ưu đãi gia đình, gói trăng mật và combo nghỉ dưỡng giữa vịnh Hạ Long.";

export const Route = createFileRoute("/offers")({
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
  component: OffersPage,
});
