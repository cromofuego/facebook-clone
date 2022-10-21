import React, { useRef, useState } from 'react';
import Image from "next/image";
// import user from '../assets/profilePhoto.jpeg';
import nouser from '../assets/nouser.png';

import camera from "../assets/camera.png";
import photos from "../assets/photos.png";
import smile from "../assets/smile.png";

import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, uploadString, ref } from 'firebase/storage';

const CreatePost = () => {
  const { data: session } = useSession();
  const captionRef = useRef(null);
  const imageRef = useRef(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  //Create data post and add it to the collection
  const uploadPost = async () => {
    setLoading(true)
    const docRef = await addDoc(collection(db, 'posts'), {
      profileImg: session?.user?.image,
      userName: session?.user?.name,
      caption: captionRef.current.value,
      timestamp: serverTimestamp(),
    });
    //Path for the image
    const imagePath = ref(storage, `post/${docRef.id}/image`);
    //Upload image to that adress
    //Then with the snapshot declare the download URL
    await uploadString(imagePath, image, "data_url").then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imagePath);
      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadURL,
      });
    });
    setImage('')
    setLoading(false)
    captionRef.current.value = null;
  };


  //Add the image to state
  const addImageToState = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    } reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    }
  }

  return (
    <div className="w-screen sm:w-full">
      <div className='max-w-[25rem] sm:max-w-[33rem] mx-auto sm:px-2 bg-white rounded-[1rem]'>
        <div className="flex items-center mt-8 w-full p-3 pt-4">
          <div className="w-12 h-12">
            {/* <Image src={user} className='rounded-full shrink-0' /> */}
            <img src={session?.user?.image ? session?.user?.image : nouser.src} alt='profile' className='rounded-full shrink-0' />
          </div>
          <div className="flex items-center ml-3 w-full ">
            <input type='text' placeholder="What's on your mind Elkin?"
              className='bg-[#f2f3f7] p-1 rounded-full outline-0 pl-3 w-full h-12 truncate'
              ref={captionRef}
            />
          </div>
          <div className="flex items-center bg-blue-500  hover:bg-blue-500/75 px-3 rounded-full h-10 ml-4"
            onClick={uploadPost}
          >
            <button className='font-bold text-white'>{loading ? 'loading' : 'post'}</button>
          </div>
        </div>

        <div className="div" onClick={() => setImage('')}>
          {image ? <div className="div"><img src={image} className='p-4' /></div> : ''}
        </div>

        <div className="border-b mb-4 mt-2">
        </div>

        <div className="flex justify-between mx-3 sm:mx-9 pb-4">
          <div className="flex items-center">
            <div className="w-7 h-7">
              <Image src={camera} />
            </div>
            <p className='pl-2 whitespace-nowrap text-[14px]'>Live Video</p>
          </div>

          <div className="flex items-center cursor-pointer" onClick={() => imageRef.current.click()}>

            <div className="w-7 h-7 ">
              <Image src={photos} />
              <input type='file' className='hidden' ref={imageRef} onChange={addImageToState} />
            </div>
            <p className='pl-2 text-[14px]'>Photo/Video</p>
          </div>

          <div className="flex items-center">
            <div className="w-7 h-7">
              <Image src={smile} />
            </div>
            <p className='pl-2 text-[14px]'>Feeling/Activity</p>
          </div>

        </div>

      </div>
    </div>

  )
}

export default CreatePost