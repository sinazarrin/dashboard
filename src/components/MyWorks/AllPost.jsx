import React from 'react'

const AllPosts = ({subject}) => {
    return (
        <>
            {subject.posts.map(post => (
                <div className='mt-4 w-56 h-56 rounded-lg overflow-hidden ml-4'>
                    <div className='w-full h-36 '>
                        <img src={post.image} alt="" className='w-full h-36 object-cover' />
                        <div className='p-2'>
                            <p className='text-sm text-gray-500 dark:text-[#adb3c4]'>{post.caption}</p>
                        </div>
                    </div>
                </div>

            ))}
        </>
    )
}

export default AllPosts