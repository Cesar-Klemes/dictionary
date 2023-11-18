'use client'

import Image from 'next/image'
import SearchBar from './components/SearchBar';
import { Meaning } from './components/Meaning';
import { useState } from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const [word, setWord] = useState('');
  const [data, setData] = useState([]);

  const request = async() => {
    setData([])
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((data: any) => data.json())
    setData(response)
  }

  return (
    <main className='container mx-auto mt-10'>
      <div><BookOpenIcon className="h-10 w-10" /></div>
      <div className='mt-5'>
        <SearchBar word={word} setWord={setWord} search={request}/>
      </div>
      <div className='text-4xl my-12 font-bold h-2'>
        {word}
      </div>
      
      <div>
        <Meaning data={data}/>
      </div>
    </main>
  )
}
