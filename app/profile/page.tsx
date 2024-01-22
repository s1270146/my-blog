import Image from "next/image";
import profilePhoto from '@/public/profile/profile.jpeg'
import notion from "@/utils/notion";
import { jacquesFrancois } from "@/utils/font";

export default async function Profile() {
    const profilePage = "3743f32f-de38-477a-9100-ffdf954b55ef";
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
            <div className="pt-6 pb-2 flex justify-center">
                <h1 className={jacquesFrancois.className + " inline-block text-4xl border-b-4 border-mid-gray"}>Profile</h1>
            </div>
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