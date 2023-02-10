import UserPeofile from './UserProfile'
import TaglineProfile from './TaglineProfile'
import AboutMeProfile from './AboutMeProfile'
import SkillsProfile from './SkillsProfile'
import CertificateProfile from './CertificateProfile'
import WorkExperienceProfile from './WorkExperienceProfile'


const Profile = () => {
    return (
        <div className='w-1/4 mt-4 bg-white rounded-xl mx-5 p-2 dark:bg-gray-900 dark:bg-gray-800 dark:border-gray-400'>
            <UserPeofile/>
            <TaglineProfile/>
            <AboutMeProfile/>
            <SkillsProfile/>
            <CertificateProfile/>
            <WorkExperienceProfile/>
        </div>
    )
}

export default Profile