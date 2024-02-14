import { getProfile } from "@/utils/get-profile";

const ProfileParagraph = async ({
    isSmall
}:{
    isSmall: boolean
}) => {
    const profileParagraph = await getProfile({isSmall: isSmall});
    return profileParagraph.map((value, index) => (<p key={value + String(index)}>{value}</p>))
}

export default ProfileParagraph;