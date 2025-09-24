import Image from "next/image";

export function DashboardPreview() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="relative w-full max-w-4xl">
        <Image
          src="/tai-hero-image.png"
          alt="Pays_e mobile app interface showing money transfer features, account balance, and portfolio management"
          width={800}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
