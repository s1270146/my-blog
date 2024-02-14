import { ClassAttributes, HTMLAttributes } from "react"
import { ExtraProps } from "react-markdown"

export const H3 = ({
    node
}:ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement> & ExtraProps)=>{
    const text = typeof node!=="undefined" && node.children.length > 0 && "value" in node.children[0]
    ? node?.children[0]["value"]
    : "";
    return <h3 id={text} className="text-xl font-bold border-b-4 border-mid-gray mt-4 mb-2">
        {text}
    </h3>
}