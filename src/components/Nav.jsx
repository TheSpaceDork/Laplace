import { NavLink } from "react-router-dom"
import logo from "../assets/logo-desktop.png"
import book from "../assets/book.png"
const Nav = () => {
    const activeLink = "border-r-[3px] border-r-[#FFC266] !text-[#FFC266] flex items-center space-x-6"
    const normalLink = "flex items-center space-x-6 text-white duration-700 ease-in-out"
  return (
      <div className='bg-[#030D2E] h-screen w-[16rem] relative left-0 top-0 bottom-0 py-8 pl-8'>
          
          <div className="w-[90px]">
              <img src={logo} alt="" />
          </div>
          {/* nav links */}
          <div className="mt-16 space-y-8">
                  <div className="w-full ">
              <NavLink
                    className={({isActive}) => (isActive ? activeLink : normalLink)}
                     to="/">
                      <i className="fa-solid fa-house"></i>
                      <p>Overview</p>
             </NavLink>
              </div>
              <div className="w-full text-white">
                  <NavLink
                      className={({isActive}) => (isActive ? activeLink : normalLink)}
                      to="/portfolio">
                      <i className="fa-regular fa-folder-open"></i>
                      <p>Portfolio</p>
                      </NavLink>
              </div>
              <div className="w-full">
                  <NavLink
                       className={({isActive}) => (isActive ? activeLink : normalLink)}
                      to="/wishlist">
                      <i className="fa-solid fa-star"></i>
                      <p>Wishlist</p>
                      </NavLink>
              </div>
              <div className="w-full">
                  <NavLink
                   className={({isActive}) => (isActive ? activeLink : normalLink)}
                      to="/orders">
                      <i className="fa-solid fa-chart-line"></i>
                      <p>Orders & Trades</p>
                      </NavLink>
              </div>
              <div className="w-full">
                  <NavLink
                       className={({isActive}) => (isActive ? activeLink : normalLink)}
                      to="/reports">
                      <i className="fa-solid fa-file"></i>
                      <p>Reports</p>
                   </NavLink>
              </div>
              <div className="w-full">
                  <NavLink
                       className={({isActive}) => (isActive ? activeLink : normalLink)}
                      to="/taxes">
                      <i className="fa-solid fa-percent"></i>
                      <p>Taxes</p>
                  </NavLink>
              </div>
             
              <div className="w-full absolute bottom-8 flex items-center">
                  <div className="bg-[#121D3E] rounded-lg h-[13rem] w-[12rem] text-center space-y-4 pb-6 pt-10 flex items-center flex-col relative">
                      <div className="absolute -top-[70px]">
                          <img src={book} alt="" />
                      </div>
                      <h1 className="font-bold">Laplace Academy</h1>
                      <p className="text-[#D0D2D8] text-xs w-[80%]">
                          Join Laplace Academy seminars and improve your investing skill!
                      </p>
                      <button className="rounded-lg px-4 py-2 bg-[#ffc266] bg-opacity-10 text-[#FFC266] text-sm">Join For Free</button>
                  </div>
                  
              </div>
             
             
              
          </div>
    </div>
  )
}

export default Nav