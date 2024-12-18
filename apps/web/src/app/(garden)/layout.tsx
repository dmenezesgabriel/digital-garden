import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GardenLayout({ children }: Readonly<Props>) {
  return <div>{children}</div>;
}
