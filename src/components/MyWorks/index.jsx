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
          caption: 'خوانندگی در تیتراژ سریال'
        }
      ]
    },
  ])

  return (
    <div className='bg-[#F3F6FF] dark:bg-gray-900 p-5 overflow-x-scroll w-full'>
      <div className='flex justify-between text-gray-500 mb-3 dark:text-[#adb3c4] w-full '>
        <span>آثار من:</span>
        <div className="flex">
          <span>نوع نمایش:</span>
          <label class="relative inline-flex items-center cursor-pointer mr-2">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
      <AllWorks works={works} key={works.id} />
    </div>
  )
}

export default MyWorks