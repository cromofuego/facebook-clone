import React from 'react';
import akali from "../assets/akali.jpg";
import jax from "../assets/jax.jpg";
import jinx from "../assets/jinx.jpg";
import lux from "../assets/lux.jpg";
import missFortune from "../assets/missFortune.jpg";
import sylas from "../assets/sylas.jpg";
import yasuo from "../assets/yasuo.jpg";
import yone from "../assets/yone.jpg";
import taliya from "../assets/taliya.jpg";

import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import dots from "../assets/dots.png";
import Image from "next/image";

const RigthSidebar = () => {

  const profiles = [
    { name: 'akali', photo: akali },
    { name: 'Miss Fortune', photo: missFortune },
    { name: 'Lux', photo: lux },
    { name: 'Jax', photo: jax },
    { name: 'Jinx', photo: jinx },
    { name: 'Sylas', photo: sylas },
    { name: 'Yasuo', photo: yasuo },
    { name: 'Yone', photo: yone },
    { name: 'Taliyah', photo: taliya }
  ];

  return (
    <div>
      <div className='hidden lg:block pt-4 sm:pt-8 pr-7'>
        <div className="flex items-center">
          <p className='pr-4 font-bold'>Contacts</p>
          <div className="flex items-center space-x-2">
            <BsFillCameraVideoFill />
            <FiSearch />
            <div className="w-7 h-7">
              <Image src={dots} />
            </div>
          </div>
        </div>
        <div className="space-y-4 mt-4">
          {profiles.map((profile) => (
            <div key={profile.name} className="flex items-center">
              <div className="relative w-12 h-12 flex">
                {/* I do not know why cop src */}
                <img src={profile.photo.src} className='object-cover rounded-full' alt='profile' />
                <div className="absolute w-3.5 h-3.5 bg-green-500 rounded-full bottom-0 right-0.5 border-2 border-white">

                </div>
              </div>
              <p className='pl-3 font-semibold'>{profile.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RigthSidebar