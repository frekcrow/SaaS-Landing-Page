import Image from "next/image";

export default function Hero() {
  const assets = [
    {
      src: "/sheet.webp",
      alt: "Medical Sheet",
      width: 320,
      height: 376,
      style: {
        position: "absolute" as const,
        left: "811px",
        top: "-154px",
        width: "320px",
        height: "376px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      },
    },
    {
      src: "/lab-coate.webp",
      alt: "Lab Coat",
      width: 572,
      height: 567,
      style: {
        position: "absolute" as const,
        left: "-271px",
        top: "-136px",
        width: "572px",
        height: "567px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      },
    },
    {
      src: "/pills.webp",
      alt: "Pills",
      width: 193,
      height: 189,
      style: {
        position: "absolute" as const,
        left: "756px",
        top: "187px",
        width: "193px",
        height: "189px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      },
    },
    {
      src: "/needle.webp",
      alt: "Needle",
      width: 289,
      height: 152,
      style: {
        position: "absolute" as const,
        left: "-55px",
        top: "205px",
        width: "289px",
        height: "152px",
      },
    },
    {
      src: "/stethoscope.webp",
      alt: "Stethoscope",
      width: 363,
      height: 350,
      style: {
        position: "absolute" as const,
        left: "-91px",
        top: "249px",
        width: "363px",
        height: "350px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      },
    },
    {
      src: "/pressure.webp",
      alt: "Blood Pressure Monitor",
      width: 329,
      height: 344,
      style: {
        position: "absolute" as const,
        left: "41px",
        top: "373px",
        width: "329px",
        height: "344px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      },
    },
    {
      src: "/egc.webp",
      alt: "ECG Graph",
      width: 128,
      height: 128,
      style: {
        position: "absolute" as const,
        left: "560px",
        top: "320px",
        width: "128px",
        height: "128px",
      },
    },
    {
      src: "/plaster.webp",
      alt: "Plaster",
      width: 128,
      height: 128,
      style: {
        position: "absolute" as const,
        left: "480px",
        top: "100px",
        width: "128px",
        height: "128px",
      },
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen w-full bg-[url('/tiffany-bg.webp')] bg-cover bg-center bg-no-repeat">
      {assets.map((asset) => (
        <Image
          key={asset.src}
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          style={asset.style}
          className="object-contain"
        />
      ))}
    </section>
  );
}
