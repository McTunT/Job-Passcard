import Navbar from "./Nav"
import Head from "next/head"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <Head>
          <title>Job Passcard</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        {children}
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t mt-20">
        <a
          className="flex items-center justify-center"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </>
  )
}
