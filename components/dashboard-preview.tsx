import Image from "next/image";

export function DashboardPreview() {
  return (
    <div className="w-full max-w-[1160px] mx-auto px-4">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <Image
          src="/tai-hero-image.png"
          alt="Dashboard preview"
          width={1160}
          height={700}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
