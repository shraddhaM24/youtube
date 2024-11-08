import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addAllSearchVideoResult } from '../utilis/videoSlice';
import { GOOGLE_API_KEY, YOTUBE_SEARCH_RESULT } from '../utilis/constants';

const useVideoResults = (query) => {

    const dispatch = useDispatch();

    const getSearchResultVideos = async () => {
        const data = await fetch(YOTUBE_SEARCH_RESULT+query+"&type=video&key="+GOOGLE_API_KEY);
        const json = await data.json();
        dispatch(addAllSearchVideoResult(json.items));
    };

    useEffect(() => {
        getSearchResultVideos();
    },[query]);
}

export default useVideoResults
