import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { NeoBrutalist } from '@/components/cards/neo-brutalist'

import './index.scss'
import { CardCoffee } from "@/components/cards/card-coffee"

export function Cards() {
    return (
        <div id='cards'>
            <section>
                <Dialog>
                    <DialogTrigger className="size-full">
                        <NeoBrutalist />
                    </DialogTrigger>

                    <DialogContent className="size-[70%]">
                        <NeoBrutalist />
                    </DialogContent>
                </Dialog>
            </section>

            <section>
                <Dialog>
                    <DialogTrigger className="size-full">
                        <CardCoffee />
                    </DialogTrigger>

                    <DialogContent className="size-[70%]">
                        <CardCoffee />
                        <p className="inspiration">Inspiração: <a href="https://br.pinterest.com/pin/7318418139237081" target="_blank">https://br.pinterest.com/pin/7318418139237081</a></p>
                    </DialogContent>
                </Dialog>
            </section>
        </div>
    )
}