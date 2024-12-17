import { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "by H_Maan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased bg-theme_bg_light dark:bg-theme_bg_dark`}>
        {children}
      </body>
    </html>
  );
}
