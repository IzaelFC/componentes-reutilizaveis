import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { NeoBrutalist } from '@/components/cards/neo-brutalist'
import { CardCoffee } from "@/components/cards/card-coffee"
import { EventTicket } from "@/components/cards/event-ticket"

import './index.scss'
import { FashionCard } from "@/components/cards/fashion-card"

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

            <section>
                <Dialog>
                    <DialogTrigger>
                        <FashionCard />
                    </DialogTrigger>

                    <DialogContent className="w-[45vh] h-auto px-0 py-14">
                        <FashionCard />
                        <p className="inspiration">Inspiração: <a href="https://dribbble.com/shots/16292700-Fashion-cards" target="_blank">https://dribbble.com/shots/16292700-Fashion-cards</a></p>
                    </DialogContent>
                </Dialog>
            </section>
        </div>
    )
}