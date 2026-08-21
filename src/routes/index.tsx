import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/landing/LandingPage";
import heroAsset from "@/assets/zenova-hero.jpg";

const SITE_URL = "https://id-preview--67e85459-3f1f-495d-9299-f47f73a8c85d.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenova Cruise | Sắp ra mắt - Du thuyền 6 sao Hạ Long - Lan Hạ" },
      {
        name: "description",
        content:
          "Zenova Cruise sắp ra mắt. Đăng ký để là người đầu tiên nhận thông tin về trải nghiệm du thuyền 6 sao tại vịnh Hạ Long và Lan Hạ.",
      },
      { property: "og:title", content: "Zenova Cruise | Sắp ra mắt - Du thuyền 6 sao Hạ Long - Lan Hạ" },
      {
        property: "og:description",
        content:
          "Zenova Cruise sắp ra mắt. Đăng ký để nhận thông tin và ưu đãi đầu tiên.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}${heroAsset}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}${heroAsset}` },
    ],
  }),
  component: LandingPage,
});
