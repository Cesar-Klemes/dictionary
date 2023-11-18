

import React, { Dispatch, FC, SetStateAction } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  word: string
  setWord: Dispatch<SetStateAction<string>>
  search: () => void
}

const SearchBar: FC<Props> = ({word, setWord, search}) => {
  const validate = () => {
    if(word.length === 0) {
      toast.error(`The field can't be empty!`, {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      search()
    }
  } 

  const onKeyDown = (e: any) => {
    if(e.key == 'Enter'){
      validate()
    }
  }
  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg> */}
        </div>
        <input
          autoFocus={true} 
          type="search" 
          onChange={e => setWord(e.target.value)}
          onKeyDown={
            (e) => {
                onKeyDown(e)
            }
          }
          id="default-search" 
          className="block w-full p-4 ps-10 text-sm text-gray-900 dark:text-white border border-gray-300 rounded-lg bg-gray-50 dark:bg-zinc-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Search for a word..." 
          required 
          />
        <button type="button" onClick={() => validate()} onKeyPress={e => e.key === 'Enter' && validate()} className="text-white absolute end-2.5 bottom-2.5 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </button>
      </div>
    </>
  );
};

export default SearchBar;