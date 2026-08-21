import stackedSrc from "@/assets/logo/chronos-stacked.png";
import stackedPlainSrc from "@/assets/logo/chronos-stacked-plain.png";
import markSrc from "@/assets/logo/chronos-mark.png";
import wordmarkSrc from "@/assets/logo/chronos-wordmark.png";
import wordmarkPlainSrc from "@/assets/logo/chronos-wordmark-plain.png";

type LogoVariant = "inline" | "stacked";
type LogoSize = "sm" | "md" | "lg";

interface ChronosLogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  /** stacked = khối trên, chữ dưới | inline = khối bên trái, chữ bên phải */
  variant?: LogoVariant;
  showTagline?: boolean;
  /** Kích thước chuẩn, tự co giãn theo breakpoint. Bỏ qua nếu tự truyền class h-* */
  size?: LogoSize;
}

const RATIO = {
  stacked: 1748 / 1200,
  stackedPlain: 1748 / 1090,
  mark: 1621 / 1200,
  wordmark: 6906 / 1200,
  wordmarkPlain: 6906 / 766,
};

/** Chiều cao chuẩn (mobile → desktop) cho từng biến thể. */
const SIZE_CLASSES: Record<LogoVariant, Record<LogoSize, string>> = {
  inline: {
    sm: "h-6 sm:h-7",
    md: "h-7 sm:h-8 lg:h-9",
    lg: "h-9 sm:h-10 lg:h-12",
  },
  stacked: {
    sm: "h-14 sm:h-16",
    md: "h-16 sm:h-20 lg:h-24",
    lg: "h-20 sm:h-24 lg:h-28",
  },
};

/** Mask hoá logo gốc để tự đổi màu theo currentColor. */
function maskStyle(src: string, ratio: number): React.CSSProperties {
  return {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    backgroundColor: "currentColor",
    aspectRatio: `${ratio}`,
    width: "auto",
    flex: "none",
  };
}

export function ChronosLogo({
  className,
  variant = "inline",
  showTagline = true,
  size = "md",
  tone = "auto",
  ...rest
}: ChronosLogoProps) {
  const hasCustomHeight = /(^|\s)(h-|max-h-)/.test(className ?? "");
  const hasCustomColor = /(^|\s)text-/.test(className ?? "");
  const sizeClass = hasCustomHeight ? "" : SIZE_CLASSES[variant][size];
  const toneClass = hasCustomColor ? "" : TONE_CLASSES[tone];
  const base = `inline-flex max-w-full shrink-0 select-none items-center align-middle transition-colors duration-300 ${sizeClass} ${toneClass}`;

  if (variant === "stacked") {
    const src = showTagline ? stackedSrc : stackedPlainSrc;
    const ratio = showTagline ? RATIO.stacked : RATIO.stackedPlain;
    return (
      <span
        className={`${base} justify-center ${className ?? ""}`}
        role="img"
        {...rest}
      >
        <span className="h-full" style={maskStyle(src, ratio)} />
      </span>
    );
  }

  const wordSrc = showTagline ? wordmarkSrc : wordmarkPlainSrc;
  const wordRatio = showTagline ? RATIO.wordmark : RATIO.wordmarkPlain;

  return (
    <span
      className={`${base} gap-[0.45em] ${className ?? ""}`}
      role="img"
      {...rest}
    >
      <span className="h-full" style={maskStyle(markSrc, RATIO.mark)} />
      <span className="h-[62%]" style={maskStyle(wordSrc, wordRatio)} />
    </span>
  );
}
