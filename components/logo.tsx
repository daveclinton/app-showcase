import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "text-2xl font-extrabold tracking-tight text-taiora-gold-light md:text-3xl",
        className,
      )}
    >
      Tai Ora
    </span>
  );
}
