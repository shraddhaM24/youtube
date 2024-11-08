import React from 'react'
import Button from './Button'
import { useNavigate, useParams } from 'react-router-dom';


const List = ["All","Live","Gaming","Songs","News","Cricket","Kapil Sharma","Diwali","Bharti Singh","Podcast"];

const ButtonLists = () => {
  const navigate = useNavigate();

  return (
    <div className='flex'>
      {List.map((item, index) => (
        <div key={`${item}-${index}`} onClick={() => navigate(`/search/${item}`)}>
          <Button name={item} />
        </div>
      ))}
    </div>
  );
  
}

export default ButtonLists
