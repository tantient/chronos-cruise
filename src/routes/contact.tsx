import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/contact/ContactPage";
import heroAsset from "@/assets/gallery/zenova-exterior-01.jpg";

const SITE_URL = "https://id-preview--aaae7898-8e56-433d-9dbd-cdc3c97aac11.lovable.app";
const TITLE = "Liên hệ Zenova Cruise | Hotline, Zalo & bản đồ bến tàu Hạ Long";
const DESC =
  "Liên hệ Zenova Cruise: hotline, Zalo, email đặt phòng và bản đồ vị trí bến tàu tại Cảng tàu khách quốc tế Hạ Long. Gửi tin nhắn để được tư vấn trong 24 giờ.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});
