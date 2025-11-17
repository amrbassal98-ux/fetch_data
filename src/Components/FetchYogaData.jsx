import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css';

const FetchYogaData = () => {
    const [data] = UseFetch ('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    return (
        <>
            <br/>
            <ul className='list_data_main'>
                <h2 className='usefetch_heading'>Yoga</h2>
                {data && data.map((i, index)=>
                <li key={index} className='list_data'>
                 <h3>{i.name}</h3>
                 <p><strong>Benefits: </strong>{i.benefits}</p>
                 <p><strong>Time Duration: </strong>{i.time_duration}</p>   
                </li>
                )}
            </ul>
        </>

    );
};
export default FetchYogaData;