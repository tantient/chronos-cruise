import { createFileRoute } from "@tanstack/react-router";

import { AdminApplicationsPage } from "@/components/admin/AdminApplicationsPage";

export const Route = createFileRoute("/_authenticated/admin/applications")({
  head: () => ({
    meta: [
      { title: "Hồ sơ ứng tuyển — Quản trị Zenova" },
      {
        name: "description",
        content: "Danh sách hồ sơ ứng tuyển gửi từ website Zenova Cruise, dành cho quản trị viên.",
      },
      { property: "og:title", content: "Hồ sơ ứng tuyển — Quản trị Zenova" },
      {
        property: "og:description",
        content: "Danh sách hồ sơ ứng tuyển gửi từ website Zenova Cruise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminApplicationsPage,
});
