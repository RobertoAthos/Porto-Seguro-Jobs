import Header from '@/components/Header'
import Image from 'next/image'
import heroPic from '../../public/hero-pic.png'
import SEO from '@/components/SEO'
import InfoCardBox from '@/components/InfoCardBox'
import worker from '../../public/worker.jpg'
import Button from '@/components/Button'


export default function Home() {
  return (
    <>
      <SEO title='Home' name='Porto Seguro jobs' desc='homepage'/>
      <main>
        <Header/>
        <section id='hero-home' className='w-full  bg-black'>
           <div className='w-full max-w-[1500px] m-auto flex flex-wrap justify-around items-center p-4'>
           <div className='w-full max-w-[500px] p-2 text-left'>
              <h2 className='text-3xl text-white  m-2 font-bold'>Encontre o emprego dos seus sonhos, perto de casa.</h2>
              <h3 className='text-2xl text-white m-2'>E no paraíso da Terra mãe do Brasil.</h3>
              <p className='text-gray-500'>Encontre empregos na região de Porto Seguro, Arraial D´juda, Trancoso e muito mais.</p>
              <Button name='CRIAR CONTA GRÁTIS'/>
            </div>
            <div>
              <Image src={heroPic} alt='mulher mexendo no notebook' width={400} height={400}/>
            </div>
           </div>
        </section>
        <section id='info' className='w-full mt-24'>
           <div className='w-full flex justify-center text-center mb-[4rem]'><h3 className='text-primary-700 text-3xl'>A Porto Seguro Jobs é eficiente para <br/> profissionais de qualquer ramo e empresas </h3></div>
            <div className=' w-full max-w-[900px] m-auto flex justify-around'>
            <InfoCardBox
              number='1 mil'
              text='oportunidades de trabalho'
            />
             <InfoCardBox
              number='100'
              text='empresas contratando'
            />
             <InfoCardBox
              number='2 mil'
              text='convites para entrevistas'
            />
            </div>
        </section>
        <section id='company' className='bg-primary-100 p-4 mt-24'>
            <div className='flex bg-white  w-[900px] m-auto'>
            <div>
              <Image src={worker} alt='trabalhador' width={700} height={700}/>
            </div>
            <div className='p-4'>
              <span className='text-primary-700 font-bold text-xl mb-[1rem]'>Você é empresário ?</span>
              <h3 className='text-5xl mt-[2rem] mb-[2rem]'> Contrate os melhores talentos para sua empresa</h3>
              <p className='text-gray-500 text-xl'>Busque por profissionais  ou receba recomendações certeiras, de acordo com a sua necessidade. Contrate rápido e contrate bem.</p>
             <Button name='CRIAR CONTA COMO EMPRESA'/>
            </div>
            </div>
        </section>
      </main>
    </>
  )
}
