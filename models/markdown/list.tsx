import { ClassAttributes, LiHTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export const Li = ({
    children,
    node
}:ClassAttributes<HTMLLIElement> & LiHTMLAttributes<HTMLLIElement> & ExtraProps)=>{
    if(typeof node!=="undefined" && ("className" in node.properties)){
        return <div>{children}</div>;
    }
    return <li className="list-disc">test</li>;
}