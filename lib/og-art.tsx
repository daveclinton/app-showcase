import type { CSSProperties } from "react";

import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const colors = {
  background: "#020806",
  panel: "#071814",
  surface: "#0e2e28",
  border: "#246357",
  gold: "#d4af37",
  sage: "#91c9ad",
  mint: "#b4dac6",
  white: "#f7f9f8",
};

const baseStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  color: colors.white,
  background: colors.background,
  fontFamily: "Arial, sans-serif",
};

function Identity({
  logoUrl,
  label,
  compact = false,
}: {
  logoUrl: string;
  label: string;
  compact?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoUrl}
        alt=""
        width={compact ? 72 : 82}
        height={compact ? 72 : 82}
        style={{ borderRadius: "999px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: compact ? 22 : 26,
        }}
      >
        <span
          style={{
            color: colors.gold,
            fontSize: compact ? 22 : 24,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span
          style={{
            color: colors.mint,
            fontSize: compact ? 20 : 22,
            marginTop: 6,
          }}
        >
          {SITE_NAME}
        </span>
      </div>
    </div>
  );
}

export function StandardOgArt({
  title,
  label,
  logoUrl,
  tagline = SITE_TAGLINE,
}: {
  title: string;
  label: string;
  logoUrl: string;
  tagline?: string;
}) {
  return (
    <div
      style={{
        ...baseStyle,
        position: "relative",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 76px",
        background:
          "radial-gradient(circle at 82% 16%, #164f46 0%, #071814 34%, #020806 72%)",
      }}
    >
      <Identity logoUrl={logoUrl} label={label} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            maxWidth: 1040,
            fontSize: title.length > 72 ? 58 : 70,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "0",
          }}
        >
          {title}
        </div>
        <div
          style={{
            maxWidth: 900,
            marginTop: 28,
            color: colors.mint,
            fontSize: 25,
            lineHeight: 1.4,
          }}
        >
          {tagline}
        </div>
      </div>
    </div>
  );
}

export function StoryOgArt({
  title,
  readAt,
  label,
  logoUrl,
}: {
  title: string;
  readAt: string;
  label: string;
  logoUrl: string;
}) {
  return (
    <div
      style={{
        ...baseStyle,
        padding: 62,
        background:
          "radial-gradient(circle at 70% 14%, #164f46 0%, #071814 34%, #020806 74%)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "74px 66px",
          border: `3px solid ${colors.border}`,
          borderRadius: 30,
          background: "rgba(7, 24, 20, 0.78)",
        }}
      >
        <Identity logoUrl={logoUrl} label={label} compact />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: colors.sage,
              fontSize: 27,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            A Tai Ora story
          </div>
          <div
            style={{
              marginTop: 34,
              fontSize: title.length > 70 ? 76 : 90,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "0",
            }}
          >
            {title}
          </div>
          <div
            style={{
              width: 120,
              height: 5,
              marginTop: 44,
              background: colors.gold,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "28px 30px",
            border: `2px solid ${colors.border}`,
            borderRadius: 18,
            background: colors.surface,
          }}
        >
          <span
            style={{
              color: colors.gold,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Read at
          </span>
          <span
            style={{
              marginTop: 12,
              color: colors.white,
              fontSize: 26,
              lineHeight: 1.35,
            }}
          >
            {readAt}
          </span>
        </div>
      </div>
    </div>
  );
}
