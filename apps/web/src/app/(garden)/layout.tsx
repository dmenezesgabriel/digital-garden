import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GardenLayout({ children }: Readonly<Props>) {
  return (
    <div>
      <div className="mx-auto w-full max-w-[70ch] space-y-5">{children}</div>
    </div>
  );
}
