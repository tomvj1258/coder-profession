import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cn } from "@/lib/utils";
import { poppins } from "@/utils/font";

export const metadata = {
  title: "Coder Profession",
  description: "Learning by doing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-poppins antialiased",
          poppins,
        )}
      >
        {children}
        <Toaster />
      </body>
      {/* <body className={poppins}>{children}</body> */}
    </html>
  );
}
