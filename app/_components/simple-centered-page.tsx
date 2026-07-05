import { radialPageBackground } from "@/lib/page-background";

type SimpleCenteredPageProps = {
  title: string;
};

export function SimpleCenteredPage({ title }: SimpleCenteredPageProps) {
  return (
    <main
      className="grid min-h-dvh place-items-center px-6 pt-24 text-center"
      style={radialPageBackground}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-balance text-foreground md:text-5xl">
        {title}
      </h1>
    </main>
  );
}
