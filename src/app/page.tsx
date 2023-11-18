'use client'

import SearchBar from './components/SearchBar';
import { Meaning } from './components/Meaning';
import { useState } from 'react';
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [word, setWord] = useState('');
  const [data, setData] = useState([]);

  const request = async() => {
    setData([])
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((data: any) => data.json())
    setData(response)
  }
  
  const [darkMode, setDarkMode] = useState(false);
  const handleCheckboxChange = () => {
    setDarkMode((prevMode) => !prevMode);
    const htmlClasses = document.querySelector('html')?.classList;
    if (htmlClasses) {
      htmlClasses.toggle('dark');
    }
  };

  return (
    <main className='container mx-auto mt-10'>
      <div className='grid grid-cols-2 gap-4 flex items-center'>
        <div><BookOpenIcon className="h-10 w-10 text-black dark:text-white"/></div>
        <div className='flex justify-end'>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={darkMode}
              onChange={handleCheckboxChange} 
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"><MoonIcon className="h-6 w-6"/></span>
          </label>
        </div>
      </div>
      <div className='mt-5'>
        <SearchBar word={word} setWord={setWord} search={request}/>
      </div>
      <div className='text-4xl my-12 font-bold h-2 dark:text-white'>
        {word}
      </div>
      
      <div>
        <Meaning data={data}/>
      </div>
    </main>
  )
}
