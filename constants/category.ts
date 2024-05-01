// Notion DBのCATEGORYを変更したときに、ここの値を変更すればよい

type Category = {
    name: string,
    path: string,
    pascalName: string
}

export const CATEGORIES:Category[] = [
    {
        name: "tips",
        path: "/list/tips/1",
        pascalName: "Tips"
    },
    {
        name: "blog",
        path: "/list/blog/1",
        pascalName: "Blog"
    },
    {
        name: "work",
        path: "/list/work/1",
        pascalName: "Work"
    },
    // {
    //     name: "dialy",
    //     path: "/list/dialy/1",
    //     pascalName: "Dialy"
    // },
    // {
    //     name: "research",
    //     path: "/list/research/1",
    //     pascalName: "Research"
    // },
    {
        name: "math",
        path: "/list/math/1",
        pascalName: "Math"
    }
];