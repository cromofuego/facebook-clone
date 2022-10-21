import React from 'react';
import Image from 'next/image';
import { useSession } from "next-auth/react"

import irelia from '../assets/irelia.jpg'
import ireliaComplete from '../assets/ireliaComplete.jpg'

import darius from '../assets/darius.jpg'
import dariusComplete from '../assets/dariusComplete.jpg'

import lissandra from '../assets/lissandra.jpg'
import lissandraComplete from '../assets/lissandraComplete.jpg'

import kaisa from '../assets/kaisa.jpg'
import kaisaComplete from '../assets/kaisaComplete.jpg'

import taliya from '../assets/taliya.jpg'
import taliyaComplete from '../assets/taliyaComplete.jpg'

const Stories = () => {
  const { data: session } = useSession();
  const stories = [
    // { profile: irelia, background: ireliaComplete },
    { profile: darius, background: dariusComplete, uid: '1' },
    { profile: lissandra, background: lissandraComplete, uid: '2' },
    { profile: kaisa, background: kaisaComplete, uid: '3' },
    { profile: taliya, background: taliyaComplete, uid: '4' },
  ];

  return (

    <div className="flex items-center w-screen h-36  sm:w-full px-2 mt-4 sm:mt-8">

      <div className='w-full flex justify-between space-x-1 sm:space-x-4 p-1 mx-auto max-w-[25rem] sm:max-w-[33rem] px-2 bg-white rounded-[1rem] py-3'>
        {/* My Story */}
        <div key={"mystory"} className="relative flex w-[4.4rem] h-32 sm:w-24  sm:h-40 rounded-[1rem]">
          <div className="flex ">
            <img src={session ? session?.user?.image : ireliaComplete.src} className='flex object-cover rounded-[1rem]' alt='profile' />
            <div className="flex absolute top-1 left-1 w-9 h-9 p-1 bg-blue-500 rounded-full">
              <img src={session ? session?.user?.image : irelia.src} alt='profile' className='rounded-full  object-cover' />
            </div>
          </div>
        </div>
        {/* My Story */}

        {/* Celeb Stories */}
        {stories.map(story => (
          <div key={story.uid} className="relative flex w-[4.4rem] h-32 sm:w-24  sm:h-40 rounded-[1rem]">
            <div className="flex ">
              <Image src={story.background} className='flex object-cover rounded-[1rem]' />
              <div className="flex absolute top-1 left-1 w-9 h-9 p-1 bg-blue-500 rounded-full">
                <Image src={story.profile} className='rounded-full  object-cover' />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>

  )
}

export default Stories