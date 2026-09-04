import Image from "next/image";

export default function Hero() {
  const leftImages = [
    { src: "/egc.webp", alt: "ECG Graph" },
    { src: "/lab-coate.webp", alt: "Lab Coat" },
    { src: "/needle.webp", alt: "Needle" },
    { src: "/pills.webp", alt: "Pills" },
  ];

  const rightImages = [
    { src: "/plaster.webp", alt: "Plaster" },
    { src: "/pressure.webp", alt: "Blood Pressure Monitor" },
    { src: "/sheet.webp", alt: "Medical Sheet" },
    { src: "/stethoscope.webp", alt: "Stethoscope" },
  ];

  return (
    <section className="min-h-screen w-full bg-[url('/tiffany-bg.webp')] bg-cover bg-center bg-no-repeat flex flex-col">
      <div className="flex justify-between w-full min-h-screen p-8">
        {/* Left Column */}
        <div className="flex flex-col justify-around">
          {leftImages.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={128}
              height={128}
              className="w-32 h-32 object-contain"
            />
          ))}
        </div>

        {/* Center space left completely empty */}

        {/* Right Column */}
        <div className="flex flex-col justify-around">
          {rightImages.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={128}
              height={128}
              className="w-32 h-32 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
