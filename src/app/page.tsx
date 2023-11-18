import Image from 'next/image'
import SearchBar from '../../components/SearchBar';

export default function Home() {
  
  return (
    <main className='container mx-auto mt-10'>
      <div>icone</div>
      <div className='mt-5'>
        <form>
          <div className="relative">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
          </svg>
          <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
          </div>
        </form>
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
        
      </div>
    </main>
  )
}
