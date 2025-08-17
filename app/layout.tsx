import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Shiwam Pundir",
  description: "Generated with ❤ by Shiwam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='inset-0 -z-10 rounded-xl bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#a1c4fd]  '
      >
        {children}
      </body>
    </html>
  );
}
