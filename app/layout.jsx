import localFont from 'next/font/local'
import "./globals.css";

const MiSans = localFont({src:[
  {
    path : "../public/fonts/miSans/MiSansLatin-Medium.woff2",
    weight : "400"
  },
  {
    path : "../public/fonts/miSans/MiSansLatin-Bold.woff2",
    weight : "700"
  },
],
  variable : '--font-misans'
})

const MiSansTH = localFont({src:[
  {
    path : "../public/fonts/miSansTH/MiSansThai-Medium.woff2",
    weight : "400"
  },
  {
    path : "../public/fonts/miSansTH/MiSansThai-Bold.woff2",
    weight : "700"
  },
],
  variable : '--font-misansth'
})

export const metadata = {
  title: "จดหมายน้อยจากปักษ์",
  description: "Just Mail",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${MiSansTH.variable} ${MiSans.variable} font-misans overflow-hidden`}>{children}</body>
    </html>
  );
}
