import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "New nextjs",
  description: "New nextjs",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
