import "./globals.css";
import { Nunito } from "next/font/google";
import Sidebar from "@/app/components/layout/Sidebar";
import LoginModal from "@/app/components/modals/LoginModal";
import ClientOnly from "@/app/components/ClientOnly";
import Header from "@/app/components/layout/Header";
import Footer from "./components/layout/Footer";
import Player from "./components/play/Player";

const inter = Nunito({ subsets: ["latin"] });

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
        <ClientOnly>
          <div className="bg-black h-screen overflow-hidden">
            <main className="flex relative">
              <Sidebar />
              <section className="flex-1 flex flex-col">
                <Header />
                <div className="h-[calc(100vh-64px)] overflow-y-scroll hide-scrollbar bg-modal-bg">
                  {children}
                  <Footer />
                </div>
              </section>
            </main>
            <div className="sticky bottom-0">
              {/* <Player /> */}
            </div>
          </div>
          <LoginModal />
        </ClientOnly>
      </body>
    </html>
  );
}
