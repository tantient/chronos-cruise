import { createFileRoute, notFound } from "@tanstack/react-router";

import { CabinDetailPage } from "@/components/cabins/CabinDetailPage";
import { cabinTypes } from "@/components/cabins/cabins-data";

const SITE_URL = "https://id-preview--aaae7898-8e56-433d-9dbd-cdc3c97aac11.lovable.app";

export const Route = createFileRoute("/cabins/$cabinId")({
  loader: ({ params }) => {
    const cabin = cabinTypes.find((c: { id: string }) => c.id === params.cabinId);
    if (!cabin) throw notFound();
    return { cabin };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { cabin } = loaderData;
    const title = `${cabin.nameEn} | Zenova Cruise`;
    const desc = cabin.descEn.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:image", content: `${SITE_URL}${cabin.hero}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${SITE_URL}${cabin.hero}` },
      ],
    };
  },
  component: CabinDetailRoute,
});

function CabinDetailRoute() {
  const { cabin } = Route.useLoaderData();
  return <CabinDetailPage cabin={cabin} />;
}
