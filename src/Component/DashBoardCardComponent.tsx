import {ReactNode} from "react";

interface props{
    title: string,
    children: ReactNode,
    count:number,
}

export function DashBoardCardComponent({title, children, count}: props) {
    return(
        <>
            <div className="staticCard" id="staticCard-fields">
                <h3>
                    {title}
                    {children}
                </h3>
                <p>{count}</p>
            </div>
        </>
    )
}