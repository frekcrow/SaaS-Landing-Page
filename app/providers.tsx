"use client";

import { HeroUIProvider } from "@heroui/system";
import { IconContext } from "@phosphor-icons/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <IconContext.Provider
        value={{ weight: "regular", size: 24, mirrored: false }}
      >
        {children}
      </IconContext.Provider>
    </HeroUIProvider>
  );
}
