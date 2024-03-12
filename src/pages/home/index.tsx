import { useNavigate } from "react-router-dom"

import './index.scss'

export function Home() {
    const navigate = useNavigate()

    function toPage(page: string) {
        navigate(`/${page}`)
    }

    return (
        <main id="navigation">
            <a onClick={ () => toPage('botoes') }>
                <p>- Botoes</p>
                <div className="animation_in_bar"></div>
            </a>
            <a onClick={ () => toPage('cards') }>
                <p>- Cards</p>
                <div className="animation_in_bar"></div>
            </a>
            <a onClick={ () => toPage('estilos') }>
                <p>- Estilos</p>
                <div className="animation_in_bar"></div>
            </a>
            <a onClick={ () => toPage('paginas') }>
                <p>- Paginas</p>
                <div className="animation_in_bar"></div>
            </a>
        </main>
    )
}