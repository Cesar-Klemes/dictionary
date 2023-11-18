'use client'

import { useEffect, useState } from 'react';

interface Props {
    data: never[]
}

export function Meaning({data}: Props) {
    return (
        <div>
            {Array.isArray(data) && data.map((meaning: any, index) => (
                Array.isArray(meaning.meanings) && meaning.meanings.map((value: any) => (
                    <div key={meaning.word + index} className='mb-8'>
                        <div className="relative flex items-center">
                            <span className="flex-shrink mr-4">{ value.partOfSpeech }</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                        <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div className='mt-5 mb-4'>
                            <span className='text-gray-300'>Meanings</span>
                        </div>
                        {Array.isArray(value.definitions) && value.definitions.map((definition: any) => (
                            <ul className="list-disc ml-5" key={definition.definition}>
                                <li>
                                    {definition.definition}
                                </li>
                            </ul>
                        ))}
                        
                    </div>
                ))
            ))}
        </div>
    )
}