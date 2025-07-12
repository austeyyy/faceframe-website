import { Inter } from "next/font/google";
import "./globals.css";
import ScrollObserver from '../components/ScrollObserver'


const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // all weights
  variable: '--font-inter',

})

export const metadata = {
  title: "FaceFrame",
  description: "Welcome to FaceFrame",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <ScrollObserver/>
        {children}
      </body>
    </html>
  );
}
