"use client";

import { useState } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { LayoutZone } from "./cabins-data";

interface DeckPlanProps {
  zones: LayoutZone[];
  vi: boolean;
  /** Ghi chú chung hiển thị khi chưa chọn khu vực nào */
  hint: string;
}

export function DeckPlan({ zones, vi, hint }: DeckPlanProps) {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? zones[activeIndex] : undefined;

  const label = (z: LayoutZone) => (vi ? z.labelVi : z.labelEn);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      <div>
        <div className="relative aspect-[4/3] w-full touch-manipulation rounded-sm border border-zenova-ink/15 bg-zenova-ink/[0.04] p-2">
          {zones.map((z, i) => {
            const isActive = activeIndex === i;
            const button = (
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className={cn(
                  "absolute flex select-none items-center justify-center rounded-sm border p-2 text-center transition-colors",
                  isActive
                    ? "border-zenova-gold bg-zenova-gold/25"
                    : "border-zenova-gold/40 bg-zenova-gold/10 hover:bg-zenova-gold/20",
                )}
                style={{
                  left: `${z.x}%`,
                  top: `${z.y}%`,
                  width: `${z.w}%`,
                  height: `${z.h}%`,
                }}
              >
                <span className="line-clamp-3 text-xs uppercase leading-tight tracking-[0.18em] text-zenova-ink">
                  {label(z)}
                </span>
              </button>
            );

            // Trên mobile không dùng tooltip nổi (dễ che nội dung) — thông tin
            // hiển thị ở khối bên dưới sơ đồ.
            if (isMobile) return <span key={z.labelEn}>{button}</span>;

            return (
              <Tooltip key={z.labelEn}>
                <TooltipTrigger asChild>{button}</TooltipTrigger>
                <TooltipContent
                  side="top"
                  collisionPadding={16}
                  className="max-w-[min(18rem,calc(100vw-2rem))]"
                >
                  {label(z)}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        <div
          aria-live="polite"
          className="mt-3 min-h-14 rounded-sm border border-zenova-ink/10 bg-zenova-ink/[0.03] px-4 py-3"
        >
          {active ? (
            <>
              <p className="text-xs uppercase tracking-[0.24em] text-zenova-gold">
                {vi ? "KHU VỰC" : "AREA"}
              </p>
              <p className="mt-1 text-sm text-zenova-ink">{label(active)}</p>
            </>
          ) : (
            <p className="text-sm text-zenova-stone/75">
              {vi
                ? "Chạm vào từng khu vực trên sơ đồ để xem tên khu vực."
                : "Tap any area on the plan to see its name."}
            </p>
          )}
        </div>
      </div>

      <p className="text-sm text-zenova-stone/80">{hint}</p>
    </div>
  );
}

export function DeckPlanProvider({ children }: { children: React.ReactNode }) {
  return <TooltipProvider delayDuration={150}>{children}</TooltipProvider>;
}
