import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify App",
  description: "Spotify App Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Sidebar />
          {children}
        </main>
        <div>player</div>
      </body>
    </html>
  );
}
