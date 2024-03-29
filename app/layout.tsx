import "./global.css"

import { Header } from "@/components/Header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/icon.png" />
    <meta name="generator" content={Astro.generator} />

    <title>{title}</title>
    <meta name="description" content={description} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://getflash.vercel.app" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta
      property="og:image"
      content="https://getflash.vercel.app/public/cover.png"
    />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://getflash.vercel.app" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta
      property="twitter:image"
      content="https://getflash.vercel.app/public/cover.png"
    /> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`bg-[#000] text-zinc-100`}>
        <Header />

        <main className="mt-[100px]">{children}</main>
      </body>
    </html>
  )
}
