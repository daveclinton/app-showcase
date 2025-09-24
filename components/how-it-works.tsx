import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description:
        "Create your free account in minutes and access the full platform features right away.",
    },
    {
      number: "02",
      title: "Customize",
      description:
        "Set your preferences and tailor the experience to meet your specific needs easily.",
    },
    {
      number: "03",
      title: "Get Results",
      description:
        "Start using the platform and see measurable outcomes within a short period of time.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A quick overview of how our process helps you achieve results step
            by step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-96">
            <Image
              src="/your-image.png"
              alt="How it works illustration"
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div>
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
