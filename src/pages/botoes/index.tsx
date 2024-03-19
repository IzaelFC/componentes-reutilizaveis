import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { IoExpand } from "react-icons/io5";

import { PlayStationButton } from '@/components/botoes/playstation'
import { SwitchButton } from "@/components/botoes/switch-button"

import './index.scss'

export function Botoes() {
    return (
        <div id='botoes'>
            <section>
                <Dialog>
                    <DialogTrigger className="absolute top-0 right-0 mt-3 mr-3 size-fit">
                        <IoExpand />
                    </DialogTrigger>
                    
                    <PlayStationButton />

                    <DialogContent className="size-[50vh]">
                        <PlayStationButton />
                        <p className="inspiration">Inspiração: <a href="https://br.pinterest.com/pin/846043480016291597" target="_blank">https://br.pinterest.com/pin/846043480016291597</a></p>
                    </DialogContent>
                </Dialog>
            </section>

            <section>
                <Dialog>
                    <DialogTrigger className="absolute top-0 right-0 mt-3 mr-3 size-fit">
                        <IoExpand />
                    </DialogTrigger>

                    <SwitchButton />
                    
                    <DialogContent className="size-[50vh]">
                        <SwitchButton />
                    </DialogContent>
                </Dialog>
            </section>
        </div>
    )
}