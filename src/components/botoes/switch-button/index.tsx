import './index.scss'

export function SwitchButton(){
    return (
        <main id="switch-button">
            <input id='switch' type="checkbox" />
            
            <label for='switch'>
                <span></span>
            </label>
        </main>
    )
}