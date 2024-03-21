import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { NeoBrutalist } from '@/components/cards/neo-brutalist'
import { CardCoffee } from "@/components/cards/card-coffee"
import { EventTicket } from "@/components/cards/event-ticket"

import './index.scss'

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

                    <DialogContent className="w-[60vh] h-[70vh]">
                        <CardCoffee />
                        <p className="inspiration">Inspiração: <a href="https://br.pinterest.com/pin/7318418139237081" target="_blank">https://br.pinterest.com/pin/7318418139237081</a></p>
                    </DialogContent>
                </Dialog>
            </section>

            <section>
                <Dialog>
                    <DialogTrigger className="size-full">
                        <EventTicket />
                    </DialogTrigger>

                    <DialogContent className="w-[55vh] h-[75vh]">
                        <EventTicket />
                        <p className="inspiration">Inspiração: <a href="https://br.pinterest.com/pin/981995893725168092" target="_blank">https://br.pinterest.com/pin/981995893725168092</a></p>
                    </DialogContent>
                </Dialog>
            </section>
        </div>
    )
}