"use client"; 
import { getSession } from "next-auth/react";
import SessionProvider from "../components/SessionProvider";
import NavMenu from "@/components/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          <SessionProvider>
            <main>
              <NavMenu />
             {children} 
            </main>
          </SessionProvider>
      </body>
    </html>
  );
}
