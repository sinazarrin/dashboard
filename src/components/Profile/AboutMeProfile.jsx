import React from 'react'

const AboutMeProfile = () => {
    return (
        <div id="about-me" className='w-full flex flex-col items-center justify-between text-[#adb3c4] mt-3'>
            <div className='flex justify-between items-center p-2 text-sm w-full'>
                <span className=''>درباره‌من</span>
                <div className='w-full h-[1px] bg-[#adb3c4]'></div>
                <div className='flex justify-center mr-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                </div>
            </div>
            <p className='px-5 text-sm text-gray-600 dark:text-[#adb3c4] list-disc sm:text-sm text-[11px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
        </div>
    )
}

export default AboutMeProfile