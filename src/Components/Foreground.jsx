// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null)
    let data = [
        { desc: 'Lorem ipsum, dolor sit amet  adipisicing elit. Optio ducimus ipsum corrupti enim facere distinctio porro ratione.', filesize: '.05mb', downloadicon: true, download: true, color: 'bg-green-500' },
        { desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing ', filesize: '.09mb', downloadicon: false, download: false, color: 'bg-blue-500' },
        { desc: 'Optio ducimus ipsum corrupti enim facere distinctio porro ratione.', filesize: '.07mb', downloadicon: true, download: true, color: 'bg-green-500' },
        { desc: 'Torem ipsum, dolor sit amet consectetur adipisicing elit. Optio ducimus ipsum corrupti enim facere distinctio porro ratione.', filesize: '23mb', downloadicon: false, download: false, color: 'bg-blue-500' },



    ]
    return (
        <div className=' w-full h-screen fixed z-[3] p-6 flex gap-[30px] '>
            {data.map((e) => (
                // eslint-disable-next-line react/jsx-key
                <Card data={e} reference={ref} />
            ))}

        </div>
    )
}

export default Foreground
{/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ducimus ipsum corrupti enim facere distinctio porro ratione.</p> */ }