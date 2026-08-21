import { createFileRoute } from "@tanstack/react-router";

import { GalleryPage } from "@/components/gallery/GalleryPage";
import heroAsset from "@/assets/gallery/chronos-exterior-01.jpg";

const SITE_URL = "https://id-preview--aaae7898-8e56-433d-9dbd-cdc3c97aac11.lovable.app";
const TITLE = "Thư viện ảnh Chronos Cruise | Không gian du thuyền 6 sao";
const DESC =
  "Khám phá toàn bộ không gian Chronos Cruise: ngoại thất, nhà hàng, khu giải trí, spa và phòng nghỉ hướng vịnh Hạ Long - Lan Hạ.";

export const Route = createFileRoute("/gallery")({
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
  component: GalleryPage,
});
