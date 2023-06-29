
import Nav from '../components/Nav'
import { motion } from 'framer-motion'
import TopNav from '../components/TopNav'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Portfolio = () => {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
  return (
      <div className="flex bg-[#081232] ">
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='grow flex flex-col'
      >
         <div className="p-8 border-b border-b-[#1D2746] w-full flex justify-between items-center">
          <div>
          <h1>Portfolio</h1>
             <p className="text-[#A8B7D8] text-xs">
            Last update: {String(currentTime)}
          </p>
          </div>
         <TopNav/>
      </div>
        <div className='w-full  flex items-center justify-center flex-col space-y-4 grow'>
          <h1>This is the Portfolio Page</h1>
          <Link to="/">
          <button className='px-4 py-2 bg-[#FFC266] cursor-pointer font-semibold text-[#081232] rounded-lg'>Back</button>
          </Link>
         </div>
      </motion.div>
     </div>
  )
}

export default Portfolio