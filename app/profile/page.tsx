import Image from "next/image";
import profilePhoto from '@/public/profile/profile3.jpeg'
import PageTitle from "@/components/page/PageTitle";
import ProfileParagraph from "@/components/common/ProfileParagraph";
import { customMetadata } from "@/utils/metadata";
import { getProfile } from "@/utils/get-profile";
import Breadcrumb from "@/components/common/Breadcrumb";

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

// export const revalidate = parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME ?? "0");

export async function generateMetadata() {
    const profileDes = await getProfile({isSmall:false});
    return customMetadata({
        title: 'MK:Profile',
        keywords: ['プロフィール', 'profile', '自己紹介'],
        description: profileDes.join(),
    });
}

export default function Profile() {
    return (
        <div>
            <div className="w-3/4 mx-auto">
                <Breadcrumb
                    paths={[
                        {
                            path: '/profile',
                            name: 'profile'
                        }
                    ]}
                />
            </div>
            <PageTitle title="Profile" />
            <div className="md:w-3/4 mx-auto md:flex justify-center gap-4">
                <Image
                    className="object-cover w-3/4 md:flex-1 m-auto md:m-0 h-60 md:h-80"
                    src={profilePhoto}
                    alt="profile photo"
                    fill={false}
                ></Image>
                <div className="w-3/4 mx-auto mb-5 md:flex-1">
                    <ProfileParagraph isSmall={false} />
                </div>
            </div>
        </div>
    );
}