import stackedSrc from "@/assets/logo/chronos-stacked.png";
import stackedPlainSrc from "@/assets/logo/chronos-stacked-plain.png";
import markSrc from "@/assets/logo/chronos-mark.png";
import wordmarkSrc from "@/assets/logo/chronos-wordmark.png";
import wordmarkPlainSrc from "@/assets/logo/chronos-wordmark-plain.png";

interface ChronosLogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  /** stacked = khối trên, chữ dưới | inline = khối bên trái, chữ bên phải */
  variant?: "inline" | "stacked";
  showTagline?: boolean;
}

const RATIO = {
  stacked: 1748 / 1200,
  stackedPlain: 1748 / 1090,
  mark: 1621 / 1200,
  wordmark: 6906 / 1200,
  wordmarkPlain: 6906 / 766,
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
  };
}

export function ChronosLogo({
  className,
  variant = "inline",
  showTagline = true,
  ...rest
}: ChronosLogoProps) {
  if (variant === "stacked") {
    const src = showTagline ? stackedSrc : stackedPlainSrc;
    const ratio = showTagline ? RATIO.stacked : RATIO.stackedPlain;
    return (
      <span className={`inline-flex ${className ?? ""}`} {...rest}>
        <span className="h-full" style={maskStyle(src, ratio)} />
      </span>
    );
  }

  const wordSrc = showTagline ? wordmarkSrc : wordmarkPlainSrc;
  const wordRatio = showTagline ? RATIO.wordmark : RATIO.wordmarkPlain;

  return (
    <span className={`inline-flex items-center gap-[0.5em] ${className ?? ""}`} {...rest}>
      <span className="h-full" style={maskStyle(markSrc, RATIO.mark)} />
      <span className="h-[62%]" style={maskStyle(wordSrc, wordRatio)} />
    </span>
  );
}
