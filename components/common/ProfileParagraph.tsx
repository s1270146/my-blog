import { getProfile } from "@/utils/get-profile";

const ProfileParagraph = async ({
    isSmall
}:{
    isSmall: boolean
}) => {
    const profileParagraph = await getProfile({isSmall: isSmall});
    return profileParagraph.map((value, index) => (<p className="max-sm:text-xs" key={value + String(index)}>{value}</p>))
}

export default ProfileParagraph;