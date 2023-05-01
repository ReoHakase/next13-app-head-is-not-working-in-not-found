/** Add your relevant code here for the issue to reproduce */
import type { Metadata } from "next";
import type { FC, ReactNode } from "react";

const RootLayout = ({ children }) => (
  <html lang="ja">
    <head />
    <body
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#999",
      }}
    >
      <p>Hi I am layout.tsx</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#fff",
          width: "4em",
          height: "4em",
        }}
      >
        4em x 4em
      </div>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;

export const metadata: Metadata = {
  title: {
    default: "Acme Inc.",
    template: "%s | Acme Inc.",
  },
  description: "Lorem Ipsum",
  viewport: {
    width: "device-width",
    initialScale: 1.0,
  },
  openGraph: {
    // Open graph image will be provided via file-based configuration.
    // Refer: https://beta.nextjs.org/docs/api-reference/metadata#static-images
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@acme",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1d1e" },
  ],
};
