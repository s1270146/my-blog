import { AnchorHTMLAttributes, ClassAttributes } from "react";
import { ExtraProps } from "react-markdown";

export const A = ({
    node
}: ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps) => {
    const url = node ? node.properties.href : "";
    return <iframe
        className="mx-auto w-full max-w-7xl dark:opacity-80 mt-4 mb-4"
        src={`https://hatenablog-parts.com/embed?url=${url}`}
    />
}