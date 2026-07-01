type SimpleCenteredPageProps = {
  title: string;
};

export function SimpleCenteredPage({ title }: SimpleCenteredPageProps) {
  return (
    <main className="grid min-h-dvh place-items-center bg-background px-6 pt-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-balance text-foreground md:text-5xl">
        {title}
      </h1>
    </main>
  );
}
