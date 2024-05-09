import type { Metadata } from "next"
// import Script from "next/script"
// import "./globals.css"

// const Plex = IBM_Plex_Sans({ weight: "400", subsets: ["latin"] })

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
      <body>
        <div className="container mx-auto px-4">
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </body>

      {/* // <Script
        //   async
        //   src="https://analytics.us.umami.is/script.js"
        //   data-website-id={process.env.UMAMI_ID}
        // /> */}
    </html>
  )
}
