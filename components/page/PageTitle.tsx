import { jacquesFrancois } from "@/utils/font";

type PageTitleProps = {
    title: string
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <div className="flex justify-center">
            <div className="pt-6 pb-2 w-3/4">
                <h1 className={jacquesFrancois.className + " inline-block md:text-4xl text-xl tracking-[0.4rem] md:tracking-[1em] border-b-4 border-mid-gray pb-2 my-2"}>{props.title}</h1>
            </div>
        </div>
    );
}

export default PageTitle