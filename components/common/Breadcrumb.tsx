type Path = {
    path: string,
    name: string
}

type BreadcrumbProps = {
    paths: Path[]
}

const Breadcrumb = (props: BreadcrumbProps) => {
    return (
        <div className="flex flex-wrap justify-start gap-4 my-4 max-sm:text-xs">
            <a href="/">
                home
            </a>
            {
                props.paths.map((value)=><div key={`bread ${value.name}`} className="max-sm:w-3/4 flex justify-start gap-4">
                    <p>&#8811;</p>
                    <a href={value.path} className="text-ellipsis whitespace-nowrap overflow-hidden">{value.name}</a>
                </div>)
            }
        </div>
    );
}

export default Breadcrumb;