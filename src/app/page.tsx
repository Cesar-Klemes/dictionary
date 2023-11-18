import Image from 'next/image'
import SearchBar from './components/SearchBar';
import { Meaning } from './components/Meaning';

export default function Home() {

  return (
    <main className='container mx-auto mt-10'>
      <div>icone</div>
      <div className='mt-5'>
        <SearchBar/>
      </div>
      <div className='text-4xl my-12 font-bold'>
        Word
      </div>
      <div className="relative flex items-center">
        <span className="flex-shrink mr-4">Noun</span>
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className='mt-8'>
        <span className='text-gray-300'>Meanings</span>
      </div>
      <div>
        <Meaning/>
      </div>
    </main>
  )
}
