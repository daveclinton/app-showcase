import { Subscribe } from "./ui/subscribe";

export function ValuesSection() {
  return (
    <section className="w-full bg-primary text-foreground py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
          Guided by values, grounded in culture and wellbeing.
        </h2>
        <p className="mt-4 text-lg md:text-xl">Created for Everyone.</p>
        <div className="mt-10">
          <Subscribe />
        </div>
      </div>
    </section>
  );
}
