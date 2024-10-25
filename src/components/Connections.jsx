import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionsSlice';
import ConnectionsDataCard from './ConnectionsDataCard';

const Connections = () => {
    const data = useSelector((store)=>store.connections);
    const dispatch = useDispatch();
    const getConnections = async() => {
        try{
            const connectionsData = await axios.get("http://localhost:4000/user/connections",{
                withCredentials: true,
            })
            // console.log(connectionsData.data.data);  // you will get array of connection data here.  Each connection data includes user's id, first name, last name, photo url etc.
            dispatch(addConnections(connectionsData.data.data));
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        getConnections();
    },[]);

    if(!data){
        return <div>Loading...</div>
    }

    if(data.length === 0){
        return <div className='text-center text-2xl font-bold'>No connections found.</div>
    }
    
  return (
    <div>
        <h1 className='text-center text-2xl font-bold'>Connections</h1>
        {
            data.map((connectionData,index)=>(
                <div key={index} className='w-1/2 mx-auto'>
                    <ConnectionsDataCard userData={connectionData}/>
                </div>
            ))
        }
    </div>
  )
}

export default Connections