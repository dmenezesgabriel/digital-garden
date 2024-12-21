import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | "theme"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
  theme: {
    extend: {
      fontFamily: {
        roboto: "var(--font-roboto)",
        "permanent-marker": "var(--font-permanent-marker)",
      },
    },
  },
};

export default config;
