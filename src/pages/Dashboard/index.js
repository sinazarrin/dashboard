import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Profile from '../../components/Profile'

const Dashboard = () => {
  return (
    <>
        <Header/>
        <div className='flex h-full'>
            <Sidebar/>
            <Profile/>
        </div>
    </>
  )
}

export default Dashboard