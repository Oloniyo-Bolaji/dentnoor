import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});
export const metadata = {
  title: "Dentnoor",
  icons: {
    icon: "/favicon.png",
  },
  description: "Your AI-Powered Oral Health Care Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
