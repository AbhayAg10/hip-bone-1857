import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import JobDetail from './JobDetail'
import JobPage from './JobPage'

const Router = () => {
  return (
   
    <div>
         {/* <nav>
    <Link to="/">Home</Link>
    <Link to="/jobpage">Products</Link>
  </nav> */}
        <Routes>
            <Route path='/jobpage' element={<JobPage/>}>JobPage</Route>
            <Route path='/jobpage/:jobId' element={<JobDetail/>}>JobPage</Route>
          
        </Routes>

       

    </div>
  )
}

export default Router