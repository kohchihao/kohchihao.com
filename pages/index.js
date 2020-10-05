import Head from 'next/head'
import { Button } from "@chakra-ui/core";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Button >Hello</Button>
    </div>
  )
}
