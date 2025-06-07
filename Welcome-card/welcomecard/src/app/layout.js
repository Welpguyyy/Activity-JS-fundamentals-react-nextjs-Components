import React from 'react'
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "A simple Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
  <navigator></navigator>
        <div className="animated-background"></div>



        <h1>Entice, Joram Zhient B.     BSCPE-2</h1>
        <main>{children}</main>
        <footer>This is the layout footer</footer>
      </body>
    </html>
  );
}

