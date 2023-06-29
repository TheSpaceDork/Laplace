import { Link } from "react-router-dom"
import Nav from "../components/Nav"
import { motion } from "framer-motion"

const Reports = () => {
  return (
      <div className="flex bg-[#081232] ">
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center justify-center grow"
      >
        <div className='  flex items-center  flex-col space-y-4 '>
          <h1>This is the Reports Page</h1>
          <Link to="/">
          <button className='px-4 py-2 bg-[#FFC266] cursor-pointer font-semibold text-[#081232] rounded-lg'>Back</button>
          </Link>
         </div>
         
      </motion.div>
     </div>
  )
}

export default Reports