import Image from "next/image";

interface WindowContainerProps {
    title: string;
    menuBar: string[];
    children: React.ReactNode;
    className?: string;
}

export default function WindowContainer({
    title,
    menuBar,
    children,
    className = "",
}: Readonly<WindowContainerProps>) {
    const menuBarItems = menuBar.map((item) => {
        return (
            <span key={item} className="hover:bg-gray-200 hover:cursor-pointer p-[2px]">
                <u>{item.charAt(0)}</u>
                {item.slice(1)}
            </span>
        );
    });

    return (
        <div
            className={
                "flex flex-col h-screen bg-aol-gray p-[.2rem] box-border " +
                "border-t-[2px] border-t-aol-light-gray border-l-[2px] border-l-aol-light-gray " +
                "border-b-[2px] border-b-gray-900 border-r-[2px] border-r-gray-900 " +
                className
            }
        >
            <div className="flex justify-between items-center w-full bg-aol-blue text-white p-[.125rem]">
                <div className="flex items-center gap-x-[.125rem]">
                    <Image src="/images/aimRunningMan.png" width={22} height={22} alt="IM Logo" />
                    <div>{title}</div>
                </div>
                <div className="flex gap-x-[4px] ml-4 mb-1">
                    <div className="flex gap-x-[1px]">
                        {/* TODO: Turn these into components later */}
                        <div
                            className={
                                "w-[20px] h-[20px] bg-aol-gray text-center box-border " +
                                "border-t border-t-gray-100 border-l border-l-gray-100 " +
                                "border-b border-b-gray-900 border-r border-r-gray-900 " +
                                "hover:cursor-pointer active:transform active:translate-y-[1.5px]"
                            }
                        >
                            <span className="text-black font-extrabold">–</span>
                        </div>
                        <div
                            className={
                                "w-[20px] h-[20px] bg-aol-gray flex justify-center pt-[2px] box-border " +
                                "border-t border-t-gray-100 border-l border-l-gray-100 " +
                                "border-b border-b-gray-900 border-r border-r-gray-900 " +
                                "hover:cursor-pointer active:transform active:translate-y-[1.5px]"
                            }
                        >
                            <div
                                className={
                                    "w-[14px] h-[14px] box-border border-black " +
                                    "border-t-4 border-l-2 border-b-2 border-r-2"
                                }
                            ></div>
                        </div>
                    </div>
                    <div
                        className={
                            "relative flex justify-center items-center pt-[2px] " +
                            "w-[20px] h-[20px] bg-aol-gray text-center box-border " +
                            "border-t border-t-gray-100 border-l border-l-gray-100 " +
                            "border-b border-b-gray-900 border-r border-r-gray-900 " +
                            "hover:cursor-pointer active:transform active:translate-y-[1.5px]"
                        }
                    >
                        <div className="absolute top-1/2 left-1/2 w-4 h-[2px] bg-black transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                        <div className="absolute top-1/2 left-1/2 w-4 h-[2px] bg-black transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                    </div>
                </div>
            </div>
            <div className="flex w-max gap-x-2 p-[2px] text-sm">{menuBarItems}</div>
            <hr className="border-aol-dark-gray bg-aol-dark-gray" />
            <hr className="border-white bg-white" />
            {children}
        </div>
    );
}
