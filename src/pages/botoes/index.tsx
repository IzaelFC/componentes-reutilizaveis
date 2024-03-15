import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { PlayStationButton } from '@/components/botoes/playstation'

import './index.scss'

export function Botoes() {
    return (
        <div id='botoes'>
            <section>
                <Dialog>
                    <DialogTrigger className="size-full">
                        <PlayStationButton />
                    </DialogTrigger>

                    <DialogContent className="size-[50vh]">
                        <PlayStationButton />
                        <p className="inspiration">Inspiração: <a href="https://br.pinterest.com/pin/846043480016291597" target="_blank">https://br.pinterest.com/pin/846043480016291597</a></p>
                    </DialogContent>
                </Dialog>
            </section>
        </div>
    )
}