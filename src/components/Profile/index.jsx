import UserPeofile from './UserProfile'
import TaglineProfile from './TaglineProfile'


const Profile = () => {
    return (
        <div className='w-[330px] mt-4 bg-white rounded-xl mx-5 p-2'>
            <UserPeofile/>
            <TaglineProfile/>
        </div>
    )
}

export default Profile