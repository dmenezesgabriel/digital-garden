import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GardenLayout({ children }: Readonly<Props>) {
  return (
    <div className="mx-auto grid min-h-screen max-w-[1600px] grid-rows-app gap-5 p-8">
      {children}
    </div>
  );
}
