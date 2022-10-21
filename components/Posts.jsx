import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unSubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
      setPosts(snapshot.docs)
    }
    );
    return () => {
      unSubscribe();
    }
  }, [db])
  return (
    <div className="w-screen sm:w-full">
      <div className='my-6 max-w-[25rem] sm:max-w-[33rem] mx-auto'>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
            timestamp={post.data().timestamp}
          />
        ))}
      </div>
    </div>
  )
}

export default Posts