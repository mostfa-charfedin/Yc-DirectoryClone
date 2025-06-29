import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Optimized font loading
const workSans = localFont({
    src: [
        {
            path: "./fonts/WorkSans-Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-ExtraLight.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./fonts/WorkSans-Black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-work-sans",
    display: "swap", // Important for performance
});

export const metadata: Metadata = {
    title: "YC Directory",
    description: "Your startup directory",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${workSans.variable} font-sans`}>
        <body className="min-h-screen antialiased">
        {children}
        </body>
        </html>
    );
}