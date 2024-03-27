import './index.scss'

import cat from '@/assets/reminder-card/cat.jpg'

export function ReminderCard() {
    return (
        <main id='reminder-card'>
            <img src={ cat } alt="" />

            <div className='reminder-text'>
                <p>Reminder</p>
                <p>Reminder</p>
                <p>Reminder</p>
            </div>
        </main>
    )    
}