import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utilis/appSlice';
import { YOUTUBE_SEARCH_API } from '../utilis/constants';
import { cacheResult } from '../utilis/searchSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  const searchCache = useSelector(store => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    },200);

    //destroy the component
    return (() => {
      clearTimeout(timer);
    });
  },[searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    
    dispatch(cacheResult({
      [searchQuery] :json[1],
    }));
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  const handleSuggestionClick = (suggestion) => {
    const formattedSuggestion = suggestion.replace(/ /g, '+');
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    navigate(`/search/${formattedSuggestion}`);
  }

  return (
    <div className='grid grid-flow-col p-2 m-5 shadow-lg'>
      <div className='flex col-span-1'>
        <img className='h-10 cursor-pointer'
        onClick={toggleMenuHandler}
        src="https://cdn-icons-png.flaticon.com/128/9663/9663120.png" alt="menu-icon" />
        <img className="h-10 mx-2 w-auto" 
        src="data:image/png;base64,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" 
        alt="youtube-logo" />
      </div>
      <div className='col-span-10 px-10'>
        <div>
          <input className='px-5 w-1/2 p-2 border border-gray-400 rounded-l-full' type="text" 
          value={searchQuery} 
          onFocus={() => setShowSuggestions(true)}
          // onBlur={() => setShowSuggestions(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className='border border-gray-400 p-2 rounded-r-full'>Search</button>
        </div>
        {showSuggestions && (
        <div className='fixed bg-white py-2 px-2 w-[37rem] rounded-lg shadow-lg border-gray-100 '>
          <ul>
            { suggestions.length ? (
              suggestions.map(s => <div key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'
                onClick={() => handleSuggestionClick(s)}
              >🔍 {s}</div>)) : (
                <div className="p-2 text-gray-500">No suggestions found</div>
              )
            }
          </ul>
        </div>)}
      </div>
      <div className='col-span-1'>
        <img className='h-10' 
        src="data:image/png;base64,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" 
        alt="user-icon" />
      </div>
    </div>
  )
}

export default Header
