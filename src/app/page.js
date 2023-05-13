import Movies from '@/components/Movies'
import Image from 'next/image'

export default function Home() {

  return (
    <main>
      <h1 className='text-center text-3xl p-6 bg-gradient-to-b from-green-400 to-blue-400"'>My Movie App</h1>
      <Movies/>
    </main>
  )
}
