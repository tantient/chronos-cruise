"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeroMedia, type HeroSlide } from "./HeroMedia";
import { Reveal } from "./Reveal";
import slide1 from "@/assets/zenova-slide-1.jpg";
import slide2 from "@/assets/zenova-slide-2.jpg";
import slide3 from "@/assets/zenova-slide-3.jpg";
import slide4 from "@/assets/zenova-slide-4.jpg";

interface HeroProps {
  t: {
    hero: {
      tagline: string;
      title: string;
      titleAccent: string;
      subtitle: string;
      cta: string;
      scroll: string;
    };
    earlyAccess: {
      name: string;
      contact: string;
      contactPlaceholder: string;
      submit: string;
      success: string;
      helper: string;
    };
  };
}

const SLIDES: HeroSlide[] = [
  { url: slide1, alt: "Zenova Cruise trên vịnh Hạ Long lúc hoàng hôn" },
  { url: slide2, alt: "Toàn cảnh du thuyền Zenova Cruise giữa vịnh" },
  { url: slide3, alt: "Zenova Cruise nhìn từ trên cao" },
  { url: slide4, alt: "Sảnh đón khách và hồ bơi vô cực trên tàu" },
];

export function Hero({ t }: HeroProps) {
  const [values, setValues] = useState({ name: "", contact: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.name.trim() || !values.contact.trim()) return;
    toast.success(t.earlyAccess.success);
    setSubmitted(true);
    setValues({ name: "", contact: "" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <HeroMedia slides={SLIDES} intervalMs={7000} />
      <div className="pointer-events-none absolute inset-0 hero-overlay-deep" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 78% 58% at 50% 54%, rgba(8,14,26,0.80) 0%, rgba(8,14,26,0.62) 45%, rgba(8,14,26,0.18) 75%, transparent 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 26%, rgba(8,14,26,0.62) 44%, rgba(8,14,26,0.60) 74%, transparent 90%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center lg:px-8">
        <Reveal immediate delay={100}>
          <p className="eyebrow mb-8 justify-center text-zenova-gold-light drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
            {t.hero.tagline}
          </p>
        </Reveal>
        <Reveal immediate delay={260}>
          <h1 className="mb-8 text-6xl leading-[0.95] tracking-tighter text-zenova-ivory text-glow sm:text-7xl md:text-8xl lg:text-9xl">
            {t.hero.title}{" "}
            <span className="font-display italic text-zenova-gold-light">
              {t.hero.titleAccent}
            </span>
          </h1>
        </Reveal>
        <Reveal immediate delay={420}>
          <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-relaxed text-zenova-ivory sm:text-lg drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)]">
            {t.hero.subtitle}
          </p>
        </Reveal>

        {!submitted ? (
          <Reveal
            immediate
            delay={580}
            as="form"
            onSubmit={handleSubmit}
            className="mx-auto max-w-md"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-zenova-gold/20 to-transparent blur-sm" />
              <div className="relative flex flex-col gap-0 overflow-hidden border border-gold-subtle bg-zenova-ink/60 backdrop-blur-md md:flex-row">
                <div className="flex-1">
                  <Label htmlFor="early-contact" className="sr-only">
                    {t.earlyAccess.contact}
                  </Label>
                  <Input
                    id="early-contact"
                    value={values.contact}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, contact: e.target.value }))
                    }
                    placeholder={t.earlyAccess.contact}
                    required
                    className="h-14 rounded-none border-0 border-b border-gold-subtle bg-transparent px-6 text-sm text-zenova-ivory placeholder:font-light placeholder:text-zenova-ivory/85 focus:bg-zenova-gold/5 focus-visible:ring-0 focus-visible:ring-offset-0 md:border-b-0 md:border-r"
                  />
                </div>
                <Button
                  type="submit"
                  className="btn-sheen h-14 rounded-none bg-zenova-gold-light px-8 text-xs font-semibold uppercase tracking-[0.2em] text-zenova-ink hover:bg-zenova-ivory"
                >
                  {t.hero.cta}
                </Button>
              </div>
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.24em] text-zenova-ivory/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
              {t.earlyAccess.helper}
            </p>
          </Reveal>
        ) : (
          <Reveal
            immediate
            delay={200}
            className="mx-auto max-w-md rounded-sm border border-zenova-gold/30 bg-zenova-ivory/10 p-6 backdrop-blur-sm"
          >
            <p className="text-zenova-ivory">{t.earlyAccess.success}</p>
          </Reveal>
        )}
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4">
        <span className="text-xs uppercase tracking-[0.3em] text-zenova-ivory/85 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
          {t.hero.scroll}
        </span>
        <span className="h-16 w-px bg-gradient-to-b from-zenova-gold-light to-transparent" />
      </div>
    </section>
  );
}
