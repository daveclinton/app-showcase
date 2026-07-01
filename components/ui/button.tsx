import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap shadow-xs transition-[color,box-shadow,background-color,border-color,transform] outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:translate-y-0 aria-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active aria-pressed:bg-primary-active data-[state=open]:bg-primary-active data-[state=active]:bg-primary-active",
        outline:
          "border-input bg-background text-foreground hover:border-ring hover:bg-accent hover:text-accent-foreground active:bg-surface-active active:text-foreground aria-expanded:bg-accent aria-expanded:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground data-[state=active]:bg-surface-selected",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active aria-expanded:bg-secondary-active aria-expanded:text-secondary-foreground data-[state=open]:bg-secondary-active data-[state=active]:bg-secondary-active dark:border-none",
        ghost:
          "shadow-none hover:bg-accent hover:text-accent-foreground active:bg-surface-active active:text-foreground aria-expanded:bg-accent aria-expanded:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground data-[state=active]:bg-surface-selected",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 data-[state=open]:bg-destructive/90 data-[state=active]:bg-destructive/80 dark:focus-visible:ring-destructive/40",
        link: "text-link shadow-none hover:text-link-hover hover:underline active:text-mauri-mint/80 aria-pressed:text-link-hover data-[state=active]:text-link-hover",
      },
      size: {
        default:
          "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
