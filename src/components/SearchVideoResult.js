import React from 'react'

const SearchVideoResult = ({channelTitle,title,description,thumbnails}) => {
  return (
    <div className='flex px-5 my-5'>
      <div>
        <img className='w-[100%] rounded-lg' src={thumbnails.high.url} alt="video" />
      </div>
      <div className='ml-5'>
        <p className='font-semibold text-2xl'>{title}</p>
        <p className='py-5'>{channelTitle}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default SearchVideoResult
