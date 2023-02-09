import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Profile from '../../components/Profile'
import MyWorks from '../../components/MyWorks'

const Dashboard = () => {
  return (
    <>
        <Header/>
        <div className='flex h-full'>
            <Sidebar/>
            <Profile/>
            <MyWorks/>
        </div>
    </>
  )
}

export default Dashboard