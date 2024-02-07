/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { MdOutlineFileDownloadDone } from "react-icons/md";
const Card = ({ data}) => {
    return (
        <motion.div drag whileDrag={{scale:1.2}} className=' w-60 h-72 bg-zinc-950 rounded-[40px] p-4 text-white opacity-80 relative overflow-hidden'>
            <span><FaRegFileAlt /></span>
            {/* // eslint-disable-next-line react/prop-types? */}
            <p className=' mt-2 leading-none tracking-tighter font-medium'>{data.desc}</p>
            <div className=' absolute flex justify-between items-center px-4 py-3 bottom-[20%] 0 left-0 w-full'>
                <p className=' font-medium'>{data.filesize}</p>
                <span>{data.downloadicon ? <GoDownload /> : <MdOutlineFileDownloadDone />}</span>
            </div>
            <div className={`absolute w-full left-0 ${data.color} text-black py-3 flex items-center justify-center font-medium bottom-0`}>{data.download ? 'Download' : 'Complete'}</div>
        </motion.div>
    )
}

export default Card
