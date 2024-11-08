import React from 'react';
import { Link, useParams } from "react-router-dom";
import SearchVideoResult from './SearchVideoResult';
import ButtonList from "./ButtonLists";
import { useSelector } from 'react-redux';
import useVideoResults from '../hooks/useVideoResults';

const VideoResults = () => {
    const { query } = useParams();
    const selectorVideo = useSelector(store => store.video.allSearchVideoResult) || [];
    useVideoResults(query);

  return (
    <div>
      <ButtonList/>
      {
        selectorVideo.map((s,index) => 
          <Link key={`${s.snippet.channelId}-${index}`} to={"/watch?v="+s.snippet.channelId}>
            <SearchVideoResult channelTitle={s.snippet.channelTitle} 
            title={s.snippet.title}
            description={s.snippet.description}
            thumbnails={s.snippet.thumbnails}
          />
          </Link>
        )
      }
    </div>
  )
}

export default VideoResults
