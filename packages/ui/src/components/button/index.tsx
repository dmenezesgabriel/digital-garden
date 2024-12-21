"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  appName: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className="ui-bg-emerald-500 hover:ui-bg-emerald-700 ui-rounded ui-p-1 ui-text-white"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
