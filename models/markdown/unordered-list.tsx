import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export const Ul = ({
    children,
    node
}: ClassAttributes<HTMLUListElement> & HTMLAttributes<HTMLUListElement> & ExtraProps) => {
    if (typeof node !== "undefined" && !("className" in node.properties)) {
        return <div className="mb-2 mt-4">{children}</div>;
    }
    return <div className="mb-2 mt-4">
        <ul className="list-disc list-outside">
            {children}
        </ul>
    </div>;
}