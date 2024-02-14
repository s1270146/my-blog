import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const Code = ({
    node,
    children,
    className,
    ...rest
}: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps) => {
    const match = /language-(\w+)/.exec(className || '')
    return match ? (
        <SyntaxHighlighter
            PreTag="div"
            language={match[1]}
            style={dark}
        >
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    ) : (
        <code {...rest} className={className}>
            {children}
        </code>
    )
}