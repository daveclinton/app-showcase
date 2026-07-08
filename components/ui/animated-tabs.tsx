"use client";

import { useState, type ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export type AnimatedTab = {
  title: string;
  value: string;
  content?: ReactNode;
};

type AnimatedTabsProps = {
  tabs: AnimatedTab[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  showContent?: boolean;
};

export function AnimatedTabs({
  tabs,
  value,
  defaultValue,
  onValueChange,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  showContent = false,
}: AnimatedTabsProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? tabs[0]?.value ?? "",
  );
  const [hovering, setHovering] = useState(false);

  const activeValue = isControlled ? value : internalValue;
  const activeIdx = Math.max(
    0,
    tabs.findIndex((tab) => tab.value === activeValue),
  );

  const handleSelect = (tabValue: string) => {
    if (!isControlled) {
      setInternalValue(tabValue);
    }
    onValueChange?.(tabValue);
  };

  const reorderedTabs = [
    tabs[activeIdx],
    ...tabs.filter((_, i) => i !== activeIdx),
  ].filter(Boolean);

  return (
    <>
      <div
        role="tablist"
        className={cn(
          "relative flex w-full max-w-full flex-row items-center justify-start overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [perspective:1000px] sm:overflow-visible",
          containerClassName,
        )}
      >
        {tabs.map((tab, idx) => {
          const isActive = idx === activeIdx;

          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleSelect(tab.value)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={cn(
                "relative rounded-full px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                tabClassName,
              )}
              style={{ transformStyle: "preserve-3d" }}
            >
              {isActive ? (
                <motion.div
                  layoutId="animated-tab-indicator"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 rounded-full bg-primary",
                    activeTabClassName,
                  )}
                />
              ) : null}
              <span
                className={cn(
                  "relative block text-sm font-semibold",
                  isActive ? "text-primary-foreground" : "text-foreground",
                )}
              >
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>

      {showContent ? (
        <AnimatedTabStack
          tabs={reorderedTabs}
          hovering={hovering}
          className={cn("mt-10", contentClassName)}
        />
      ) : null}
    </>
  );
}

type AnimatedTabStackProps = {
  className?: string;
  tabs: AnimatedTab[];
  hovering?: boolean;
};

function AnimatedTabStack({ className, tabs, hovering }: AnimatedTabStackProps) {
  return (
    <div className="relative h-[300px] w-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -15 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: idx === 0 ? [0, 40, 0] : 0,
          }}
          className={cn("absolute top-0 left-0 h-full w-full", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
}
