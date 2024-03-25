import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { NeoBrutalist } from '@/components/cards/neo-brutalist'
import { CardCoffee } from "@/components/cards/card-coffee"
import { EventTicket } from "@/components/cards/event-ticket"
import { FashionCard } from "@/components/cards/fashion-card"

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

                    <DialogContent className="sm:w-[60vh] w-[55vh] h-[70vh]">
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

                    <DialogContent className="w-[45vh] h-[75vh] justify-center ">
                        <EventTicket />
                        <p className="inspiration">Inspiração: <a href="https://br.pinterest.com/pin/981995893725168092" target="_blank">https://br.pinterest.com/pin/981995893725168092</a></p>
                    </DialogContent>
                </Dialog>
            </section>

            <section>
                <Dialog>
                    <DialogTrigger className="bg-orange-500 size-full rounded-lg">
                        <FashionCard />
                    </DialogTrigger>

                    <DialogContent className="w-[45vh] h-auto px-0 sm:py-14 py-10">
                        <FashionCard />
                        <p className="inspiration">Inspiração: <a href="https://dribbble.com/shots/16292700-Fashion-cards" target="_blank">https://dribbble.com/shots/16292700-Fashion-cards</a></p>
                    </DialogContent>
                </Dialog>
            </section>
        </div>
    )
}