import { useState } from "react"
import AllWorks from "./AllWork"

const MyWorks = () => {

  const [works, setWorks] = useState([
    
    {
      id: 2,
      title: 'گویندگی و خوانندگی',
      posts: [
        {
          id: 1,
          image: './assets/images/announcer1.jpg',
          caption: 'دوبله و تقلید صدا'
        },
        {
          id: 2,
          image: './assets/images/announcer2.jpg',
          caption: 'گویندگی و اخبار گویی'
        },
        {
          id: 3,
          image: './assets/images/announcer3.jpg',
          caption: 'خوانش کتاب صوتی "کتابخانه نیمه شب"'
        }
      ]
    },
    {
      id: 3,
      title: 'تدوین و صداگذاری',
      posts: [
        {
          id: 1,
          image: './assets/images/Editing-and-voiceover1.jpg',
          caption: 'تبلیغ تیزر تبلیغاتی نوشیدنی انرژی زا'
        },
        {
          id: 2,
          image: './assets/images/Editing-and-voiceover2.jpg',
          caption: 'تبلیغ تیزر تبلیغاتی نوشیدنی انرژی زا'
        },
        {
          id: 3,
          image: './assets/images/Editing-and-voiceover3.jpg',
          caption: 'تبلیغ تیزر تبلیغاتی نوشیدنی انرژی زا'
        }
      ]
    },
  ])

  return (
    <div className='bg-[#F3F6FF] dark:bg-gray-900 p-5 overflow-x-scroll w-[1000px]'>
      <div className='flex justify-between text-gray-500 mb-3 dark:text-[#adb3c4] w-full '>
        <span>آثار من:</span>
        <div>
          <span>نوع نمایش:</span>
          {/* toggle */}
        </div>
      </div>
      <AllWorks works={works} key={works.id} />
    </div>
  )
}

export default MyWorks