"use client"
import { assets } from '@/assets/assets';
import PromptBox from '@/components/PromptBox';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Home() {

  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div>
      <div className='flex h-screen'>
        <Sidebar expand = {expand} setExpand={setExpand}/>
        <div className='flex-1 flex flex-col items-center justify-center
        px-4 pb-8 bg-[#C7F2A7] text-[#141F23] relative'>
         <div className='md:hidden absolute px-4 top-6 flex items-center justify-between
            w-full'>
            <Image onClick={() => (expand ? setExpand(false) : setExpand(true))}
             className='rotate-180' src={assets.menu_icon} alt=''/>
            <Image className='opacity-70' src={assets.chat_icon} alt=''/>
         </div>

         {messages.length === 0 ? (
            <>
            <div className='flex items-center gap-3'>
              <Image src={assets.logo_icon} alt='' className='h-17 w-17 animate-bounce duration-[2s]' />
              <p className='text-2xl font-medium'>
                Hi, I'm OrionDeepAI.
              </p>
            </div>  
            <p className="text-sm mt-2">How can I help you today?</p>
          
            </>
         ):
         (
          <div></div> 
         )}

         <PromptBox isLoading={isLoading} setIsLoading={setIsLoading}/>
         <p className='text-xs absolute bottom-1 text-gray-600'>AI - generated, for reference only</p>
         <p className='text-xs absolute bottom-5 text-gray-600'>Made with deepseek</p>
        </div>
      </div>
    </div>
  );
}
