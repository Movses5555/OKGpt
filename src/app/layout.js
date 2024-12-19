import { Footer } from '@/app/components/Footer';

import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Your App Title",
  description: "Your app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} antialiased`}>
        {children}
        <div className="relative border-t-2 border-transparent before:absolute before:inset-0 before:top-[-2px] before:h-[2px] before:w-full before:bg-gradient-to-t from-[#02CCCE] to-[#03D49E] before:content-[''] before:z-[1]">
          <Footer />
        </div>
      </body>
    </html>
  );
}

