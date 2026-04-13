import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export const Code = ({
    children,
    className,
    ...rest
}: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps) => {
    const match = /language-(\w+)/.exec(className || "");
    const code = String(children).replace(/\n$/, "");

    if (match) {
        return (
            <pre className="my-4 overflow-x-auto rounded bg-mid-gray p-4 text-sm text-white">
                <code {...rest} className={className}>
                    {code}
                </code>
            </pre>
        );
    }

    return (
        <code {...rest} className={className}>
            {children}
        </code>
    );
}
