import { ClassAttributes, HTMLAttributes } from "react"
import { ExtraProps } from "react-markdown"

export const H2 = ({
    node
}: ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement> & ExtraProps) => {
    const text = typeof node !== "undefined" && node.children.length > 0 && "value" in node.children[0]
        ? node?.children[0]["value"]
        : "";
    return <h2 id={text} >
        {text}
    </h2>
}