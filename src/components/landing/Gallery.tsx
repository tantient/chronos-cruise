import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import gallerySuite from "@/assets/gallery/zenova-suite-02.jpg";
import galleryDining from "@/assets/gallery/zenova-dining-panorama-01.jpg";
import gallerySundeck from "@/assets/gallery/zenova-public-pool.jpg";

import { Reveal } from "./Reveal";

interface GalleryProps {
  t: {
    teaserGallery: {
      label: string;
      title: string;
      subtitle: string;
      captions: string[];
      asideTitle: string;
      asideBody: string;
      asideCta: string;
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
    <section id="gallery" className="overflow-hidden bg-zenova-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <Reveal className="max-w-xl">
            <p className="eyebrow mb-6 text-zenova-gold-ink">{tr.label}</p>
            <h2 className="mb-6 text-4xl font-light tracking-[0.01em] text-zenova-ink sm:text-5xl md:text-6xl">
              {tr.title}
            </h2>
            <p className="leading-loose text-zenova-ink/75">{tr.subtitle}</p>
          </Reveal>
          <Reveal className="text-right">
            <span className="font-display text-5xl italic text-zenova-gold-ink opacity-40 md:text-7xl">
              {tr.label}
            </span>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="group relative aspect-[4/5] overflow-hidden bg-zenova-warm">
              <img
                src={main.src}
                alt={main.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zenova-ink/85 via-zenova-ink/35 to-transparent" />
              <div className="absolute bottom-8 left-8 text-zenova-ivory">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-zenova-gold drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)]">
                  {tr.captions[0]}
                </p>
                <p className="font-display text-2xl italic">Celestial Suites</p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8 md:col-span-5">
            {side.map((img, i) => (
              <Reveal key={img.alt} delay={140 * (i + 1)} className="flex-1">
                <div className="group relative h-full min-h-[16rem] overflow-hidden bg-zenova-warm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zenova-ink/85 via-zenova-ink/30 to-transparent" />
                  <p className="pointer-events-none absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.24em] text-zenova-ivory drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)]">
                    {tr.captions[i + 1]}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={360}>
              <div className="flex flex-col justify-center border border-zenova-gold/35 bg-zenova-warm/60 p-10">
                <h3 className="mb-4 font-display text-2xl italic text-zenova-ink">
                  {tr.asideTitle}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-zenova-ink/65">
                  {tr.asideBody}
                </p>
                <Link
                  to="/careers"
                  className="group inline-flex items-center text-xs uppercase tracking-[0.3em] text-zenova-ink transition-colors hover:text-zenova-gold-ink"
                >
                  {tr.asideCta}
                  <ArrowRight className="ml-4 h-3.5 w-3.5 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
