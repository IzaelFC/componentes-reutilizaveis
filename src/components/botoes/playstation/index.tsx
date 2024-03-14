import { TbPlaystationTriangle } from "react-icons/tb";
import { TbPlaystationCircle } from "react-icons/tb";
import { TbPlaystationX } from "react-icons/tb";
import { TbPlaystationSquare } from "react-icons/tb";

import './index.scss'

export function PlayStationButton() {
    return (
        <main id="PlayStationButton">
            <TbPlaystationTriangle className="triangle" />
            
            <div className="middle">
                <TbPlaystationSquare className="square" />
                <TbPlaystationCircle className="circle" />
            </div>
            
            <TbPlaystationX className="x" />
        </main>
    )
}