type BrandLogoProps = {
  tone?: "dark" | "light";
  compact?: boolean;
  fullLogo?: boolean;
};

export default function BrandLogo({ tone = "dark", compact = false, fullLogo = false }: BrandLogoProps) {
  const isLight = tone === "light";

  if (fullLogo) {
    return (
      <span className="flex items-center gap-3">
        <img
          src="/images/law-arena-logo.png"
          alt=""
          aria-hidden="true"
          className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
        />
        <span className="leading-none">
          <span
            className={`block font-serif text-[16px] font-bold uppercase tracking-[0.14em] ${
              isLight ? "text-white" : "text-black"
            } sm:text-[18px] lg:text-[20px] lg:tracking-[0.18em]`}
          >
            Law Arena
          </span>
          <span
            className={`mt-1 block text-[8px] font-bold uppercase tracking-[0.42em] ${
              isLight ? "text-gray-500" : "text-gray-400"
            } sm:text-[9px] lg:tracking-[0.55em]`}
          >
            Associates
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className="flex items-center gap-3">
      <img
        src="/images/law-arena-mark.svg"
        alt=""
        aria-hidden="true"
        className={compact ? "h-9 w-9 shrink-0" : "h-11 w-11 shrink-0"}
      />
      <span className="leading-none">
        <span
          className={`block font-serif font-bold uppercase tracking-[0.14em] ${
            isLight ? "text-white" : "text-black"
          } ${compact ? "text-[16px]" : "text-[16px] sm:text-[18px] lg:text-[20px] lg:tracking-[0.18em]"}`}
        >
          Law Arena
        </span>
        <span
          className={`mt-1 block text-[8px] font-bold uppercase tracking-[0.42em] ${
            isLight ? "text-gray-500" : "text-gray-400"
          } ${compact ? "" : "sm:text-[9px] lg:tracking-[0.55em]"}`}
        >
          Associates
        </span>
      </span>
    </span>
  );
}
