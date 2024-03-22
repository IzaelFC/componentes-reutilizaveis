import { useState } from 'react'

import './index.scss'

export function SwitchButton(){
    const [switchColor, setSwitchColor] = useState(false)

    function handleSwitch(){
        setSwitchColor(!switchColor)
    }

    return (
        <main id="switch-button">
            <section onClick={ handleSwitch }>
                <span className={ switchColor ? 'switch-color' : 'switch-color2' }></span>
            </section>
        </main>
    )
}