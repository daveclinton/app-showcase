"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

type BlogShareButtonProps = {
  title: string;
  text: string;
  url: string;
};

function isAbortError(error: unknown) {
  return error instanceof Error && error.name === "AbortError";
}

async function copyUrl(url: string) {
  if (!navigator.clipboard?.writeText) {
    return false;
  }

  await navigator.clipboard.writeText(url);
  return true;
}

export function BlogShareButton({ title, text, url }: BlogShareButtonProps) {
  const [isSharing, setIsSharing] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareData: ShareData = { title, text, url };

  async function handleShare() {
    if (isSharing) {
      return;
    }

    setIsSharing(true);
    setCopied(false);

    try {
      const canUseNativeShare =
        typeof navigator.share === "function" &&
        (typeof navigator.canShare !== "function" ||
          navigator.canShare(shareData));

      if (canUseNativeShare) {
        await navigator.share(shareData);
        return;
      }

      if (await copyUrl(url)) {
        setCopied(true);
        toast.success("Article link copied.");
        return;
      }

      toast.error("Sharing is not supported in this browser.");
    } catch (error) {
      if (isAbortError(error)) {
        return;
      }

      try {
        if (await copyUrl(url)) {
          setCopied(true);
          toast.success("Article link copied.");
          return;
        }
      } catch {
        // Fall through to the user-facing error.
      }

      toast.error("Could not share this article.");
    } finally {
      setIsSharing(false);
    }
  }

  const Icon = copied ? Check : Share2;

  return (
    <Button
      type="button"
      onClick={handleShare}
      disabled={isSharing}
      aria-label={copied ? "Article link copied" : `Share ${title}`}
    >
      <Icon data-icon="inline-start" aria-hidden="true" />
      {isSharing ? "Sharing..." : copied ? "Link copied" : "Share story"}
    </Button>
  );
}
