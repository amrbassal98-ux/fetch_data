import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css';
const FetchData = () => {
  const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
  console.log(data);
  return (
    <>
      <h1 className='usefetch_heading'>(Use Fetch Custom Hook)</h1>
     <ul className='list_data_main'>
      <h2 className='usefetch_heading'>Food</h2>
        {data && data.map((e, index) =>(
          <li key={index} className='list_data'>
            <img src={e.image} alt={e.name} className='images'/>
            <h3>{e.name}</h3>
            <p><strong>Importance: </strong>{e.importance}</p>
            <p><strong>Benefits: </strong>{e.benefits}</p>
            <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
          </li>
        ))}
     </ul>
    </>
  );
}

export default FetchData