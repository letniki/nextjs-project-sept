import type {Metadata} from "next";
import "./globals.css";
import {Menu} from "@/components/menu/Menu";

export const metadata: Metadata = {
  title: "DummyJSON",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Menu/>
        {children}
      </body>
    </html>
  );
}
