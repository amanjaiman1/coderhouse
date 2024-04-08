import React from 'react'
import { Loader } from './common/components';
import { RouterProvider } from "react-router-dom";
import { useSelector } from 'react-redux';
import routes from './routes/route';


const App = () => {
  const { loading } = useSelector((state) => state.loaders);

  return (
    <div className='w-full h-screen'>
      {loading && <Loader />}
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
