import {ReactNode} from "react";

interface props{
    title: string,
    children: ReactNode,
    count:number,
    bgColor: string;
}

export function DashBoardCardComponent({title, children, count,bgColor}: props) {
    return (
        <div className={`staticCard p-4 rounded-lg shadow-lg text-white ${bgColor}`}>
            <h3 className="flex items-center text-lg font-semibold">
                {children} <span className="ml-2">{title}</span>
            </h3>
            <p className="text-2xl font-bold">{count}</p>
        </div>
    )
}