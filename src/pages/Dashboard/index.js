import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Profile from '../../components/Profile'
import MyWorks from '../../components/MyWorks'

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className='md:flex h-full w-full'>
        <div className='flex '>
          <Sidebar />
          <Profile />
        </div>
        <MyWorks />
      </div>
    </>
  )
}

export default Dashboard