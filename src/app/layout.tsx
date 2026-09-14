import type { Metadata, Viewport } from "next";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Automation Workbench | Zalos",
  description:
    "Zalos AI Workers operate fragmented finance systems the way your team does, with tighter controls, accuracy & auditability.",
};

export const viewport: Viewport = { themeColor: "#0a3d32" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
