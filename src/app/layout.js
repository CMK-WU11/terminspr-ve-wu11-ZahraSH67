import "./globals.css";
import { Ubuntu } from "next/font/google";
import { AuthProvider } from "./auth/context";


const ubuntu = Ubuntu({
  weight: ["400", "500", "300", "700"],
  subsets: ["latin"],
});


export default function RootLayout({ children }) {

  return (
    <html lang="da">
      <body className={ubuntu.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
