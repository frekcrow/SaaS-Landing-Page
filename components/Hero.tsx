import Image from "next/image";

export default function Hero() {
  const assets = [
    {
      src: "/lab-coate.webp",
      alt: "Lab Coat",
      width: 572,
      height: 567,
      className:
        "absolute -top-[5%] -left-[5%] w-[25vw] min-w-[250px] -rotate-12 object-contain",
    },
    {
      src: "/needle.webp",
      alt: "Needle",
      width: 289,
      height: 152,
      className:
        "absolute top-[40%] left-[2%] w-[15vw] min-w-[150px] -rotate-[35deg] object-contain",
    },
    {
      src: "/plaster.webp",
      alt: "Plaster",
      width: 128,
      height: 128,
      className:
        "absolute top-[48%] left-[16%] w-[8vw] min-w-[80px] -rotate-[25deg] object-contain",
    },
    {
      src: "/stethoscope.webp",
      alt: "Stethoscope",
      width: 363,
      height: 350,
      className:
        "absolute -bottom-[5%] -left-[2%] w-[25vw] min-w-[250px] object-contain",
    },
    {
      src: "/sheet.webp",
      alt: "Medical Sheet",
      width: 320,
      height: 376,
      className:
        "absolute -top-[5%] -right-[5%] w-[22vw] min-w-[220px] rotate-[15deg] object-contain",
    },
    {
      src: "/pills.webp",
      alt: "Pills",
      width: 193,
      height: 189,
      className:
        "absolute top-[42%] right-[5%] w-[12vw] min-w-[120px] object-contain",
    },
    {
      src: "/pressure.webp",
      alt: "Blood Pressure Monitor",
      width: 329,
      height: 344,
      className:
        "absolute -bottom-[2%] -right-[5%] w-[25vw] min-w-[250px] object-contain",
    },
    {
      src: "/egc.webp",
      alt: "ECG Graph",
      width: 128,
      height: 128,
      className:
        "absolute bottom-[20%] right-[20%] w-[10vw] min-w-[100px] hidden md:block opacity-50 object-contain",
    },
  ];

  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden bg-[url('/tiffany-bg.webp')] bg-cover bg-center bg-no-repeat">
      {assets.map((asset) => (
        <Image
          key={asset.src}
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          className={asset.className}
        />
      ))}
    </section>
  );
}
