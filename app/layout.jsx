import { Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";

const be_vietnam_pro = Be_Vietnam_Pro({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={be_vietnam_pro.className}>
        {children}
      </body>
    </html>
  );
}
