import type { Metadata } from "next"
import { Inconsolata } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const typography = Inconsolata({ weight: "600", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kevin Chevallier",
  description: "My site under NextJS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={typography.className}>
        <div id="root">
          <div className="app">{children}</div>
        </div>
      </body>

      <Script
        async
        src="https://analytics.us.umami.is/script.js"
        data-website-id={process.env.UMAMI_ID}
      />
    </html>
  )
}
