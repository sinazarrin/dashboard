import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const Dashboard = () => {
  return (
    <>
        <Header/>
        <div className='flex h-full'>
            <Sidebar/>
            
        </div>
    </>
  )
}

export default Dashboard