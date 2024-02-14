import profilePhoto from '@/public/profile/profile3.jpeg';
import Image from "next/image";
import ProfileParagraph from './ProfileParagraph';
import { jacquesFrancois } from "@/utils/font";

const ProfileWidget = () => {
    return (
        <div className='max-w-md mx-auto xl:mx-0'>
            <p className={`text-3xl bg-mid-gray text-white text-center tracking-[0.6rem] ${jacquesFrancois.className}`}>Profile</p>
            <Image
                className="object-cover w-full h-40"
                src={profilePhoto}
                alt="profile photo"
                fill={false}
            />
            <div className='border-2 pt-4'>
                <ProfileParagraph isSmall={true} />
            </div>
        </div>
    );
}

export default ProfileWidget;