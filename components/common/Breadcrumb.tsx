type Path = {
    path: string,
    name: string
}

type BreadcrumbProps = {
    paths: Path[]
}

const Breadcrumb = (props: BreadcrumbProps) => {
    return (
        <div className="flex justify-start gap-4 my-4">
            <a href="/">
                home
            </a>
            {
                props.paths.map((value)=><div key={`bread ${value.name}`} className="flex justify-start gap-4">
                    <p>&#8811;</p>
                    <a href={value.path} className="text-ellipsis whitespace-nowrap overflow-hidden">{value.name}</a>
                </div>)
            }
        </div>
    );
}

export default Breadcrumb;