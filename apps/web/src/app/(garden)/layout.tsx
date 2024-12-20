import { ReactNode } from "react";
import { Header } from "src/components/header";

interface Props {
  children: ReactNode;
}

export default function GardenLayout({ children }: Readonly<Props>) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto w-full max-w-[60ch] space-y-5">{children}</div>
    </div>
  );
}
