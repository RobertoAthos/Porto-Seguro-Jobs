import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <section id='hero-home'>
            <div className='w-full mt-28 p-2 text-center'>
              <h2 className='text-3xl text-primary-700  m-2 font-bold'>Encontre o emprego dos seus sonhos, perto de casa.</h2>
              <h3 className='text-2xl text-gray-700 m-2'>E no paraíso da Terra mãe do Brasil.</h3>
              <p className='text-gray-500 w-[500px] m-auto'>Encontre empregos na região de Porto Seguro, Arraial D´juda, Trancoso e muito mais.</p>
            </div>
        </section>
        <section id='about'>
            <div>
                <h2>O que fazemos ?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum nesciunt perspiciatis vitae error, aliquam velit sit molestiae qui. Illo modi optio esse odio eius quibusdam asperiores nam hic unde.</p>
            </div>
            <div>
                
            </div>
        </section>
      </main>
    </>
  )
}
