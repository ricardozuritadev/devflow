import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = localFont({
    src: "./fonts/interVF.ttf",
    variable: "--font-inter",
    weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
    src: "./fonts/spaceGroteskVF.ttf",
    variable: "--font-space-grotesk",
    weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
    title: "DevFlow",
    description:
        "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more!",
    icons: {
        icon: "/images/site-logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            suppressHydrationWarning
            lang="en"
            className={cn("h-full", "antialiased", inter.className, spaceGrotesk.variable, "font-sans", geist.variable)}
        >
            <body className="flex min-h-full flex-col">
                <ThemeProvider attribute="class" defaultTheme="system">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
