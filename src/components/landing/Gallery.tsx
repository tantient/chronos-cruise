import { Link } from "@tanstack/react-router";

import gallerySuite from "@/assets/gallery/zenova-suite-02.jpg";
import galleryDining from "@/assets/gallery/zenova-dining-panorama-01.jpg";
import gallerySundeck from "@/assets/gallery/zenova-public-pool.jpg";

import { Reveal } from "./Reveal";

interface GalleryProps {
  t: {
    teaserGallery: {
      title: string;
      subtitle: string;
      captions: string[];
    };
  };
}

const images = [
  { src: gallerySuite, alt: "Ocean-view suite aboard Zenova Cruise" },
  { src: galleryDining, alt: "Panorama fine-dining restaurant aboard Zenova Cruise" },
  { src: gallerySundeck, alt: "Sundeck and infinity pool aboard Zenova Cruise" },
];

export function Gallery({ t }: GalleryProps) {
  const tr = t.teaserGallery;
  const main = images[0]!;
  const side = [images[1]!, images[2]!];

  return (
    <section id="gallery" className="overflow-hidden bg-zenova-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
          <Reveal>
            <h2 className="mb-6 font-display text-3xl font-normal text-zenova-sand-900 md:text-4xl">
              {tr.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="italic tracking-wide text-zenova-sand-700">{tr.subtitle}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-stretch">
          <Reveal className="md:col-span-7">
            <div className="group relative aspect-[16/9] overflow-hidden shadow-lg md:aspect-auto md:h-full">
              <Link to="/gallery">
                <img
                  src={main.src}
                  alt={main.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zenova-sand-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-zenova-ivory">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-zenova-sand-300 drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)]">
                    {tr.captions[0]}
                  </p>
                </div>
              </Link>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8 md:col-span-5">
            {side.map((img, i) => (
              <Reveal key={img.alt} delay={140 * (i + 1)} className="flex-1">
                <div className="group relative aspect-square overflow-hidden shadow-lg md:aspect-[4/3]">
                  <Link to="/gallery">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zenova-sand-900/60 via-transparent to-transparent" />
                    <p className="pointer-events-none absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.24em] text-zenova-ivory drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)]">
                      {tr.captions[i + 1]}
                    </p>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
