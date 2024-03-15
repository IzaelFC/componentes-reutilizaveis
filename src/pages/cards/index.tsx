import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { NeoBrutalist } from '@/components/cards/neo-brutalist'

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
        </div>
    )
}