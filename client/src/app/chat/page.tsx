"use client";

import ChatMessage from "@/components/chat/ChatMessage.component";
import WindowContainer from "@/components/chat/WindowContainer.component";
import { ChatMessage as Message } from "@/models/chat/ChatMessage.model";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ChatHome() {
    const userName = "User";
    const initialMessages: Message[] = [
        { id: uuidv4(), sender: "System", content: "Open a chat with a friend!" },
    ];

    const [messages, setMessages] = useState<Message[]>(initialMessages);

    const chatMessages = messages.map((message) => (
        <ChatMessage
            key={message.id}
            self={message.sender === userName}
            senderName={message.sender}
            content={message.content}
        />
    ));

    function submitMessage(
        event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>,
    ) {
        event.preventDefault();
        let content = "";

        if (event.currentTarget instanceof HTMLTextAreaElement) {
            content = event.currentTarget.value.trim();
        } else if (event.currentTarget instanceof HTMLFormElement) {
            const textarea = event.currentTarget.querySelector("textarea");
            if (textarea instanceof HTMLTextAreaElement) {
                content = textarea.value.trim();
            }
        }

        if (!content) return;

        const newMessage: Message = {
            id: uuidv4(),
            sender: userName,
            content: content,
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        if (event.currentTarget instanceof HTMLTextAreaElement) {
            event.currentTarget.value = "";
        } else if (event.currentTarget instanceof HTMLFormElement) {
            const textarea = event.currentTarget.querySelector("textarea");
            if (textarea instanceof HTMLTextAreaElement) {
                textarea.value = "";
            }
        }

        console.log("Messages:" + JSON.stringify(messages));
    }

    return (
        <WindowContainer title="Home" menuBar={["File", "Edit", "View"]} className="w-full">
            <div className="flex flex-col w-full h-full px-1 py-2">
                <div
                    className={
                        "p-1 box-border bg-white min-h-40 h-[60%] overflow-y-auto text-base mb-2 " +
                        "border-t-[2px] border-t-gray-900 border-l-[2px] border-l-gray-900 " +
                        "border-b-[2px] border-b-aol-light-gray border-r-[2px] border-r-aol-light-gray"
                    }
                >
                    <div className="flex flex-col gap-y-1">{chatMessages}</div>
                </div>
                <hr className="border-aol-dark-gray bg-aol-dark-gray" />
                <hr className="border-white bg-white" />
                <form className="w-full" onSubmit={submitMessage}>
                    <textarea
                        id="chat-input"
                        className={
                            "p-1 box-border bg-white min-h-24 text-base mt-2 w-full " +
                            "border-t-[2px] border-t-gray-900 border-l-[2px] border-l-gray-900 " +
                            "border-b-[2px] border-b-aol-light-gray border-r-[2px] border-r-aol-light-gray " +
                            "outline-none focus:outline-none"
                        }
                        onKeyDown={(event) => {
                            if (event.key === "Enter" && !event.shiftKey) {
                                console.log("Enter pressed!");
                                event.preventDefault();
                                submitMessage(event);
                            }
                        }}
                    />
                </form>
            </div>
        </WindowContainer>
    );
}
