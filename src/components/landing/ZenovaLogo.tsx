interface ZenovaLogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  /** stacked = mark trên, chữ dưới (footer) | inline = mark bên trái (header) */
  variant?: "inline" | "stacked";
  showTagline?: boolean;
}

/**
 * Logo Zenova Cruise dựng vector: Hòn Trống (hình thang vuông) + Hòn Mái
 * (tam giác vuông) trên hai vạch thủy ba, ẩn chữ K. Dùng currentColor nên
 * tự đổi màu theo ngữ cảnh.
 */
export function ZenovaLogo({
  className,
  variant = "inline",
  showTagline = true,
  ...rest
}: ZenovaLogoProps) {
  const mark = (
    <svg
      viewBox="0 0 120 104"
      className={variant === "inline" ? "h-full w-auto shrink-0" : "h-[58%] w-auto"}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Hòn Trống: khối thang bo góc, rộng dưới hẹp trên */}
      <path d="M13 4 L59 2 L64 80 L2 80 Z" />
      {/* Hòn Mái: tam giác nghiêng, đỉnh hướng lên phải */}
      <path d="M114 3 L66 25 L93 79 Z" />
      {/* Thủy ba */}
      <path d="M0 89 H120" />
      <path d="M13 100 H105" />
    </svg>
  );

  const wordmark = (
    <span
      className={
        variant === "inline"
          ? "flex flex-col justify-center leading-none"
          : "flex flex-col items-center leading-none"
      }
    >
      <span className="flex items-baseline gap-[0.5em] whitespace-nowrap">
        <span className="font-display text-[1.5em] tracking-[0.16em] leading-none">
          ZENOVA
        </span>
        <span className="font-body text-[0.72em] tracking-[0.34em] leading-none">
          CRUISE
        </span>
      </span>
      {showTagline && (
        <span className="font-body mt-[0.42em] text-[0.44em] tracking-[0.3em] whitespace-nowrap opacity-70">
          HA LONG BAY · LAN HA BAY
        </span>
      )}
    </span>
  );

  if (variant === "stacked") {
    return (
      <span className={`flex flex-col items-center gap-[0.5em] ${className ?? ""}`} {...rest}>
        {mark}
        {wordmark}
      </span>
    );
  }

  return (
    <span className={`flex items-center gap-[0.62em] ${className ?? ""}`} {...rest}>
      {mark}
      {wordmark}
    </span>
  );
}
