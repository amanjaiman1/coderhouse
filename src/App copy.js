import React from 'react'
import { Loader } from './common/components';
import { RouterProvider } from "react-router-dom";
import { useSelector } from 'react-redux';
import routes from './routes/route';
import axios from 'axios';


const App = () => {
  const { loading } = useSelector((state) => state.loaders);
  
  // run a fucntion after every 9 minutes
  setInterval(async () => {
    await axios.get('https://coders-house-mcvg.onrender.com/');
  }, 1000 * 60 * 9);

  return (
    <div>
      {loading && <Loader />}
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
