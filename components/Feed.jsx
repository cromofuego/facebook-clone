import React from 'react';
import LeftSideBar from './LeftSideBar';
import Stories from './Stories';
import CreatePost from './CreatePost';
import Posts from './Posts';
import RigthSidebar from './RigthSidebar';

const Feed = () => {
  return (
    <div className='flex bg-[#f2f3f7] '>
      {/* LeftSideBar */}
      <LeftSideBar />
      <div className="mx-auto">
        {/* Stories */}
        <Stories />
        {/* CreatePost */}
        <CreatePost />
        {/* Posts */}
        <Posts />
      </div>
      {/* RigthSide */}
      <RigthSidebar />
    </div>
  )
}

export default Feed