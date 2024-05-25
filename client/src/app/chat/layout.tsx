import WindowContainer from "@/components/chat/WindowContainer.component";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "IM - Home",
    description: "Chat with your friends on IM!",
};

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen w-screen">
            <WindowContainer title="User's Buddy List" menuBar={["My AIM", "People", "Help"]}>
                <span>Buddy List</span>
            </WindowContainer>
            <div className="flex-1">{children}</div>
        </div>
    );
}
