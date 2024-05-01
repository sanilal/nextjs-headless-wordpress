import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',

  variable: '--font-opensans',
})


export const metadata = {
  title: {
    default: "Aptech Computer Training",
    template: "%s | Aptech Computer Training"
  },
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} font-sans`}>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
