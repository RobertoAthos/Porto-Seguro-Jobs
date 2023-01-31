import Head from 'next/head'
import React from 'react'

export default function SEO(props:{title:string,desc:string,name:string}) {
  return (
  <Head>
    <title>Porto Seguro Jobs | {props.title}</title>
    <meta name={props.name} content={props.desc} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}
