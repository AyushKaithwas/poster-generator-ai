import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { authOptions } from "@/lib/auth";
import { SessionProvider } from "@/components/session-provider";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poster Generator AI",
  description:
    "Poster Generator AI generates personalised posters based on your event.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(inter.className);

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={`${inter.className} h-[100vh]`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
