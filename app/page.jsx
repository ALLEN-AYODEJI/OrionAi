"use client"
import { assets } from '@/assets/assets';
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
        <div className='flex-1 flex items-center justify-center
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
              <Image src={assets.logo_icon} alt='' className='h-16 w-16 animate-bounce duration-[2s]' />
              <p className='text-2xl font-medium'>
                Hi, I'm OrionAI. <br />
                <span className="text-sm mt-5 block">How can I help you today?</span>
              </p>
          </div>
          </>
         ):
         (
          <div></div> 
         )}

         {/* Prompt box */}
         <p className='text-xs absolute bottom-1 text-gray-600'>AI - generated, for reference only</p>
        </div>
      </div>
    </div>
  );
}
