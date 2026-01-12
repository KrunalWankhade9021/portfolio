import { Outfit } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Krunal Wankhade | AI Portfolio",
  description: "Chat with my AI twin to learn about my projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased relative min-h-screen bg-background text-foreground`}>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
