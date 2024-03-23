import { AiOutlineTrademark } from "react-icons/ai";

import eye from '@/assets/fashion-card/eye.jpg'

import './index.scss'

export function FashionCard(){
    return (
        <main id="fashion-card">
            <div className='title'>
                <h1>Andrea</h1>
                <div>
                    <h1>Weston</h1>
                    <span><AiOutlineTrademark /></span>
                </div>
            </div>
            
            <img src={ eye } alt="" />
            <p>Andrea is a photographer, director and creative director based in New York. Also know as one half of the photography duo NEWPHOTO.</p>
            <span>Editorial ¹</span>
        </main>
    )
}