"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { jobPositions } from "@/components/careers/careers-data";
import type { Lang } from "@/lib/translations";

import { Reveal } from "./Reveal";
import recruitImage from "@/assets/gallery/zenova-public-reception.jpg";

interface RecruitTeaserProps {
  lang: Lang;
  t: {
    recruitTeaser: {
      label: string;
      title: string;
      subtitle: string;
      name: string;
      contact: string;
      position: string;
      positionPlaceholder: string;
      submit: string;
      success: string;
      viewAll: string;
    };
  };
}

const applicationSchema = z.object({
  name: z.string().trim().min(1).max(100),
  contact: z.string().trim().min(3).max(255),
  position: z.string().trim().min(1).max(64),
});

export function RecruitTeaser({ lang, t }: RecruitTeaserProps) {
  const tr = t.recruitTeaser;
  const vi = lang === "vi";
  const [values, setValues] = useState({ name: "", contact: "", position: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = applicationSchema.safeParse(values);
    if (!parsed.success) {
      toast.error(vi ? "Vui lòng điền đầy đủ thông tin hợp lệ." : "Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("job_applications").insert({
      full_name: parsed.data.name,
      contact: parsed.data.contact,
      position_id: parsed.data.position,
    });
    setSubmitting(false);
    if (error) {
      toast.error(vi ? "Gửi hồ sơ thất bại, vui lòng thử lại." : "Submission failed, please try again.");
      return;
    }
    toast.success(tr.success);
    setValues({ name: "", contact: "", position: "" });
  };

  return (
    <section id="recruit" className="section-cream py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 translate-x-4 translate-y-4 border border-zenova-gold/40" />
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={recruitImage}
                  alt="Zenova Cruise reception and hospitality team"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="space-y-8">
              <p className="eyebrow text-zenova-gold-ink">{tr.label}</p>
              <h2 className="font-display text-4xl font-light leading-tight text-zenova-ink md:text-5xl">
                {tr.title}
              </h2>
              <p className="leading-loose text-zenova-ink/65">{tr.subtitle}</p>

              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="recruit-name"
                    className="text-xs uppercase tracking-[0.24em] text-zenova-ink/70"
                  >
                    {tr.name}
                  </Label>
                  <Input
                    id="recruit-name"
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                    required
                    className="field-underline h-10 border-zenova-ink/20 text-zenova-ink transition-colors placeholder:text-zenova-ink/30 focus:border-zenova-gold"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="recruit-contact"
                    className="text-xs uppercase tracking-[0.24em] text-zenova-ink/70"
                  >
                    {tr.contact}
                  </Label>
                  <Input
                    id="recruit-contact"
                    value={values.contact}
                    onChange={(e) => setValues((v) => ({ ...v, contact: e.target.value }))}
                    required
                    className="field-underline h-10 border-zenova-ink/20 text-zenova-ink transition-colors placeholder:text-zenova-ink/30 focus:border-zenova-gold"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="recruit-position"
                    className="text-xs uppercase tracking-[0.24em] text-zenova-ink/70"
                  >
                    {tr.position}
                  </Label>
                  <select
                    id="recruit-position"
                    value={values.position}
                    onChange={(e) => setValues((v) => ({ ...v, position: e.target.value }))}
                    required
                    className="field-underline h-10 w-full border-zenova-ink/20 bg-transparent text-sm text-zenova-ink transition-colors focus:border-zenova-gold focus:outline-none"
                  >
                    <option value="" disabled>
                      {tr.positionPlaceholder}
                    </option>
                    {jobPositions.map((job) => (
                      <option key={job.id} value={job.id}>
                        {vi ? job.titleVi : job.titleEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col items-center gap-5 pt-4 sm:flex-row sm:justify-between">
                  <Button
                    type="submit"
                    disabled={submitting}
                    size="lg"
                    className="btn-sheen w-full rounded-none bg-zenova-ink px-8 text-xs font-semibold uppercase tracking-[0.2em] text-zenova-ivory hover:bg-zenova-gold hover:text-zenova-ink sm:w-auto"
                  >
                    {submitting ? "..." : tr.submit}
                  </Button>
                  <Link
                    to="/careers"
                    className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zenova-ink/70 transition-colors hover:text-zenova-gold-ink"
                  >
                    {tr.viewAll}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
