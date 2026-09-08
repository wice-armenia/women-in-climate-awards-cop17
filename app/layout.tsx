import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Women in Climate Awards | COP17 Special Edition",
  description: "Women in Climate Awards | COP17 Special Edition",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
