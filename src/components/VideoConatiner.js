import React, { useEffect, useState } from 'react';
import {YOUTUBE_VIDEOS_API} from "../utilis/constants";
import VideoCards,{RedBorderVideoCard} from './VideoCards';
import { Link } from 'react-router-dom';

const VideoConatiner = () => {

  const [videos,setVideos] = useState([]);

  useEffect(() => {

    getVideos();

  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap'>
      {videos[0] && <RedBorderVideoCard info={videos[0  ]}/>}
      {
        videos.map(video => 
        <Link key={video.id} to={"/watch?v="+video.id}><VideoCards info={video} /></Link>
      )
      }
    </div>
  )
}

export default VideoConatiner
