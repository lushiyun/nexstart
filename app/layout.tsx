import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "@/contexts/ReactQueryProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<ReactQueryProvider>
				<body className={inter.className}>{children}</body>
				<Toaster />
			</ReactQueryProvider>
		</html>
	);
}
