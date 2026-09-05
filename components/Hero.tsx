import Image from "next/image";

export default function Hero() {
  const assets = [
    {
      src: "/lab-coate.webp",
      alt: "Lab Coat",
      width: 572,
      height: 567,
      className:
        "absolute -top-[-2%] -left-[21%] w-[45vw] min-w-[250px] -rotate-[-45deg] object-contain",
    },
    {
      src: "/needle.webp",
      alt: "Needle",
      width: 289,
      height: 152,
      className:
        "absolute top-[30%] left-[-10%] w-[38vw] min-w-[150px] -rotate-[1deg] object-contain",
    },
    {
      /*src: "/plaster.webp",
      alt: "Plaster",
      width: 128,
      height: 128,
      className:
        "absolute top-[48%] left-[16%] w-[8vw] min-w-[80px] -rotate-[25deg] object-contain",
        */
    },
    {
      src: "/stethoscope.webp",
      alt: "Stethoscope",
      width: 363,
      height: 350,
      className:
        "absolute -bottom-[3%] -left-[15%] w-[45vw] min-w-[250px] -rotate-[-65deg] object-contain",
    },
    {
      src: "/sheet.webp",
      alt: "Medical Sheet",
      width: 320,
      height: 376,
      className:
        "absolute -top-[29%] -right-[27%] w-[59vw] min-w-[220px] rotate-[-8deg] object-contain",
    },
    
    {
      src: "/pressure.webp",
      alt: "Blood Pressure Monitor",
      width: 329,
      height: 344,
      className:
        "absolute -bottom-[-2%] -right-[18%] w-[44vw] min-w-[250px] rotate-[57deg] object-contain",
    },
    {
      /*
      src: "/egc.webp",
      alt: "ECG Graph",
      width: 128,
      height: 128,
      className:
        "absolute bottom-[20%] right-[20%] w-[10vw] min-w-[100px] hidden md:block opacity-50 object-contain",
        */
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
