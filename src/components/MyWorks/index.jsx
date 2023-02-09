import { useState } from "react"
import AllWorks from "./AllWorks"

const MyWorks = () => {

  const [works, setWorks] = useState([
    {
      id: 1,
      title: 'طراحی و گرافیک',
      posts: [
        {
          id: 1,
          image: './assets/images/Design-and-graphics2.jpg',
          caption: 'طراحی سایت اخبار بازی'
        },
        {
          id: 2,
          image: './assets/images/Design-and-graphics1.jpg',
          caption: 'طراحی سایت ورزشی'
        },
      ]
    },
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
    <div className='bg-[#F3F6FF] p-5 w-4/5'>
      <div className='flex justify-between  text-gray-500 mb-3'>
        <span>آثار من:</span>
        <div>
          <span>نوع نمایش:</span>
          {/* toggle */}
        </div>
      </div>
      <AllWorks works={works} />

    </div>
  )
}

export default MyWorks