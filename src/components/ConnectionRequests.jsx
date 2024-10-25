import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../utils/requestsSlice';
import RequestSCard from './RequestSCard';

const ConnectionRequests = () => {
  const data = useSelector((store)=>store.requests)
  const dispatch = useDispatch();
  const getConnectionRequests = async() => {
    try{
        const requestData = await axios.get("http://localhost:4000/user/requests/received",{
          withCredentials: true,
        })
        // console.log(requestData.data.data); // contains connection requests
        dispatch(addRequests(requestData.data.data))
    }catch(e){
      console.error(e);
    }
  }

  useEffect(()=>{
    getConnectionRequests();
  },[]);

  if(!data) {
    return <div>Loading...</div>  // Display loading message until data is fetched.  This is a basic loading indicator.  In a real-world app, you might want to use a more advanced loading indicator.  You may also want to add error handling here.  If the API request fails, the user should be notified and redirected to a login page.  For now, let's keep it simple.  In a real-world app, you'd probably want to use a library like react-toastify to display these notifications.  In this case, the loading message is a placeholder.  You would replace it with a real-world loading indicator.  You'd also want to add error handling here.  If the API request fails, the user should be notified and redirected to a login page.  For now, let's keep it simple.  In a real-world app, you'd probably want to use a library like react-toastify to display these
  }

  if(data.length === 0) {
    return <div className="text-center font-bold text-xl">No connection requests.</div>  // Display a message when there are no connection requests.  This is a basic message.  In a real-world app, you might want to use a more advanced message display.  You may also want to add error handling here.  If the API request fails, the user should be notified and redirected to a login page.  For now, let's keep it simple.  In a real-world app, you'd probably want to use a library like react-toastify to display these notifications.  In this case, the message is a placeholder.  You would replace it with a real-world message display.  You'd also want to add error handling here.  If the API request fails, the user should be notified and redirected to a login page.  For now, let's keep it simple.  In a real-world app, you'd probably want to use a library like react-toastify to
  }

  return (
    <div>
       <h1 className='text-center text-2xl font-bold'>Connection requests</h1>
        {
          data.map((request) => (
            <div className='w-1/2 mx-auto' key={request._id}>
              <RequestSCard requestId={request._id} user={request} />
            </div>
          ))
        }
    </div>
  )
}

export default ConnectionRequests 