import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LoginForm from '@/components/LoginForm'
import SEO from '@/components/SEO'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <>  
        <SEO title='Login' name='porto seguro jobs login' desc='login'/>
        <Header/>
        <main>
            <section className='w-full h-screen bg-primary-800'>
                <div className='w-full h-screen max-w-[1500px] m-auto flex flex-col justify-center items-center'>
                    <div className='bg-white w-[600px] h-[400px]'>
                        <div className='bg-gray-200 p-4'>
                            <h4 className='text-primary-700 text-center text-xl'>LOG IN</h4>
                        </div>
                        <div className='flex justify-center p-4'>
                            <LoginForm/>
                        </div>
                    </div>
                    <Link href='/' className='mt-12 underline text-white text-xl'>Esqueci minha senha</Link>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}
