import React from 'react'
import Button from './Button'


const List = ["All","Live","Gaming","Songs","Live","News","Cricket","Kapil Sharma","Diwali","Bharti Singh","Podcast"];

const ButtonLists = () => {
  return (
    <div className='flex'>
      {List.map((item) => (
        <Button name={item} />
      ))}
    </div>
  )
}

export default ButtonLists
