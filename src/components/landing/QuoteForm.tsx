"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Reveal } from "./Reveal";

interface QuoteFormProps {
  t: {
    teaserForm: {
      label: string;
      title: string;
      subtitle: string;
      name: string;
      phone: string;
      email: string;
      date: string;
      message: string;
      submit: string;
      success: string;
    };
  };
}

export function QuoteForm({ t }: QuoteFormProps) {
  const tr = t.teaserForm;
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(tr.success);
    setValues({ name: "", phone: "", email: "", date: "", message: "" });
  };

  return (
    <section id="quote" className="section-cream py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <p className="eyebrow mb-6 justify-center text-zenova-gold-ink">{tr.label}</p>
          <h2 className="mb-4 text-5xl font-light tracking-[0.01em] text-zenova-ink sm:text-6xl md:text-7xl">
            {tr.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="font-display italic text-zenova-gold-ink">
              {tr.title.split(" ").slice(-1)}
            </span>
          </h2>
          <p className="text-sm uppercase tracking-[0.2em] text-zenova-ink/70">{tr.subtitle}</p>
        </Reveal>

        <Reveal
          as="form"
          onSubmit={handleSubmit}
          className="mx-auto w-full"
        >
          <div className="grid gap-12 sm:grid-cols-2">
            <div className="space-y-8">
              <div className="border-b border-zenova-ink/10 pb-4">
                <Label htmlFor="quote-name" className="text-xs uppercase tracking-[0.24em] text-zenova-ink/70">
                  {tr.name}
                </Label>
                <Input
                  id="quote-name"
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  required
                  className="field-underline h-12 border-zenova-ink/10 text-lg text-zenova-ink placeholder:text-zenova-ink/20 focus:border-zenova-gold"
                />
              </div>
              <div className="border-b border-zenova-ink/10 pb-4">
                <Label htmlFor="quote-email" className="text-xs uppercase tracking-[0.24em] text-zenova-ink/70">
                  {tr.email}
                </Label>
                <Input
                  id="quote-email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  className="field-underline h-12 border-zenova-ink/10 text-lg text-zenova-ink placeholder:text-zenova-ink/20 focus:border-zenova-gold"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-b border-zenova-ink/10 pb-4">
                <Label htmlFor="quote-date" className="text-xs uppercase tracking-[0.24em] text-zenova-ink/70">
                  {tr.date}
                </Label>
                <Input
                  id="quote-date"
                  type="date"
                  value={values.date}
                  onChange={(e) => setValues((v) => ({ ...v, date: e.target.value }))}
                  className="field-underline h-12 border-zenova-ink/10 text-lg text-zenova-ink placeholder:text-zenova-ink/20 focus:border-zenova-gold"
                />
              </div>
              <Button
                type="submit"
                className="btn-sheen group h-14 w-full rounded-none bg-zenova-ink px-8 text-xs font-semibold uppercase tracking-[0.2em] text-zenova-ivory hover:bg-zenova-gold hover:text-zenova-ink"
              >
                <span className="relative z-10 flex w-full items-center justify-between">
                  {tr.submit}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>

          <div className="mt-12 border-b border-zenova-ink/10 pb-4">
            <Label htmlFor="quote-message" className="text-xs uppercase tracking-[0.24em] text-zenova-ink/70">
              {tr.message}
            </Label>
            <Textarea
              id="quote-message"
              rows={3}
              value={values.message}
              onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
              className="field-underline border-zenova-ink/10 text-lg text-zenova-ink placeholder:text-zenova-ink/20 focus:border-zenova-gold"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
