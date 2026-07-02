import * as React from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = React.ComponentProps<"div"> & {
  reverse?: boolean;
  pauseOnHover?: boolean;
};

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      data-slot="marquee"
      data-reverse={reverse}
      data-pause-on-hover={pauseOnHover}
      className={cn(
        "group/marquee flex w-full overflow-hidden py-2 [--duration:28s] [--gap:--spacing(4)]",
        className,
      )}
      {...props}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          aria-hidden={index === 1}
          className={cn(
            "flex min-w-max shrink-0 items-stretch gap-(--gap) pr-(--gap) [animation:marquee_var(--duration)_linear_infinite]",
            reverse && "[animation-direction:reverse]",
            pauseOnHover &&
              "group-hover/marquee:[animation-play-state:paused]",
          )}
          key={index}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
