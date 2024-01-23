import Image from "next/image";
import profilePhoto from '@/public/profile/profile.jpeg'
import notion from "@/utils/notion";
import PageTitle from "@/components/page/PageTitle";

export default async function Profile() {
    const profilePage = process.env.PROFILE_PAGE_ID as string;
    const pageRes = await notion.blocks.children.list({ block_id: profilePage });
    const profileParagraph: string[] = [];
    for (const block of pageRes.results) {
        const paragraph = block["paragraph"]["rich_text"][0]["plain_text"];
        if (typeof paragraph == "string") {
            profileParagraph.push(block["paragraph"]["rich_text"][0]["plain_text"]);
        }
    }

    return (
        <div>
            <PageTitle title="Profile"/>
            <div className="flex justify-center gap-4">
                <Image
                    className="object-cover w-120 h-80"
                    src={profilePhoto}
                    alt="profile photo"
                    fill={false}
                ></Image>
                <div className="w-120 h-80">
                    {profileParagraph.map((value, index) => (<p key={value + String(index)}>{value}</p>))}
                </div>
            </div>
        </div>
    );
}