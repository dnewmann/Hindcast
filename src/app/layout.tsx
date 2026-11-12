import type { Metadata } from "next";
import "docket-ui/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hindcast",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
