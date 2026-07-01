"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { type ReactNode, useState } from "react";
import { Drawer as VaulHeader } from "vaul";

type HeaderDrawerProps = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  drawerBtn?: (() => ReactNode) | null;
  children: ReactNode;
};

export function HeaderDrawer({
  open: controlledOpen,
  setOpen: controlledSetOpen,
  drawerBtn,
  children,
}: HeaderDrawerProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = controlledSetOpen ?? setInternalOpen;
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <VaulHeader.Root
      open={open}
      direction="top"
      onOpenChange={setOpen}
      dismissible={!isDesktop}
    >
      {drawerBtn ? (
        <VaulHeader.Trigger asChild>{drawerBtn()}</VaulHeader.Trigger>
      ) : null}
      <VaulHeader.Portal>
        <VaulHeader.Overlay className="fixed inset-0 z-50 bg-mauri-green/70 backdrop-blur-xs" />
        <VaulHeader.Content className="fixed top-0 left-0 z-50 h-fit w-full border-b border-border bg-background/95 px-3 py-3 text-foreground shadow-2xl backdrop-blur-xl md:px-6">
          {children}
        </VaulHeader.Content>
      </VaulHeader.Portal>
    </VaulHeader.Root>
  );
}

export function DrawerContent({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
