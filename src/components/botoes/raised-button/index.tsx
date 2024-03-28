import { PiGithubLogoBold } from "react-icons/pi";
import { PiInstagramLogoBold } from "react-icons/pi";
import { PiFacebookLogoBold } from "react-icons/pi";
import { PiPinterestLogoBold } from "react-icons/pi";

import './index.scss'

export function RaisedButton() {
    return (
        <main id='raised-button'>
            <button>
                <PiGithubLogoBold />
            </button>

            <button>
                <PiInstagramLogoBold />
            </button>
            
            <button>
                <PiFacebookLogoBold />
            </button>

            <button>
                <PiPinterestLogoBold />
            </button>
        </main>
    )
}