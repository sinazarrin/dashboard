import UserPeofile from './UserProfile'
import TaglineProfile from './TaglineProfile'
import AboutMeProfile from './AboutMeProfile'
import SkillsProfile from './SkillsProfile'
import CertificateProfile from './CertificateProfile'
import WorkExperienceProfile from './WorkExperienceProfile'


const Profile = () => {
    return (
        <div className=' mt-3 bg-white rounded-xl mx-5 p-2 dark:bg-gray-800 dark:border-gray-400'>
            <div className='md:w-[300px] w-full'>
                <UserPeofile />
                <TaglineProfile />
                <AboutMeProfile />
                <SkillsProfile />
                <CertificateProfile />
                <WorkExperienceProfile />
            </div>
        </div>
    )
}

export default Profile