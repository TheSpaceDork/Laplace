import profile from "../assets/profile.png"
import { useState } from "react"
const TopNav = () => {
    const [isClicked, setIsClicked] = useState(true)
  return (
      <div className="flex space-x-7 items-center">
          <div className="px-4 py-2 bg-[#FFC266] cursor-pointer font-semibold text-[#081232] rounded-lg">
              Create New
          </div>
          <div className="flex items-center space-x-7 text-white text-xl">
              <div><i className="fa-solid fa-magnifying-glass"></i></div>
              
              <div> <i className="fa-solid fa-circle-exclamation"></i></div>
             
              <div><i className="fa-solid fa-bell"></i></div>
          </div>
          <div className="cursor-pointer">
              <img src={profile}alt="" className="object-contain" />
          </div>
          <div className="border flex space-x-4 items-center cursor-pointer border-white rounded-lg px-4 py-2 text-white">
              <p>USD</p>
              {isClicked ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}
          </div>
    </div>
  )
}

export default TopNav