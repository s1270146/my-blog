import { jacquesFrancois } from "@/utils/font";

type PageTitleProps = {
    title: string
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <div className="pt-6 pb-2 flex justify-center">
            <h1 className={jacquesFrancois.className + " inline-block text-4xl border-b-4 border-mid-gray"}>{props.title}</h1>
        </div>
    );
}

export default PageTitle