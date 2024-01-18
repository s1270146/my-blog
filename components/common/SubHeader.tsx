import { jacquesFrancois } from "@/utils/font";

const SubHeader = () => {
    const textButtonClassName: string = jacquesFrancois.className + " text-white text-3xl";
    return (
        <div className="w-full flex justify-center items-center gap-4 bg-mid-grey py-1">
            <div className={textButtonClassName}>Article</div>
            <div className={textButtonClassName}>Work</div>
            <div className={textButtonClassName}>Daily</div>
            <div className={textButtonClassName}>Research</div>
            <div className={textButtonClassName}>Profile</div>
        </div>
    );
}

export default SubHeader;