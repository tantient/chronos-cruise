import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/about/AboutPage";
import heroAsset from "@/assets/gallery/zenova-exterior-01.jpg";

const SITE_URL = "https://id-preview--aaae7898-8e56-433d-9dbd-cdc3c97aac11.lovable.app";
const TITLE = "Giới thiệu Zenova Cruise | Du thuyền 6 sao Hạ Long - Lan Hạ";
const DESC =
  "Tìm hiểu về Zenova Cruise: tinh thần phục vụ, giá trị cốt lõi và trải nghiệm nghỉ dưỡng 6 sao giữa vịnh Hạ Long - Lan Hạ.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});
