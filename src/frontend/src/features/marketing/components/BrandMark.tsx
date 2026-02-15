interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className = 'w-12 h-12' }: BrandMarkProps) {
  return (
    <img
      src="/assets/generated/farm2kitchen-logo.dim_512x512.png"
      alt="Farm 2 Kitchen Logo"
      className={className}
    />
  );
}
