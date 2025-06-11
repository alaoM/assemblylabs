
import Appwrapper from "./components/Appwrapper";
import { Babkak, bebas_nue, inter } from "./font";
import "./globals.css";



export const metadata = {
  title: "Assembly Labs",
  description: "Break Into Korea’s Web3 Market — and Win",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${Babkak.variable} ${inter.variable} ${bebas_nue.variable} antialiased`} 
      >
        <Appwrapper>
          {children}
        </Appwrapper>
      </body>
    </html>
  );
}
