// src/app/layout.tsx
import "../styles/globals.scss";
import type { ReactNode } from "react";

import Header from "../components/layout/Header/Header";
import DeliveryBar from "../components/layout/DeliveryBar/DeliveryBar";
// import Footer from "../components/layout/Footer/Footer";

export const metadata = {
  title: "MYWOOD — двери и окна для бани",
  description: "Интернет-магазин MYWOOD.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <DeliveryBar />

        <main>{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
