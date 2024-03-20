import { PiCactusThin } from "react-icons/pi";

import './index.scss'

export function CardCoffee() {
    return (
        <main id="card-coffee">
            <section className="cafe-logo">
                <PiCactusThin />
                <h1>Cafe</h1>
                <span>선인장</span>
            </section>

            <section className="cafe-bar">
                <div></div>
                <div></div>
            </section>

            <section className="cafe-informations">
                <span>대 표<span>홍정석</span></span>

                <div>
                    <div>
                        <p>A</p>
                        <p>T</p>
                        <p>M</p>
                        <p>E</p>
                    </div>

                    <div>
                        <p>경상남도 진주시 만경로 250</p>
                        <p>055-800-6666</p>
                        <p>010-8005-6719</p>
                        <p>daechan0520@naver.com</p>
                    </div>
                </div>
            </section>
        </main>
    )
}