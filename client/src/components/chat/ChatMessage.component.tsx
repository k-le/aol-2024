import React from "react";

interface ChatMessageProps {
    self: boolean;
    senderName: string;
    content: string;
}

export default function ChatMessage({ self, senderName, content }: Readonly<ChatMessageProps>) {
    const textColor = self ? "text-aol-text-blue" : "text-aol-text-red";

    const messageLines = content.split("\n").map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div>
            <span className={`${textColor} font-bold`}>{senderName}:</span>{" "}
            <span className="font-thin">{messageLines}</span>
        </div>
    );
}
