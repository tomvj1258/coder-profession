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
          "no-scrollbar min-h-screen bg-background font-poppins antialiased",
          poppins,
        )}
      >
        {children}
      </body>
      {/* <body className={poppins}>{children}</body> */}
    </html>
  );
}
