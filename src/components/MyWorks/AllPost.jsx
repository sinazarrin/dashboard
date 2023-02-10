import React from 'react'

const AllPosts = ({ subject }) => {
    return (
        <>
            {subject.posts.map(post => (
                <div className='mt-4 w-56 h-56 rounded-lg overflow-hidden ml-4 cursor-pointer'>
                    <div className='w-full h-36 relative'>
                        <img src={post.image} alt="" className='w-full h-36 object-cover' />
                        <div className='p-2'>
                            <p className='text-sm text-gray-500 dark:text-[#adb3c4]'>{post.caption}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute w-5 h-5 text-black bg-white p-1 rounded-md top-2 right-2 hover:bg-gray-300 duration-200" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                    </div>
                </div>

            ))}
        </>
    )
}

export default AllPosts